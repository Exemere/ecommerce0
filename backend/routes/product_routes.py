from flask import Blueprint, jsonify, request
from utils.sanity_client import sanity_fetch

product_bp = Blueprint('product', __name__)

@product_bp.route('/', methods=['GET'])
def get_products():
    query = '*[_type == "product"]{_id, name, price, image, category->{name}}'
    products = sanity_fetch(query)
    return jsonify(products)

@product_bp.route('/<string:product_id>', methods=['GET'])
def get_product_details(product_id):
    query = f'*[_type == "product" && _id == "{product_id}"][0]'
    product = sanity_fetch(query)
    if not product:
        return jsonify({'error': 'Product not found'}), 404
    return jsonify(product)
