# -*- coding: utf-8 -*-
"""Reddit Scrapper With User Input.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1rswv_eVSC8Eu5z8jshFo7BQA9n1VBXC7
"""

import praw
import pandas as pd
import numpy as np
from datatime import date

user_agent = "WallStreetScrapes v1 by /u/scraperSupreme"
reddit = praw.Reddit(
    client_id="eaGL1Ft_TPajuw",
    client_secret="UTM0y2n8IhCFFZ_umjVh4Gs7bAiMNw",
    user_agent=user_agent
)

from praw.models import MoreComments

def scrape(date, stockName, stockTicker):
  ddUrl = "https://www.reddit.com/r/wallstreetbets/comments/mz6iks/what_are_your_moves_tomorrow_april_27_2021/"
  ddThread = reddit.submission(url=ddUrl)

  data = pd.DataFrame(columns = ['stock', 'comment', 'score'])

  numberOfComments = 400
  for i in range(numberOfComments):
    if isinstance(ddThread.comments[i], MoreComments):
      break
    data.at[i, 'comment'] = ddThread.comments[i].body
    data.at[i, 'score'] = ddThread.comments[i].score

    stockNames = [stockName, stockTicker]
    data.at[i, 'stock'] = "stock"
    for stockName in stockNames:
      if stockName.lower() in ddThread.comments[i].body.lower():
        data.at[i, 'stock'] = stockName.upper()
        data.at[i, 'comment'] = ddThread.comments[i].body.lower().replace(stockName.lower(), "[stockName]")
    
  
  thread = data
  stockComments = [thread["comment"][x] for x in range(thread["stock"].size) if thread["stock"][x] != "stock"]
  commentsToParse = pd.DataFrame(stockComments, columns = ["Comment"])
  return commentsToParse
    
def main():
    # Read in CVS result file with pandas
    data = scrape()

    # Call the aggregation function #
    decision = should_buy(input)

    print(decision)

if __name__ == '__main__':
    main()

data.to_csv('ddThread_' + ddUrl[-14:-1] + '.csv', index=False)



# with pd.option_context('display.max_rows', None, 'display.max_columns', None):  # more options can be specified also
#   display(data)