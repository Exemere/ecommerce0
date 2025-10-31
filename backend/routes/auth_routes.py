from flask import Blueprint, request, jsonify, session
from models import db, User
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token, create_refresh_token

auth_bp = Blueprint('auth', __name__)
bcrypt = Bcrypt()

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.json
    if not data.get('email') or not data.get('password'):
        return jsonify({'error': 'Email and password required'}), 400
    
    if User.query.filter_by(email=data['email']).first():
        return jsonify({'error': 'Email already registered'}), 400

    new_user = User(
        full_name=data['full_name'],
        email=data['email'],
        number=data['number'],
        location=data.get('location', '')
    )
    new_user.password_hash = data['password']

    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'Signup successful'}), 201


@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user and user.authenticate(data['password']):
        access_token = create_access_token(identity=user.id)
        refresh_token = create_refresh_token(identity=user.id)
        return jsonify({
            'message': 'Login successful',
            'access_token': access_token,
            'refresh_token': refresh_token,
            'user': {
                'id': user.id,
                'email': user.email,
                'full_name': user.full_name
            }
        })
    return jsonify({'error': 'Invalid credentials'}), 401
