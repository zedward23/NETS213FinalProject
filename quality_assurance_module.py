# -*- coding: utf-8 -*-
"""Quality Assurance Module.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1Jypoie0MbMyjtzxdIjch0iEcRoNNdVra

Weighted Majority Rule: This will be where we re-label our data using our quality assurance module's code
"""

import pandas as pd
import numpy as np

def parseDDThread (thread):
    stockComments = [thread["comment"][x] for x in range(thread["stock"].size) if thread["stock"][x] != "stock"]
    commentsToParse = pd.DataFrame(stockComments, columns = ["Comment"])
    return commentsToParse

def weighted_majority_vote_workers(mturk_res):
    groupedByWorkers = mturk_res.groupby("WorkerId")
    workers = [x[0] for x in groupedByWorkers]
    workerTotals = [0.0] * len(workers)
    workerCorrect = [0.0] * len(workers)
    workerScores = pd.DataFrame(workerCorrect, columns = ["correct"], index = workers)
    workerScores["total"] = workerTotals
    
    for x in groupedByWorkers:
      for y,z in zip(x[1]["Answer.neg_qual_ctrl"], x[1]["Answer.pos_qual_ctrl"]):
        workerScores["total"][x[0]] += 2.0
        if (y == "Negative"):
          workerScores["correct"][x[0]] += 1.0
        if (z == "Positive" or "Neutral/Unable to tell"):
          workerScores["correct"][x[0]] += 1.0
      
    workerScores["score"] = workerScores["correct"] / workerScores["total"]
    workerScores = workerScores.drop(columns = ["correct", "total"])
    workerScores.reset_index(inplace=True)
    workerScores = workerScores.rename(columns = {'index' : 'WorkerId'})

    return workerScores

#Fill out this method: this should return the labeled data
def weighted_majority_vote(mturk_res, workers):
    input = list(mturk_res.groupby('Input.comment'))
    results = []
    #for bigger dataset, will need to filtered for matching WorkerIds for each HIT
    #sorted in order to process faster 
    scores = workers[['WorkerId','score']].values.tolist()
    counter = 0
    for c in range(0, len(input)):
      #same as for comment in above
      temp = input[c][1][['HITId','WorkerId', 'Answer.summary', 'Input.comment']].values.tolist()
      pos = 0
      neg = 0
      #either preprocess for nans & other answers or add a section to ignore them
      for l in range(0, len(temp)):
        if (temp[l][1] == scores[l][0]):
          if (temp[l][2] == 'Positive'):
            pos += scores[l][1]
          else:
            neg += scores[l][1]

    #need to find margins for neutral being a neutral answer
      if (pos >= neg):
        results.append((temp[l][3], 1))
      else:
        results.append((temp[l][3], 0))
    return results

def labelComments (userLabeledData):
    workerIds = userLabeledData["WorkerId"]
    HITIds = userLabeledData["HITId"]
    data1 = pd.DataFrame(workerIds, columns = ["WorkerId"])
    data2 = pd.DataFrame(workerIds, columns = ["WorkerId"])
    data3 = pd.DataFrame(workerIds, columns = ["WorkerId"])

    posComments = userLabeledData["Answer.comment1"]
    negComments = userLabeledData["Answer.comment2"]
    comment1 = userLabeledData["Input.text3"]
    answer1 = userLabeledData["Answer.comment3"]
    comment2 = userLabeledData["Input.text4"]
    answer2 = userLabeledData["Answer.comment4"]
    comment3 = userLabeledData["Input.text5"]
    answer3 = userLabeledData["Answer.comment5.label"]

    data1["HITId"] = HITIds
    data2["HITId"] = HITIds
    data3["HITId"] = HITIds
    
    data1["Answer.pos_qual_ctrl"] = posComments
    data2["Answer.pos_qual_ctrl"] = posComments
    data3["Answer.pos_qual_ctrl"] = posComments

    data1["Answer.neg_qual_ctrl"] = negComments
    data2["Answer.neg_qual_ctrl"] = negComments
    data3["Answer.neg_qual_ctrl"] = negComments

    data1["Input.comment"] = comment1
    data2["Input.comment"] = comment2
    data3["Input.comment"] = comment3

    data1["Answer.summary"] = answer1
    data2["Answer.summary"] = answer2
    data3["Answer.summary"] = answer3

    data = pd.concat([data1, data2])
    data = pd.concat([data, data3])
    data = data.reset_index(drop=True)
    
    workers = weighted_majority_vote_workers(data)
    return weighted_majority_vote(data, workers)

def main():
    #thread = pd.read_csv('ddThread4_19_21.csv')
    #parseDDThread(thread)
    userLabeledData = pd.read_csv('/content/StockSentimentAnalysisResults - StockSentimentAnalysisResults.csv')
    #display(userLabeledData)
    #labelComments(userLabeledData) #make this write to a CSV

    df = pd.DataFrame(labelComments(userLabeledData), columns=['words', 'intent_label'])
    display(df)
    df.to_csv('Labeled_data.csv')
if __name__ == '__main__':
    main()