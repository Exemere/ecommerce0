from flask import Blueprint, jsonify, request
from models import db, Cart, Product
from flask_jwt_extended import jwt_required, get_jwt_identity

cart_bp = Blueprint('cart', __name__)

@cart_bp.route('/', methods=['GET'])
@jwt_required()
def get_cart():
    user_id = get_jwt_identity()
    items = Cart.query.filter_by(user_id=user_id).all()
    return jsonify([
        {
            'id': item.id,
            'product_id': item.product_id,
            'name': item.product.name,
            'price': item.product.price,
            'quantity': item.quantity,
            'image': item.product.image
        } for item in items
    ])

@cart_bp.route('/', methods=['POST'])
@jwt_required()
def add_to_cart():
    user_id = get_jwt_identity()
    data = request.json
    item = Cart(user_id=user_id, product_id=data['product_id'], quantity=data.get('quantity', 1))
    db.session.add(item)
    db.session.commit()
    return jsonify({'message': 'Item added to cart'})
