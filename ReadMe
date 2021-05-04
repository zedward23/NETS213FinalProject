Group Members:
Edward, Henry, Etan, Griffin, and Amy

Script to scrape Reddit posts/comments - We will write a script that scrapes top posts/comments off r/WallStreetBets. 
This is to get data relating to the “hype” around stock. We will format this information into a CSV file and feed it 
MTurkers for them to evaluate if the post/comment sentiment is positive or negative. The CSV will have broken down the 
comments into phrases of a standardized size. This step is necessary to gather data for workers to determine the sentiment 
for our neural network. 3 points.

Preprocessing/Curation of data & Sentiment Analysis - After gathering the required data, we will need to preprocess the 
comments. First, we need to clean comments of any extraneous unneeded information, such as emojis, misspelled words,
punctuations, etc. Next, we will need to decide how to standardize the data that we want to feed into the Mturk. 
We are aiming to keep each task relatively short. Furthermore, we will need to create a dictionary for unfamiliar 
terms that appear frequently in the tasks. For sentiment analysis, we will be using existing libraries to help us gauge 
the results. 3 points 

Design of MTurk and tasks- We will use parallel processing for comments. Each comment would be marked as positive/negative 
by 5 workers. The majority vote will decide the comment’s sentiment. We plan to have each comment as a task. We will use 
the MTurk labels as our data for our neural network. We are using MTurk as our main crowdsourcing platform. We are using 
parallel processing for quality control and to ensure higher accuracy. We are using 5 workers to determine the sentiment 
for each comment since we need a majority. Prior to accepting the tasks for each worker, we will have a survey that will 
be asking relevant demographic information to help our analysis. 2 points. 

Neural Network - Using the data from our MTurk results, we will feed the results/data into a neural network. We will feed 
the data into a categorical classifier fast.ai network. This will entail a decent amount of code, where we have to train 
a network. The intent is for a user to input some stock, and the network would spit out the what % feel positive/neutral/negative. 
4 points.

Script to Scrape posts/comments Relating to certain stock - Write a script that takes in a stock name as a parameter, and 
replaces all mentions of that stock name with a generic term. This is both to prevent MTurkers from applying personal knowledge 
about certain stocks and to hopefully hold input in as controlled a manner possible for the fastAi neural network to work 
off of. 2 points

Final UI Design - Code a basic web application or a local application that allows users to utilize the model to see Reddit’s 
sentiment towards a stock through an actual graphical user interface. This will connect to fastAI somehow and feed the user 
input directly into our scripts. 3 points.

Next Steps:
Quality Assurance Module: 
Depending on time constraints, we may run a second pass of quality assurance using the EM algorithm on the current results of our weighted majority vote QA module.

Aggregation Module:
There is not much to improve here.

Once AI/ML is added we will add a new variant of our Quality Assurance Module.
This will compare default quality controlled MTurker Labelled Data (like HW7) with Neural Network outputted results to vet and throw out poor results as well as to validate the performance of the AI. This may be as simple as throwing out mismatching results.


