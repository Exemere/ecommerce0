from flask import Blueprint, jsonify, request
from models import db, User
from flask_jwt_extended import jwt_required, get_jwt_identity

user_bp = Blueprint('user', __name__)

@user_bp.route('/<int:user_id>', methods=['GET'])
@jwt_required()
def get_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404
    return jsonify({
        'id': user.id,
        'full_name': user.full_name,
        'email': user.email,
        'number': user.number,
        'location': user.location
    })

@user_bp.route('/<int:user_id>', methods=['PUT'])
@jwt_required()
def update_user(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'User not found'}), 404
    data = request.json
    user.full_name = data.get('full_name', user.full_name)
    user.number = data.get('number', user.number)
    user.location = data.get('location', user.location)
    db.session.commit()
    return jsonify({'message': 'User updated successfully'})
