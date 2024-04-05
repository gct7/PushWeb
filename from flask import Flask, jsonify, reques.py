from flask import Flask, jsonify, request
import pyodbc

app = Flask(__name__)

# Connect to the SQL Server database
conn = pyodbc.connect('DRIVER={SQL Server};SERVER=<server_name>;DATABASE=<database_name>;UID=<username>;PWD=<password>')

@app.route('/api/data', methods=['GET'])
def get_data():
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM your_table')
    data = cursor.fetchall()
    cursor.close()
    return jsonify(data)

@app.route('/api/data', methods=['POST'])
def add_data():
    new_data = request.get_json()
    cursor = conn.cursor()
    cursor.execute('INSERT INTO your_table (column1, column2) VALUES (?, ?)', new_data['column1'], new_data['column2'])
    conn.commit()
    cursor.close()
    return jsonify({'message': 'Data added successfully'})

if __name__ == '__main__':
    app.run()