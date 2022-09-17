from flask import Flask, request, render_template

import random, time

app = Flask(__name__)

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


if __name__ == '__main__':
    app.run()



