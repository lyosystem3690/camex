from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify({'message': '¡Bienvenido a la API!'})

@app.route('/camex')
def camex():
    return jsonify({'message': '¡Bienvenido a la Camex !'})


@app.route('/about')
def about():
    return jsonify({'message': '¡Bienvenido a about 781!'})


@app.route('/usuarios', methods=['GET'])
def obtener_usuarios():
    # Código para obtener los usuarios de la base de datos
    usuarios = [{'nombre': 'Juan', 'apellido': 'Perez'}, {'nombre': 'Maria', 'apellido': 'Gonzalez'}]
    return jsonify({'usuarios': usuarios})

# Otras rutas y controladores...

if __name__ == '__main__':
    app.run()


