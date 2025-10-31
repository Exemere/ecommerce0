from flask import Blueprint, jsonify, request
from models import db, Order, OrderItem, Cart
from flask_jwt_extended import jwt_required, get_jwt_identity
from datetime import datetime

order_bp = Blueprint('order', __name__)

@order_bp.route('/', methods=['GET'])
@jwt_required()
def get_orders():
    user_id = get_jwt_identity()
    orders = Order.query.filter_by(user_id=user_id).all()
    return jsonify([{
        'id': o.id,
        'amount': o.amount,
        'status': o.status,
        'order_date': o.order_date
    } for o in orders])

@order_bp.route('/create', methods=['POST'])
@jwt_required()
def create_order():
    user_id = get_jwt_identity()
    data = request.json
    cart_items = Cart.query.filter_by(user_id=user_id).all()
    total = sum(i.product.price * i.quantity for i in cart_items)

    new_order = Order(user_id=user_id, amount=total, status='Pending', order_date=datetime.utcnow())
    db.session.add(new_order)
    db.session.commit()

    for item in cart_items:
        db.session.add(OrderItem(order_id=new_order.id, product_id=item.product_id, quantity=item.quantity, price=item.product.price))

    Cart.query.filter_by(user_id=user_id).delete()
    db.session.commit()
    return jsonify({'message': 'Order placed successfully', 'order_id': new_order.id})
