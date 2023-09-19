from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)

class Backend:

    def __init__(self):
        pass

    def start_app(self):
        """
        Start the App
        """
        if __name__ == "__main__":
            app.run(debug=True)

    @staticmethod
    @app.route('/')
    def main_route():
        return 'Hello World'

    @staticmethod
    @app.route('/api/data', methods=['GET'])
    @cross_origin()
    def data_route():
        print("there was a connection")
        data = {"status": "success", "message": "It works?"}
        return jsonify(data)

backend = Backend()

if __name__ == "__main__":
    backend.start_app()
