export const database = {
  users: [
    {
      id: 1,
      name: "Sahil Mishra",
      email: "sahil@example.com",
      role: "admin",
      isActive: true,
      skills: ["React", "Node.js", "MySQL"],
      address: {
        city: "Pune",
        state: "Maharashtra",
        pincode: 411033
      },
      createdAt: "2025-01-10"
    },
    {
      id: 2,
      name: "Amit Sharma",
      email: "amit@example.com",
      role: "user",
      isActive: true,
      skills: ["Python", "Django"],
      address: {
        city: "Delhi",
        state: "Delhi",
        pincode: 110001
      },
      createdAt: "2025-02-15"
    },
    {
      id: 3,
      name: "Priya Verma",
      email: "priya@example.com",
      role: "user",
      isActive: false,
      skills: ["Java", "Spring Boot"],
      address: {
        city: "Mumbai",
        state: "Maharashtra",
        pincode: 400001
      },
      createdAt: "2025-03-01"
    }
  ],

  products: [
    {
      id: 101,
      name: "Laptop",
      price: 65000,
      category: "Electronics",
      stock: 10
    },
    {
      id: 102,
      name: "Smartphone",
      price: 25000,
      category: "Electronics",
      stock: 25
    },
    {
      id: 103,
      name: "Headphones",
      price: 2000,
      category: "Accessories",
      stock: 50
    }
  ],

  orders: [
    {
      id: 1001,
      userId: 1,
      products: [
        { productId: 101, quantity: 1 },
        { productId: 103, quantity: 2 }
      ],
      totalAmount: 69000,
      status: "delivered",
      orderDate: "2025-03-10"
    },
    {
      id: 1002,
      userId: 2,
      products: [
        { productId: 102, quantity: 1 }
      ],
      totalAmount: 25000,
      status: "pending",
      orderDate: "2025-03-15"
    }
  ]
};


export const serviceDB = {
  users: [
    {
      id: 1,
      name: "Sahil Mishra",
      email: "sahil@example.com",
      role: "customer",
      location: "Pune",
      isVerified: true
    },
    {
      id: 2,
      name: "Rohit Electrician",
      email: "rohit@services.com",
      role: "provider",
      services: [201, 202],
      rating: 4.6,
      experience: 5
    },
    {
      id: 3,
      name: "Anjali Cleaner",
      email: "anjali@services.com",
      role: "provider",
      services: [203],
      rating: 4.8,
      experience: 3
    }
  ],

  services: [
    {
      id: 201,
      name: "Electric Repair",
      category: "Home Services",
      pricePerHour: 300
    },
    {
      id: 202,
      name: "Fan Installation",
      category: "Home Services",
      pricePerHour: 250
    },
    {
      id: 203,
      name: "Home Cleaning",
      category: "Cleaning",
      pricePerHour: 200
    }
  ],

  bookings: [
    {
      id: 5001,
      customerId: 1,
      providerId: 2,
      serviceId: 201,
      date: "2025-03-18",
      timeSlot: "10:00 AM",
      status: "completed",
      totalAmount: 600
    },
    {
      id: 5002,
      customerId: 1,
      providerId: 3,
      serviceId: 203,
      date: "2025-03-20",
      timeSlot: "2:00 PM",
      status: "pending",
      totalAmount: 400
    }
  ],

  reviews: [
    {
      id: 9001,
      bookingId: 5001,
      rating: 5,
      comment: "Excellent service!",
      userId: 1
    },
    {
      id: 9002,
      bookingId: 5002,
      rating: 4,
      comment: "Good but can improve timing",
      userId: 1
    }
  ]
};



// Or we can export it in a one go as
// export{database,serviceDB}