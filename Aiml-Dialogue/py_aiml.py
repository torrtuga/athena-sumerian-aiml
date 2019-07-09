import os
import aiml
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from flask import Flask,request
import sys
from flask_cors import CORS
import pymysql
import json

app = Flask(__name__)
CORS(app)
analyser = SentimentIntensityAnalyzer()
k = aiml.Kernel()
rds_host = "database-1-instance-1.cuxhu3zthg2p.us-east-1.rds.amazonaws.com"
name = "admin"
password = "admin123"
db_name = "Users"

class DataStore():
        BRAIN_FILE="brain.dump"
        SENTIMENT_ANALYSIS = 0
        SENTIMENT_ANALYSIS_FLAG = 0
        # conn = pymysql.connect(rds_host,user=name,passwd=password,db=db_name,connect_timeout=5)

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


# @app.route('/sql_insert')
# def write_sql(): 
#     conn = data.conn
#     placeholder = "completed"
#     with conn.cursor() as cur:
#         cur.execute('INSERT INTO UserRecord (name,id,progress) VALUES ("dummy1","base64","begin")')
#         conn.commit()
#     return placeholder

# @app.route('/sql_read')
# def read_sql():
#     conn = data.conn
#     placeholder = "empty"
#     with conn.cursor() as cur:
#         cur.execute("SELECT * FROM UserRecord")
#         for row in cur:
#             placeholder = str(row)
#             print(row)
#     conn.commit()
#     return placeholder

@app.route('/file_read')
def file_read():
    user_name = request.args.get('name')
    print(user_name)
    file = open('data.json')
    json_data = json.load(file)

    stud_list = json_data['Data']
    progress = "default"
    for var in stud_list:
        if user_name == var['name']:
            progress = var['progress']
            break;
        else:
            print(var['name'])
    return progress

@app.route('/file_insert')
def file_insert():
    user_name = request.args.get('name')
    print(user_name)
    obj = {
        "name": user_name,
        "progress": "default"
    }
    file = open('data.json')
    json_data = json.load(file)
    stud_list = json_data['Data']
    stud_list.append(obj)
    with open('data.json','w') as f:
        f.write(json.dumps(json_data))
    return "success"

@app.route('/file_edit')
def file_edit():
    data = request.args.get('data')
    print(data)
    inputArray = data.split("111000")
    name = inputArray[0]
    progress = inputArray[1]
    print(name)
    print(progress)
    file = open('data.json')
    json_data = json.load(file)

    stud_list = json_data['Data']
    for var in stud_list:
        if name == var['name']:
            var['progress'] = progress;
            break;

    with open('data.json','w') as f:
        f.write(json.dumps(json_data));

    return "success"

@app.route('/kernel_reset')
def kernel_reset():
    k.bootstrap(learnFiles="std-startup.aiml",commands="load aiml b")
    return "success"

@app.route('/transit_new_aiml')
def transit_aiml():
    k.bootstrap(learnFiles="std-startup-two.aiml",commands="load aiml c")
    return "success"

@app.route('/sentiment')
def sentiment_userResponse():
    userResponse = request.args.get('user-sentiment')
    interimResult = get_sentiment_scores(userResponse)
    if interimResult == "xxx" or interimResult == "xxy":
        return "neg"
    else:
        return "pos"





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
