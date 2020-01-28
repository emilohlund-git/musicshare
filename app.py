import os
from flask import Flask, render_template, redirect, request, url_for
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

app = Flask(__name__, static_url_path='/static')

app.config["MONGO_DBNAME"] = "MusicProject"
app.config["MONGO_URI"] = "mongodb+srv://Emil:Hampussuger1234@cluster0-hhlkk.mongodb.net/musicproject?retryWrites=true&w=majority"

mongo = PyMongo(app)

@app.route('/')
def home_page():
    return render_template('index.html')

@app.route('/addsong')
def add_song():
    return render_template('addsong.html')

@app.route('/insertsong', methods=['POST'])
def insert_song():
    songs = mongo.db.songs
    songs.insert_one(request.form.to_dict())
    return redirect(url_for('home_page'))

@app.route('/tutorial')
def tutorial():
    return render_template('tutorial.html')

if __name__ == '__main__':
    app.run(host=os.environ.get('IP'), port=os.environ.get('PORT'), debug=True)
