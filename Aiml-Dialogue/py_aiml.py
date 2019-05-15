import os
import aiml
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from flask import Flask,request
import sys
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
analyser = SentimentIntensityAnalyzer()
k = aiml.Kernel()

class DataStore():
        BRAIN_FILE="brain.dump"
        SENTIMENT_ANALYSIS = 0
        SENTIMENT_ANALYSIS_FLAG = 0

data = DataStore()

def setup_app(app):
    k.bootstrap(learnFiles="std-startup.aiml",commands="load aiml b")

setup_app(app)

def get_sentiment_map(score):
        MAX_NEG = "xxx"
        NEG = "xxy"
        NEUTRAL = "xyx"
        POSITIVE = "xyy"
        MAX_POSITIVE = "yxx"
        sentiment_score = None
        if score <= -0.5:
                sentiment_score = MAX_NEG
        elif score > -0.5 and score < 0:
                sentiment_score = NEG
        elif score == 0:
                sentiment_score = NEUTRAL
        elif score > 0 and score < 0.5:
                sentiment_score = POSITIVE
        else:
                sentiment_score = MAX_POSITIVE
        return sentiment_score


def get_sentiment_scores(sentence):
    sentiment_compound_value = analyser.polarity_scores(sentence)['compound']
    return get_sentiment_map(sentiment_compound_value)

def sentiment_operation_check(sentence):
        sentiment_operation_check_flag = 0
        substring_1 = "Good to meet you"
        substring_2 = "How are you?"
        substring_3 = "do you want to learn a new language today?"
        substring_4 = "how about learning a new language today?"

        if substring_1 in sentence and substring_2 in sentence or substring_3 in sentence or substring_4 in sentence:
                sentiment_operation_check_flag = 1

        return sentiment_operation_check_flag

@app.route('/')
def chat_model():
       # k.bootstrap(learnFiles="std-startup.aiml",commands="load aiml b")
        input_text = request.args.get('user-response')
        SENTIMENT_ANALYSIS_FLAG = data.SENTIMENT_ANALYSIS_FLAG

        if SENTIMENT_ANALYSIS_FLAG == 1:
                user_sentiment = get_sentiment_scores(input_text)
                input_text = input_text + " " + user_sentiment
                input_text = input_text.replace(".", " ")

       # print('input_text' + str(SENTIMENT_ANALYSIS_FLAG),file=sys.stderr)
        response = k.respond(str(input_text))
        # print('response' + response,file=sys.stdout)
        
        if sentiment_operation_check(response)==1:
                SENTIMENT_ANALYSIS_FLAG = 1
        else:
                SENTIMENT_ANALYSIS_FLAG = 0
        data.SENTIMENT_ANALYSIS_FLAG = SENTIMENT_ANALYSIS_FLAG

        return response

@app.route('/sql')
def chat_sql():
    output = "route working"
    return output

if __name__ == "__main__":
        print("Parsing aiml files")
        k.bootstrap(learnFiles="std-startup.aiml", commands="load aiml b")
        print("Hi, I am Athena, a Language Tutor Chatbot.\nWhat's your name?")
        # app.run(host="0.0.0.0",port=8000,debug=True)
        # while True:
        #     input_text = input("> ")

        #     if SENTIMENT_ANALYSIS_FLAG == 1:
        #       user_sentiment = get_sentiment_scores(input_text)
        #       input_text = input_text + " " + user_sentiment
        #       input_text = input_text.replace(".", " ")
                
        #     # print(str(input_text))
        #     response = k.respond(str(input_text))
        #     print(response)
        #     if sentiment_operation_check(response)==1:
        #       SENTIMENT_ANALYSIS_FLAG = 1
        #     else:
        #       SENTIMENT_ANALYSIS_FLAG = 0
