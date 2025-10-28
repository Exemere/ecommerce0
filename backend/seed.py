from app import app, db
from models import Product, Category, User, Order, OrderItem

BASE_URL = "http://localhost:5000/static/img/"

def seed_data():
    with app.app_context():
        db.drop_all()
        db.create_all()

        # Categories
        laptops = Category(name="Laptops")
        phones = Category(name="Smartphones")
        cameras = Category(name="Cameras")
        accessories = Category(name="Accessories")
        db.session.add_all([laptops, phones, cameras, accessories])
        db.session.commit()

        # Products (note: full image URLs from Flask static folder)
        products = [
            Product(name="Laptop Pro", price=980, old_price=1200, image=BASE_URL + "product01.png", category=laptops),
            Product(name="Smartphone X", price=799, old_price=899, image=BASE_URL + "product02.png", category=phones),
            Product(name="Camera Pro", price=650, image=BASE_URL + "product03.png", category=cameras),
            Product(name="Headphones", price=120, image=BASE_URL + "product04.png", category=accessories),
        ]
        db.session.add_all(products)
        db.session.commit()

        # Users
        user1 = User(username="alice", email="alice@example.com", password="hashed_password")
        user2 = User(username="bob", email="bob@example.com", password="hashed_password")
        db.session.add_all([user1, user2])
        db.session.commit()

        # Orders
        order1 = Order(user=user1, total=980, status="completed")
        order2 = Order(user=user2, total=919, status="pending")
        db.session.add_all([order1, order2])
        db.session.commit()

        # OrderItems
        item1 = OrderItem(order=order1, product=products[0], quantity=1, price=980)
        item2 = OrderItem(order=order2, product=products[1], quantity=1, price=799)
        item3 = OrderItem(order=order2, product=products[3], quantity=1, price=120)
        db.session.add_all([item1, item2, item3])
        db.session.commit()

        print("✅ Database seeded!")

if __name__ == "__main__":
    seed_data()
