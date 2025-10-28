from flask_cors import CORS
from flask_session import Session
from flask_mail import Mail, Message
from flask import request, render_template
from flask import Flask, jsonify, request, session, redirect, url_for, render_template,make_response
from flask_restful import Api, Resource, reqparse
from sqlalchemy.orm.exc import NoResultFound
from werkzeug.security import generate_password_hash, check_password_hash
from marshmallow import Schema, fields, ValidationError, validates
from flask_migrate import Migrate
from datetime import timedelta
from datetime import datetime
from flask_jwt_extended import create_access_token,JWTManager, create_refresh_token, jwt_required, get_jwt_identity
from dotenv import load_dotenv
from flask_bcrypt import Bcrypt
from models import db, Product, Category, User, Order, OrderItem

app = Flask(__name__)
CORS(app)

# Database config
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Serve static files from /static
app.static_folder = "static"

db.init_app(app)

# -----------------------
# Routes
# -----------------------

@app.route("/api/products")
def get_products():
    products = Product.query.all()
    return jsonify([
        {
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "old_price": p.old_price,
            "image": p.image,   # already contains full URL
            "category": p.category.name if p.category else None,
        }
        for p in products
    ])

@app.route("/api/categories")
def get_categories():
    categories = Category.query.all()
    return jsonify([{"id": c.id, "name": c.name} for c in categories])

@app.route("/api/users")
def get_users():
    users = User.query.all()
    return jsonify([
        {"id": u.id, "username": u.username, "email": u.email}
        for u in users
    ])

@app.route("/api/orders")
def get_orders():
    orders = Order.query.all()
    return jsonify([
        {
            "id": o.id,
            "user": o.user.username,
            "total": o.total,
            "status": o.status,
            "created_at": o.created_at.isoformat(),
            "items": [
                {
                    "product": i.product.name,
                    "quantity": i.quantity,
                    "price": i.price,
                } for i in o.items
            ]
        }
        for o in orders
    ])

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5000)
