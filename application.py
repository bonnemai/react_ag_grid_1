import datetime
from random import random

import flask
import os
import logging

from flask import request

application = flask.Flask(__name__)

# Only enable Flask debugging if an env var is set to true
application.debug = os.environ.get('FLASK_DEBUG') in ['true', 'True']

# Get application version from env
app_version = os.environ.get('APP_VERSION')

# Get cool new feature flag from env
enable_cool_new_feature = os.environ.get('ENABLE_COOL_NEW_FEATURE') in ['true', 'True']

@application.route('/json', methods=['GET', 'POST'])
def json():
    if request.method=='POST':
        logging.info("Got Post: %s", request.get_json())
        return flask.jsonify({'result':'you made it...'})
    else:
        message = [{'col1': random()}, {'col2': random()}, {'col3': random()},
                   {'col1': random(), 'col2': random(), 'col3': random()}]
        return flask.jsonify(message)

@application.route('/food', methods=['GET', 'POST'])
def food():
    message = {'food': 'french'}
    return flask.jsonify(message)


@application.route('/history')
def history():
    data=[]
    today=datetime.datetime.today()
    for i in range(-1000, -0):
        data.append([1000*(today+datetime.timedelta(days=i)).timestamp(), random()])

    return flask.jsonify({'data':data})




@application.route('/')
def hello_world():
    return ""
    # message = "Hello, world!"
    # return flask.render_template('index.html',
    #                              title=message,
    #                              flask_debug=application.debug,
    #                              app_version=app_version,
    #                              enable_cool_new_feature=enable_cool_new_feature)

if __name__ == '__main__':
    application.run(host='0.0.0.0')
