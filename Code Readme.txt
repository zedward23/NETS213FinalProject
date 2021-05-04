Reddit Scraper:
The Reddit Scraper uses the praw python package to algorithmically extract the comment text and upvote score of the first n (usually 400) Reddit comments of a specified post/thread url as sorted by best (comments with the highest upvote scores at the top). Additionally, for the sake of keeping imminent MTurk sentiment analysis free of personal bias, most of the stock ticker names were automatically censored, replacing “GME” with “[stockName]”. The scraped data was then outputted as a csv with three columns for comment text, stock ticker being referenced (if any), and upvote score. Our scraped data is then judged by MTurkers, where each MTurker determines if a comment sentiment is positive, negative, or neutral.


Modified Reddit Scraper:
This is a modified version of our reddit scraper that allows the user engaging with our system to input the name and stock ticker symbol of a company for which they’re interested in finding out r/WallStreetBets’s opinion. This more or less does the same thing as the scraper, but only targets stocks with the inputted ticker symbol. This creates data that is ready to be put into our Neural Network, whereas the previous scraper is more so for getting data ready to be fed into MTurk.


MTurk HIT
Our HIT task reads in from our pool of comments from the Reddit Scraper and dispatches five comments to each task for the MTurker to label. The first one is a comment that we know for sure should be labeled as positive, and the second one is a comment that should be labeled as negative. The next three are comments that we actually do not know the correct labels for. This is done through some of the provided HTML template provided by MTurk and some our own code to make sure that the results of each label are written to their own column in the result CSV for the sake of parsing in later modules.


MTurk Quality Assurance Model: 
This module parses through the result CSV of our MTurk HITs. Since the HIT is designed to have people label five different comments, with two of them being control questions for which we already know the correct answer. Using the answers of MTurkers to the control questions, are able to score the quality of our workers and thus utilize weighted majority vote to compile the aggregated answers of our turkers into labels for our neural network to process. The majority of this code is just manipulating pandas.


Neural Network: 
The model we trained was similar to the text classifier from HW 5. We extracted the relevant given code in the text classifier since our objective was similar. We wanted to input a CSV that included comments and their respective weighted majority votes (their labels if the comment sentiment was positive or negative). Then after the model is trained, using the predict function, if the user inputs a phrase, the model will use its training on previous MTurk-labeled Reddit phrases and WallStreetBets-specific jargon to make an informed judgement about the positivity of a given Reddit comment. By effectively taking the place of the MTurkers in the Reddit comment sentiment labeling, the model will be able to output large amounts of sentiment data about specific stocks, from which our python aggregation model will perform calculations to determine a numerical value of Reddit’s general sentiment for a stock for the given time period.


Neural Network Quality Assurance Model: 
This module parses through the result CSV of our neural network and corrects answers that are clearly incorrect. This is achieved by iterating through each of the results and looking for keywords that clearly label a comment as positive or negative. For instance, if the comment contains the word “overpriced”, there is a nearly certain possibility that this comment feels negatively towards this stock. If the comment contains a rocket or moon emoji, the comment is likely positive. Thus, we will correct any obvious mistakes that our neural network makes in labeling comments. The format of this module’s input is the same as its output.


Aggregation Model:
This model iterates through the results of our Neural Network quality assurance model as a dataframe and tallies up the total number of positive and negative comments found on reddit mentioning the queried stock. By simple majority, the most common sentiment will be used to label the subreddit’s total views on a certain stock. This may eventually be connected to a webpage and directly display a message onto the screen.