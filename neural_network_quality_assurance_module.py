# -*- coding: utf-8 -*-
"""QA2.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1ueRof3gCgDl9GPVHbSZTu4LjZW118S90
"""

import pandas as pd
import numpy as np

def labelComments (machineLabeledData):
    guarenteePos = ["🚀", "rock hard", "to the moon", "💎", "or bust", "rocket", "won't stop", "🌙", "LFG"]
    guarenteeNeg = ["cuck", "red as fuck", "will tank", "overevaluated", "overvalued", "tank", "plummet"]

    for x in machineLabeledData:
      for phrase in guarenteePos:
        if phrase.lower() in x["Comment"].lower() and x["Label"].lower() == "false":
          x["Label"] == "true"
      for phrase in guarenteeNeg:
          if phrase.lower() in x["Comment"].lower() and x["Label"].lower() == "true":
            x["Label"] == "false"

    return machineLabeledData

def main():
    userLabeledData = pd.read_csv('QASampleInput.csv')
    labelComments(userLabeledData)
    df = pd.DataFrame(labelComments(userLabeledData), columns=['Comment', 'Label'])
    df.to_csv('Labeled_data.csv')

if __name__ == '__main__':
    main()