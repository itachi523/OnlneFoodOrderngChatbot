export const RESTAURANTS_DATA = [
  {
    id: 1,
    name: 'Pizza Plaza',
    cuisine: 'Italian, Pizzas, Fast Food',
    rating: 4.5,
    time: '30-35 mins',
    price: '₹300 for two',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80',
    offer: '50% OFF up to ₹100',
    menu: [
      { id: 101, name: 'Margherita Pizza', price: '₹299', desc: 'Classic delight with 100% real mozzarella cheese.', isVeg: true, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400' },
      { id: 102, name: 'Pepperoni Pizza', price: '₹449', desc: 'Double pepper barbecue chicken, golden corn and extra cheese.', isVeg: false, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400' },
      { id: 103, name: 'Veggie Supreme Pizza', price: '₹399', desc: 'Loaded with onion, capsicum, mushroom, and olives.', isVeg: true, image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=400' },
      { id: 104, name: 'Garlic Breadsticks', price: '₹149', desc: 'Baked to perfection. Your perfect pizza partner!', isVeg: true, image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=400' },
      { id: 105, name: 'Cheese Dip', price: '₹29', desc: 'Creamy jalapeno cheese dip.', isVeg: true, image: 'https://images.unsplash.com/photo-1583095311091-bf9660fb6b6f?w=400' },
      { id: 106, name: 'Choco Lava Cake', price: '₹99', desc: 'Chocolate lover\'s delight with a gooey center.', isVeg: true, image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400' }
    ]
  },
  {
    id: 2,
    name: 'Burger Barn',
    cuisine: 'American, Burgers, Beverages',
    rating: 4.3,
    time: '25-30 mins',
    price: '₹250 for two',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
    offer: '₹125 OFF above ₹299',
    menu: [
      { id: 201, name: 'Classic Chicken Burger', price: '₹199', desc: 'Crispy chicken patty, fresh lettuce and mayo.', isVeg: false, image: 'https://images.unsplash.com/photo-1615557960916-5f4791effe9d?w=400' },
      { id: 202, name: 'Veggie Supreme Burger', price: '₹149', desc: 'Mixed veg patty with secret sauces.', isVeg: true, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400' },
      { id: 203, name: 'Double Cheeseburger', price: '₹249', desc: 'Two juicy patties with double the cheese.', isVeg: false, image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400' },
      { id: 204, name: 'French Fries', price: '₹99', desc: 'Crispy golden fries salted to perfection.', isVeg: true, image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400' },
      { id: 205, name: 'Onion Rings', price: '₹129', desc: 'Golden fried onion rings with a side of ranch.', isVeg: true, image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400' },
      { id: 206, name: 'Chocolate Shake', price: '₹159', desc: 'Thick and creamy chocolate milkshake.', isVeg: true, image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400' }
    ]
  },
  {
    id: 3,
    name: 'Biryani House',
    cuisine: 'Indian, Mughlai, Biryani',
    rating: 4.7,
    time: '40-45 mins',
    price: '₹400 for two',
    image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&q=80',
    offer: 'Free Delivery',
    menu: [
      { id: 301, name: 'Chicken Dum Biryani', price: '₹349', desc: 'Richly flavored aromatic rice layered with marinated chicken pieces.', isVeg: false, image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400' },
      { id: 302, name: 'Mutton Biryani', price: '₹449', desc: 'Tender mutton pieces slow-cooked with fragrant spices and basmati rice.', isVeg: false, image: 'https://images.unsplash.com/photo-1589302168068-964664d93cb0?w=400' },
      { id: 303, name: 'Paneer Tikka Biryani', price: '₹299', desc: 'Fragrant basmati rice layered with fresh paneer skewers.', isVeg: true, image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400' },
      { id: 304, name: 'Chicken 65', price: '₹249', desc: 'Spicy, deep-fried chicken starter.', isVeg: false, image: 'https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=400' },
      { id: 305, name: 'Raita & Salan', price: '₹49', desc: 'Perfect accompaniment for your biryani.', isVeg: true, image: 'https://images.unsplash.com/photo-1541832065-24d9c7d23dca?w=400' },
      { id: 306, name: 'Gulab Jamun', price: '₹79', desc: 'Sweet milk dumplings soaked in rose syrup.', isVeg: true, image: 'https://images.unsplash.com/photo-1598514982205-f36b96d1ea8d?w=400' }
    ]
  },
  {
    id: 4,
    name: 'Sushi Sensation',
    cuisine: 'Japanese, Sushi, Asian',
    rating: 4.8,
    time: '45-50 mins',
    price: '₹800 for two',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80',
    offer: '20% OFF on all Sushi Rolls',
    menu: [
      { id: 401, name: 'California Roll', price: '₹399', desc: 'Crab stick, avocado, and cucumber inside out roll.', isVeg: false, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400' },
      { id: 402, name: 'Spicy Tuna Roll', price: '₹449', desc: 'Fresh tuna mixed with spicy mayo.', isVeg: false, image: 'https://images.unsplash.com/photo-1558985250-27a406d64cb3?w=400' },
      { id: 403, name: 'Salmon Nigiri', price: '₹299', desc: 'Fresh salmon slices served over pressed vinegared rice. (2 pcs)', isVeg: false, image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400' },
      { id: 404, name: 'Miso Soup', price: '₹149', desc: 'Traditional Japanese soup with tofu and seaweed.', isVeg: true, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400' },
      { id: 405, name: 'Edamame', price: '₹199', desc: 'Lightly salted steamed soybeans.', isVeg: true, image: 'https://images.unsplash.com/photo-1599827552599-2f473e34b971?w=400' },
      { id: 406, name: 'Matcha Ice Cream', price: '₹199', desc: 'Authentic green tea flavored ice cream.', isVeg: true, image: 'https://images.unsplash.com/photo-1563805042-7684c8e9e9cb?w=400' }
    ]
  },
  {
    id: 5,
    name: 'Taco Town',
    cuisine: 'Mexican, Tacos, Burritos',
    rating: 4.4,
    time: '30-40 mins',
    price: '₹350 for two',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80',
    offer: 'Buy 1 Get 1 on Tacos',
    menu: [
      { id: 501, name: 'Chicken Soft Taco', price: '₹149', desc: 'Grilled chicken, fresh salsa, and sour cream in a soft tortilla.', isVeg: false, image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400' },
      { id: 502, name: 'Beef Hard Shell Taco', price: '₹179', desc: 'Crispy corn shell packed with seasoned beef and cheese.', isVeg: false, image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c755?w=400' },
      { id: 503, name: 'Veggie Burrito', price: '₹249', desc: 'Large flour tortilla filled with beans, rice, fajita veggies, and guacamole.', isVeg: true, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400' },
      { id: 504, name: 'Nachos with Cheese', price: '₹199', desc: 'Crispy tortilla chips smothered in melted cheddar cheese.', isVeg: true, image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=400' },
      { id: 505, name: 'Guacamole', price: '₹99', desc: 'Freshly mashed avocados with lime and cilantro.', isVeg: true, image: 'https://images.unsplash.com/photo-1582269229339-b9d9c2293ed4?w=400' },
      { id: 506, name: 'Churros', price: '₹129', desc: 'Fried dough pastries dusted with cinnamon sugar.', isVeg: true, image: 'https://images.unsplash.com/photo-1624372996163-5eb7b68bde33?w=400' }
    ]
  }
];
