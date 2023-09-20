from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)




@app.route('/')
def main_route():
    return 'Hello World'


@app.route('/api/data', methods=['GET'])
@cross_origin()
def data_route():
    print("there was a connection")
    data = {"status": "success", "message": "It works?"}
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)