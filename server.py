import os
import uuid
from flask import Flask, session
from flask_socketio import SocketIO, emit

app = Flask(__name__, static_url_path='')
app.config['SECRET_KEY'] = 'secret!'

socketio = SocketIO(app)

message = [
            {'text': 'Booting system', 'name': 'Bot'},
            {'text': 'Space Chat is now live!', 'name': 'Bot'}
          ]

users = {}
@socketio.on('connect', namespace='/iss')
def makeConnection():
    session['uuid'] = uuid.uuid1()
    session['username'] = 'New user'
    print('Socket Connected...')
    users[session['uuid']] = {'username': 'New user'}

@app.route('/')
def mainIndex():
    print ('Enter Index Page...')
    return app.send_static_file('index.html')



# start the server
if __name__ == '__main__':
        print ('Running Server On Port 8080...')
        socketio.run(app, host=os.getenv('IP', '0.0.0.0'), port =int(os.getenv('PORT', 8080)), debug=True)
