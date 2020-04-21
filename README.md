# Warbler

Warbler is a mock twitter clone built as a backend project. 
Users can sign-up, log-in, post messages, follow other users, and like their messages.
The backend is built using Flask and Jinja, with bcrypt for authentication. 

![alt text](https://github.com/elizabethlatimer/warbler/blob/master/static/images/warbler_homepage.png "Warbler homepage")

See a live demo of Warbler: https://elat-warbler.herokuapp.com/

## Running locally

If you'd like to get it running locally:

* Fork the repository
* In your terminal, run:

`python3 -m venv venv`

`source venv/bin/activate`

`pip install -r requirements.txt`

* Now, get the database set up (PostgreSQL required)

`createdb warbler`

`python seed.py`

* Finally, start the server

`flask run`

Navigate to localhost:5000 on your browser, and it should be live.
