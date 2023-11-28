const productsDatabase = [
    {
      "id": 1,
      "category": "Macbook",
      "productName": "13-inch MacBook Air",
      "description": "High-end smartphone with advanced features.",
      "image": "https://ninetheme.com/themes/electron/wp-content/uploads/2023/08/product1-17.png",
      "offer": "Flat 25% Instant OFF + Flat Rs.220 FKM CB",
      "originalPrice": "$1,450.99",
      "discountedPrice": "$1,399",
      "availability": true,
      "logo": "",
      "unit": "Piece",
      "rating": 4.5,
      "salesCount": 50,
       "reviews": [
          {
              "user_id": 1,
              "rating": 5,
              "comment": "Great phone with a superb camera!"
          },
          {
              "user_id": 2,
              "rating": 4,
              "comment": "Good performance, but the battery life could be better."
          }
          ]
    },
      {
        "id": 2,
        "category": "Laptop",
        "productName": "High-Performance Laptop",
        "description": "Powerful laptop for work and gaming.",
        "image": "https://ninetheme.com/themes/electron/wp-content/uploads/2023/08/1-26.png",
        "offer": "Special discount - 15% off!",
        "originalPrice": "$999",
        "discountedPrice": "$849",
        "availability": true,
        "logo": "",
        "unit": "Piece",
        "rating": 4.7,
        "salesCount": 150,
        "reviews": [
          {
            "user_id": 3,
            "rating": 5,
            "comment": "Excellent laptop for gaming and work tasks."
          },
          {
            "user_id": 4,
            "rating": 4,
            "comment": "Good value for the price."
          }
        ]
      },
  {
    "id": 3,
    "category": "Headphones",
    "productName": "Apple Airpods Headphones",
    "description": "Premium wireless headphones with noise-cancellation.",
    "image": "https://ninetheme.com/themes/electron/wp-content/uploads/2023/08/1-42.png",
    "offer": "Limited-time offer - Buy one, get one 50% off!",
    "originalPrice": "$349.99",
    "discountedPrice": "$279.99",
    "availability": true,
    "logo": "",
    "unit": "Piece",
    "rating": 4.8,
    "salesCount": 5,
    "reviews": [
      {
        "user_id": 5,
        "rating": 5,
        "comment": "Top-notch sound quality and comfort."
      },
      {
        "user_id": 6,
        "rating": 4,
        "comment": "Impressive noise-cancellation, but a bit pricey."
      }
    ]
  },
  {
    "id": 4,
    "category": "Smartwatch",
    "productName": "Galaxy Watch5 Bluetooth",
    "description": "Feature-packed smartwatch with fitness tracking.",
    "image": "https://ninetheme.com/themes/electron/wp-content/uploads/2023/07/1-4.jpg",
    "offer": "Get 20% off on your next purchase!",
    "originalPrice": "$349.99",
    "discountedPrice": "$259.99",
    "availability": true,
    "logo": "",
    "unit": "Piece",
    "rating": 4.6,
    "salesCount": 25,
    "reviews": [
      {
        "user_id": 7,
        "rating": 4,
        "comment": "Great value for the features it offers."
      },
      {
        "user_id": 8,
        "rating": 5,
        "comment": "Sleek design and accurate fitness tracking."
      }
    ]
  },
  {
    "id": 5,
    "category": "Mobile",
    "productName": "Galaxy S23 Ultra 256GB",
    "description": "High-quality DSLR camera for photography enthusiasts.",
    "image": "https://ninetheme.com/themes/electron/wp-content/uploads/2023/08/product1-2.png",
    "offer": "Special bundle offer - Lens included!",
    "originalPrice": "$499.99",
    "discountedPrice": "$459.99",
    "availability": true,
    "logo": "",
    "unit": "Piece",
    "rating": 4.2,
    "salesCount": 70,
    "reviews": [
      {
        "user_id": 9,
        "rating": 5,
        "comment": "Exceptional image quality and versatility."
      },
      {
        "user_id": 10,
        "rating": 4,
        "comment": "A bit heavy, but the results are worth it."
      }
    ]
  },
  {
    "id": 6,
    "category": "Smart TV",
    "productName": "Ultra HD Smart TV",
    "description": "High-definition smart TV with built-in streaming apps.",
    "image": "https://ninetheme.com/themes/electron/wp-content/uploads/2023/08/product1-6.png",
    "offer": "Limited stock - Buy now and get a soundbar for free!",
    "originalPrice": "$259.99",
    "discountedPrice": "$189.99",
    "availability": true,
    "logo": "",
    "unit": "Piece",
    "rating": 4.7,
    "salesCount": 89,
    "reviews": [
      {
        "user_id": 11,
        "rating": 5,
        "comment": "Stunning picture quality and user-friendly interface."
      },
      {
        "user_id": 12,
        "rating": 4,
        "comment": "A great addition to our home entertainment setup."
      }
    ]
  },
  {
    "id": 7,
    "category": "Discounted, Projector",
    "productName": "OPTOMA Projection",
    "description": "Access smart tv apps without your PC or laptop Unlock a full PC experience with Wireless DeX and see movies on the big screen with Tap view Work seamlessley with Microsoft 365 or use Remote PC to work on your school or office PC.",
    "image": ["https://ninetheme.com/themes/electron/wp-content/uploads/2023/08/3-36.png"],
    "offer": "Exclusive launch offer - Free stylus with every purchase!",
    "originalPrice": "$299.99",
    "discountedPrice": "$259.99",
    "availability": true,
    "logo": "",
    "unit": "Piece",
    "rating": 4.4,
    "salesCount": 45,
    "reviews": [
      {
        "user_id": 13,
        "rating": 4,
        "comment": "Good value for the price, but the battery life could be better."
      },
      {
        "user_id": 14,
        "rating": 5,
        "comment": "Ideal for both work and entertainment on the go."
      }
    ]
  },
  {
    "id": 8,
    "category": "Gaming Console",
    "productName": "Next-Gen Gaming Console",
    "description": "Next-gen gaming console for immersive gaming experiences.",
    "image": "https://ninetheme.com/themes/electron/wp-content/uploads/2023/08/product1-6-200x150.png",
    "offer": "Limited edition bundle - Includes two controllers and three games!",
    "originalPrice": "$399.99",
    "discountedPrice": "$359.99",
    "availability": true,
    "logo": "",
    "unit": "Piece",
    "rating": 4.4,
    "salesCount": 81,
    "reviews": [
      {
        "user_id": 15,
        "rating": 5,
        "comment": "Incredible gaming performance and graphics."
      },
      {
        "user_id": 16,
        "rating": 4,
        "comment": "A must-have for gaming enthusiasts."
      }
    ]
  },
  {
    "id": 9,
    "category": "Tablet",
    "productName": "Galaxy Tab S6 Lite (2022)",
    "description": "Access smart tv apps without your PC or laptop",
    "image": "https://ninetheme.com/themes/electron/wp-content/uploads/2023/08/1-11-980x782.png",
    "offer": "Eco-friendly cooling - Save on energy bills!",
    "originalPrice": "$599.99",
    "discountedPrice": "$569.99",
    "availability": true,
    "logo": "",
    "unit": "Piece",
    "rating": 4.6,
    "salesCount": 50,
    "reviews": [
      {
        "user_id": 15,
        "rating": 5,
        "comment": "Incredible gaming performance and graphics."
      },
      {
        "user_id": 16,
        "rating": 4,
        "comment": "A must-have for gaming enthusiasts."
      }
    ]  
  },
  {
    "id": 10,
    "category": "Smartphone",
    "productName": "Galaxy Z Fold4 1TB Beige",
    "description": "Capture every moment with this advanced camera smartphone.",
    "image": "https://ninetheme.com/themes/electron/wp-content/uploads/2023/07/1-2.jpg",
    "offer": "Limited-time offer - Free wireless charger included!",
    "originalPrice": "$899",
    "discountedPrice": "$799",
    "availability": true,
    "logo": "",
    "unit": "Piece",
    "rating": 4.8,
    "salesCount": 34,
    "reviews": [
      {
        "user_id": 17,
        "rating": 5,
        "comment": "Impressive camera quality and performance."
      },
      {
        "user_id": 18,
        "rating": 4,
        "comment": "Sleek design and responsive touchscreen."
      }
    ]
  },
  {
    "id": 11,
    "category": "Laptop",
    "productName": "Ultra-Thin Ultrabook",
    "description": "Slim and powerful ultrabook for on-the-go productivity.",
    "image": "https://ninetheme.com/themes/electron/wp-content/uploads/2023/08/2-24.png",
    "offer": "Back-to-school special - Get a free backpack with your purchase!",
    "originalPrice": "$1099",
    "discountedPrice": "$999",
    "availability": true,
    "logo": "",
    "unit": "Piece",
    "rating": 4.9,
    "salesCount": 60,
    "reviews": [
      {
        "user_id": 19,
        "rating": 5,
        "comment": "Perfect for students and professionals alike."
      },
      {
        "user_id": 20,
        "rating": 4,
        "comment": "Fast and reliable performance."
      }
    ]
  },
  {
    "id": 12,
    "category": "Headphones",
    "productName": "Galaxy Buds2 Pro",
    "description": "Sweatproof and comfortable earbuds for an active lifestyle.",
    "image": "https://ninetheme.com/themes/electron/wp-content/uploads/2023/08/1-24-980x782.png",
    "offer": "Fitness bundle - Get a free fitness tracker with your purchase!",
    "originalPrice": "$79.99",
    "discountedPrice": "$69.99",
    "availability": true,
    "logo": "",
    "unit": "Piece",
    "rating": 4.5,
    "salesCount": 2,
    "reviews": [
      {
        "user_id": 21,
        "rating": 5,
        "comment": "Secure fit and great sound quality during workouts."
      },
      {
        "user_id": 22,
        "rating": 4,
        "comment": "Long-lasting battery life."
      }
    ]
  },
  {
    "id": 13,
    "category": "Smartwatch",
    "productName": "Fashionable Smartwatch",
    "description": "Stay connected in style with this trendy smartwatch.",
    "image": "https://ninetheme.com/themes/electron/wp-content/uploads/2023/07/3.jpeg",
    "offer": "Fashion week special - Exclusive design available only this week!",
    "originalPrice": "$129.99",
    "discountedPrice": "$109.99",
    "availability": true,
    "logo": "",
    "unit": "Piece",
    "rating": 4.7,
    "salesCount": 122,
    "reviews": [
      {
        "user_id": 23,
        "rating": 5,
        "comment": "Sleek design and customizable watch faces."
      },
      {
        "user_id": 24,
        "rating": 4,
        "comment": "Responsive touch screen and intuitive."
      }
        ]
    },
    {
      "id": 14,
      "category": "Soundbar, Speaker",
      "productName": "Philips Soundbar  ",
      "description": "Access smart tv apps without your PC or laptop Unlock a full PC experience with Wireless DeX and see movies on the big screen with Tap view",
      "image": "https://ninetheme.com/themes/electron/wp-content/uploads/2023/08/2-42.png",
      "offer": "Fashion week special - Exclusive design available only this week!",
      "originalPrice": "$129.99",
      "discountedPrice": "$99.99",
      "availability": true,
      "logo": "",
      "unit": "Piece",
      "rating": 3.9,
      "salesCount": 122,
      "reviews": [
        {
          "user_id": 23,
          "rating": 5,
          "comment": "Sleek design and customizable watch faces."
        },
        {
          "user_id": 24,
          "rating": 4,
          "comment": "Responsive touch screen and intuitive."
        }
          ]
      }   
];

export default productsDatabase;
