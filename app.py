from flask import Flask

import random, time

app = Flask(__name__)

@app.route('/')

def count_time():
    counter = random.randint(0, 201)
    print(counter)
    time.sleep(2)
    if counter > 100: 
        print("Busy")
    else:
        print("Empty")
    count_time()

if __name__ == '__main__':
    app.run()



