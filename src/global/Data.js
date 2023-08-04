export const filterData = [
    { name: "Fast food", image: require('../assets/fastfood.jpg'), id: "0" },
    { name: "Burgers", image: require("../assets/burger.jpg"), id: "1" },
    { name: "Salads", image: require("../assets/salads.jpg"), id: "2" },
    { name: "Hotdog", image: require("../assets/hotdog.jpg"), id: "3" },
    { name: "Chinese", image: require("../assets/chinese.jpg"), id: "4" },
    { name: "Mexican", image: require("../assets/mexican.jpg"), id: "5" },
    { name: "Sea food", image: require("../assets/seafood.jpg"), id: "6" },
];

export const restaurantsData = [
    {
        restaurantName: "Mc Donalds",
        farAway: "21.2",
        businessAddress: "22 Bessie street, Cape Town",
        images: require('../assets/res-1.jpg'),
        averageReview: 4.9, numberOfReview: 272,
        coordinates: { lat: -26.1888612, lng: 28.246325 },
        discount: 10,
        deliveryTime: 15,
        collectTime: 5,
        foodType: "Burgers, Wraps,Milkshakes...",
        productData: [
            {
                name: "Hand cut chips",
                price: 29.30,
                image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"
            },
            {
                name: "Big Mac",
                price: 50.80,
                image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"
            }, 
            {
                name: "Chicken Burger",
                price: 70,
                image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"
            },
        ],
        id: 0
    },

    {
        restaurantName: "KFC",
        farAway: "12.7",
        businessAddress: "22 Bessie street, Cape Town",
        images: require('../assets/res-2.jpg'),
        averageReview: 4.3,
        numberOfReview: 306,
        coordinates: { lat: -26.1891648, lng: 28.2441808 },
        discount: 20,
        deliveryTime: 30,
        collectTime: 10,
        foodType: "Chicken,Chicken wings... ",
        productData: [
            {
                name: "Hand cut chips",
                price: 29.30,
                image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"
            },
            {
                name: "Big Mac",
                price: 50.80,
                image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"
            },
            {
                name: "Chicken Burger",
                price: 70,
                image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"
            },
        ],
        id: 1
    },

    {
        restaurantName: "Steers",
        farAway: "5",
        businessAddress: " 17 Olivia Rd, Johannesburg",
        images: require('../assets/res-3.jpg'),
        coordinates: { lat: -26.1886781, lng: 28.244879 },
        averageReview: 4.9,
        numberOfReview: 1272,
        discount: 12,
        deliveryTime: 25,
        collectTime: 15,
        foodType: "Flame grilled beef Burgers",
        productData: [
            {
                name: "Hand cut chips",
                price: 29.30,
                image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"
            },
            {
                name: "Big Mac",
                price: 50.80,
                image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"
            }, {
                name: "Chicken Burger",
                price: 70, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"
            },
        ],
        id: 2
    },

    {
        restaurantName: "Roman Pizza",
        farAway: "7",
        businessAddress: " 15 Atlas Rd, Kempton Park",
        images: require('../assets/res-4.jpg'),
        averageReview: 4.3,
        numberOfReview: 700,
        coordinates: { lat: -26.1845336, lng: 28.2481691 },
        discount: null,
        deliveryTime: 20,
        collectTime: 10,
        foodType: "Chicken pizza, Vegetarian pizza...",
        productData: [
            {
                name: "Hand cut chips",
                price: 29.30,
                image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png"
            },
            {
                name: "Big Mac",
                price: 50.80,
                image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png"
            }, 
            {
                name: "Chicken Burger",
                price: 70, image: "https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png"
            },
        ],
        id: 3
    },
]
