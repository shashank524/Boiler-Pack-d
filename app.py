import email
from flask import Flask, request, render_template
import mysql.connector as mc

import random
import time

app = Flask(__name__, template_folder="./static/")


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/get')
def count_time():
    counter = random.randint(0, 201)
    print(counter)

    if counter > 100:
        return "Busy"
    else:
        return "Empty"


@app.route('/auth')
def login_page():
    return render_template('./login.html')


# def signup(email, user, passwd):
#     mydb = mc.connect(host="localhost", user="root", database="boilerpacked")
#     mycursor = mydb.cursor()
#     mycursor.execute(f"insert into user_data values('{email}', '{user}', '{passwd}');")

@app.route('/login')
def log():

    email = request.args.get('email')
    print(email)
    passwd = request.args.get('password')
    print(passwd)

    global name
    print("connecting to AWS")
    mydb = mc.connect(host="localhost", user="root",
                      password="Arnav123", database="packd")
    print("connected")
    print(email)
    print(passwd)
    mycursor = mydb.cursor()
    mycursor.execute(f"select {email}, {passwd} from user_data;")
    result = mycursor.fetchall()
    for i in result:
        if (email, passwd) == i:
            return 1
        else:
            return 0

# def friends():
#     email = request.args.get('email')
#     mydb = mc.connect(host="localhost", user="root",
#                       password="Arnav123", database="packd")
#     print("connected")
#     mycursor = mydb.cursor()
#     mycursor.execute(f"select {email} from user_data;")
#     result = mycursor.fetchall()
#     for i in result:
#         print(i0)

@app.route('/info')
def info():
    return render_template("stats.html")

if __name__ == '__main__':
    app.run()