import os
from flask import Flask, render_template, redirect, request, url_for
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

app = Flask(__name__, static_url_path='/static')

password = os.getenv('MY_PASSWORD')

app.config["MONGO_DBNAME"] = "MusicProject"
app.config["MONGO_URI"] = "mongodb+srv://Emil:{}@cluster0-hhlkk.mongodb.net/musicproject?retryWrites=true&w=majority".format(
    password)

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
    return redirect(url_for('library'))


@app.route('/tutorial')
def tutorial():
    return render_template('tutorial.html')


@app.route('/library')
def library():
    return render_template('library.html', songs=mongo.db.songs.find())

if __name__ == '__main__':
    app.run(host=os.environ.get('IP'), port=os.environ.get('PORT'), debug=True)
