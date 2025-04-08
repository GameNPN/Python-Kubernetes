from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import random
import time
import os

app = Flask(__name__)

CORS(app)

@app.route('/')
def hello():
    return jsonify({'message': 'API is running'}), 200

@app.route('/api/image', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400

    image = request.files['image']
    if image is None:
        return jsonify({'error': 'Invalid image file'}), 400

    _id = random.randint(0, 100)
    name = f"{int(_id)}_{int(time.time())}{random.randint(0, 100)}"
   
    try:
        os.mkdir(os.path.join(os.getcwd(), 'src/public/images'))
    except:
        pass

    _type = str(image.filename.split('.')[-1])
    path = os.path.join(os.getcwd(), 'src/public/images', name + '.' + _type)
    image.save(path)

    return jsonify({'message': 'Image uploaded successfully'}), 200

@app.route('/api/images', methods=['GET'])
def get_images():
    images_directory = os.path.join(os.getcwd(), 'src/public/images')

    # Get a list of all image files in the directory
    image_files = [f for f in os.listdir(images_directory) if os.path.isfile(os.path.join(images_directory, f))]

    # Create a list to store image details
    images_list = []

    for image_file in image_files:
        image_path = os.path.join(images_directory, image_file)

        # Add image details to the list
        images_list.append({
            'filename': image_file,
            'path': image_path,
            'url': f'/api/images/{image_file}'  # URL to access the image
        })

    # Return the list of images as JSON
    return jsonify({'images': images_list}), 200

@app.route('/api/images/<filename>', methods=['GET'])
def get_image(filename):
    images_directory = os.path.join(os.getcwd(), 'src/public/images')
    return send_from_directory(images_directory, filename)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))
