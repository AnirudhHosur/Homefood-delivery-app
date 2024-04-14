export const filterData = [
    {
        name: "Fast Food", image: require('../../assets/placeholder.png'), id: "0"
    },
    {
        name: "Salads", image: require('../../assets/placeholder.png'), id: "1"
    },
    {
        name: "Indian Food", image: require('../../assets/placeholder.png'), id: "2"
    },
    {
        name: "Chinese", image: require('../../assets/placeholder.png'), id: "3"
    },
    {
        name: "Mexican", image: require('../../assets/placeholder.png'), id: "4"
    },
]

export const filterData2 = [
    {
        name: "Fast Food",
        image: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
        id: "0"
    },
    {
        name: "Salads",
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/salad-1239095_1280.jpg",
        id: "1"
    },
    {
        name: "Indian Food",
        image: "https://cdn.pixabay.com/photo/2017/06/05/15/40/indian-2373754_1280.jpg",
        id: "2"
    },
    {
        name: "Chinese",
        image: "https://cdn.pixabay.com/photo/2016/11/29/09/08/chinese-1867768_1280.jpg",
        id: "3"
    },
    {
        name: "Mexican",
        image: "https://cdn.pixabay.com/photo/2017/01/07/20/40/candy-1961536_1280.jpg",
        id: "4"
    },
    {
        name: "Italian",
        image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_1280.jpg",
        id: "5"
    },
    {
        name: "Thai",
        image: "https://cdn.pixabay.com/photo/2018/07/18/19/12/spices-3546281_1280.jpg",
        id: "6"
    },
    {
        name: "Sushi",
        image: "https://cdn.pixabay.com/photo/2017/06/26/02/47/sushi-2442249_1280.jpg",
        id: "7"
    },
    {
        name: "Vegan",
        image: "https://cdn.pixabay.com/photo/2017/09/28/18/13/bread-2796393_1280.jpg",
        id: "8"
    },
    {
        name: "Desserts",
        image: "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg",
        id: "9"
    },
    {
        name: "Seafood",
        image: "https://cdn.pixabay.com/photo/2016/03/05/20/07/abstract-1238657_1280.jpg",
        id: "10"
    }
];


export const restaurantData = [
    {
        restaurantName: "Mc Donalds",
        farAway: "12",
        businessAddress: "22 Cape Street, Red Deer",
        images: "https://cdn.pixabay.com/photo/2017/09/28/18/13/bread-2796393_1280.jpg",
        averageReview: 4.8,
        numberOfReviews: 272,
        coordinates: {
            lat: -26.32723,
            lng: 28.24
        },
        discount: 10,
        deliveryTime: 15,
        collectTime: 5,
        foodType: "Burgers, Wraps, Milkshakes...",
        productData: [
            {
                name: "Big Mac",
                price: 2.95,
                images: "https://cdn.pixabay.com/photo/2017/09/28/18/13/bread-2796393_1280.jpg",
            },
            {
                name: "Veggie Burger",
                price: 3.62,
                images: "https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg",
            }
        ],
        id: 0
    },
    {
        restaurantName: "KFC",
        farAway: "6",
        businessAddress: "1221 Bower Place, Red Deer",
        images: "https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg",
        averageReview: 4.5,
        numberOfReviews: 400,
        coordinates: {
            lat: -26.22112723,
            lng: 28.324234
        },
        discount: 20,
        deliveryTime: 30,
        collectTime: 10,
        foodType: "Burgers, Wraps, Chicken wings",
        productData: [
            {
                name: "Big Mac",
                price: 2.95,
                images: "https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg",
            },
            {
                name: "Veggie Burger",
                price: 3.62,
                images: "https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg",
            }
        ],
        id: 2
    },
    {
        restaurantName: "Burger King",
        farAway: "3",
        businessAddress: "15 Circle Drive, Red Deer",
        images: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
        averageReview: 4.2,
        numberOfReviews: 198,
        coordinates: {
            lat: -26.123456,
            lng: 28.123456
        },
        discount: 15,
        deliveryTime: 20,
        collectTime: 10,
        foodType: "Burgers, Fries, Sodas",
        productData: [
            {
                name: "Whopper",
                price: 3.50,
                images: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
            },
            {
                name: "Chicken Royale",
                price: 4.20,
                images: "https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg",
            }
        ],
        id: 3
    },
    {
        restaurantName: "Subway",
        farAway: "8",
        businessAddress: "99 High Street, Red Deer",
        images: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
        averageReview: 4.0,
        numberOfReviews: 150,
        coordinates: {
            lat: -26.098765,
            lng: 28.456789
        },
        discount: 5,
        deliveryTime: 25,
        collectTime: 15,
        foodType: "Subs, Wraps, Salads",
        productData: [
            {
                name: "Italian B.M.T.",
                price: 5.00,
                images: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
            },
            {
                name: "Veggie Delight",
                price: 3.75,
                images: "https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg",
            }
        ],
        id: 4
    }
]

export const productData = [
    {
        name: "Hand cut chips",
        price: 29.30,
        image: "https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg",
        details: "Two 100% fresh beef burger patties that are hot, deliciously seasoned and served crispy.",
        id: 0
    },
    {
        name: "Big Mac",
        price: 50.80,
        image: "https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg",
        details: "McFeast features two 100% fresh beef burger patties that are hot, deliciously juicy, and fully dressed.",
        id: 1
    },
    {
        name: "Chicken Burger",
        price: 70,
        image: "https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg",
        details: "Grilled or crispy chicken burger served with fresh lettuce and a creamy mayo.",
        id: 2
    },
    {
        name: "Hand cut chips",
        price: 29.30,
        image: "https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg",
        details: "Freshly cut and fried to perfection, our hand cut chips are a delicious treat.",
        id: 3
    },
    {
        name: "Big Mac",
        price: 70.20,
        image: "https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg",
        details: "The classic Big Mac, with two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.",
        id: 4
    },
    {
        name: "Chicken Burger",
        price: 70,
        image: "https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg",
        details: "Tender and juicy chicken patty topped with fresh veggies and a light spread of mayo.",
        id: 5
    },
];

export const menuData = [

    { title: "BEEF", special: false, key: 0, },
    { title: "CHICKEN", special: false, key: 1 },
    { title: "VEGGIE BURGER", special: false, key: 2 },
    { title: "FRIES& CORN", special: false, key: 3 },
    { title: "SALADS", special: false, key: 4 },
    { title: "HAPPY MEALS", special: false, key: 5 },
    { title: "SAHRE BOX", special: false, key: 6 },
    { title: "MILKSHAKES", special: false, key: 7 },
    { title: "COLD DRINKS", special: false, key: 8 },
    { title: "DESSERTS", special: false, key: 9 },
    { title: "HOT DRINKS", special: false, key: 10 },

];

export const specialData = [
    { title: "LIMITED OFFER", key: 0 },
    { title: "GO CHILLI", key: 1 },
    { title: "GO CHEESE", key: 2 },
    { title: "MCCHICKEN DELUXE PROMO", key: 3 },
];

export const menu = [
    { key: 1, title: 'BEEF' },
    { key: 2, title: 'CHICKEN' },
    { key: 3, title: 'VEGGIE BURGER' },
    { key: 4, title: 'SHARE BOX' },
    { key: 5, title: 'Happy Meals' },
    { key: 6, title: 'Fries' },
    { key: 7, title: 'Sides' },
    { key: 8, title: 'Milkshakes' },
];

export const menuDetailedData = [
    {
        meal: "Big Mac",
        price: 70.20,
        image: "https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg",
        details: "McFeast features two 100% fresh beef burger patties that are hot",
        preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
        preferenceData: [
            [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 10 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 11 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 12 }],
            [{ name: "Small Coke", price: 8.90, checked: false, id: 13 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 14 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 15 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 16 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 18 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20 }],
            [{ name: "Small Coke", price: 8.90, checked: false, id: 21 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 22 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 23 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 24 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 26 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29 }],
            [{ name: "debonairs sauce", price: 8.90, checked: false, id: 30 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 31 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 32 }],
            [
                { name: "Small Coke", price: 8.90, checked: false, id: 33 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 34 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 35 },
                { name: 'Small Coke Zero', price: 3.95, checked: false, id: 36 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 38 },
                { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41 }
            ]
        ],
        minimum_quatity: [2, 1, 1, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 0
    },

    {
        meal: "Hand cut chips",
        price: 29.30,
        image: "https://cdn.pixabay.com/photo/2017/09/28/18/13/bread-2796393_1280.jpg",
        details: "Two 100% fresh beef burger patties that are hot,deliciously",
        preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
        preferenceData: [

            [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],

            [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
            ],

            [
                { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
                { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
                { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],
        ],
        minimum_quatity: [2, 1, 2, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 1
    },

    {
        meal: "Chicken Burger",
        price: 45.70,
        image: "https://cdn.pixabay.com/photo/2016/03/05/20/07/abstract-1238657_1280.jpg",
        details: "",
        preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
        preferenceData: [

            [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],

            [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
            ],

            [
                { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
                { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
                { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],
        ],

        minimum_quatity: [2, 1, 1, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 2
    },

    {
        meal: "Big Mac",
        price: 50.80,
        image: "https://cdn.pixabay.com/photo/2017/09/28/18/13/bread-2796393_1280.jpg",
        details: "McFeast features two 100% fresh beef burger patties that are hot",
        preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
        preferenceData: [

            [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],

            [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
            ],

            [
                { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
                { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
                { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],
        ],

        minimum_quatity: [2, 1, 1, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 3
    },


    {

        meal: "Hand cut chips",
        price: 29.30,
        image: "https://cdn.pixabay.com/photo/2016/03/05/20/07/abstract-1238657_1280.jpg",
        details: "Two 100% fresh beef burger patties that are hot,deliciously",

        preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],

        preferenceData: [

            [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 0 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 1 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 2 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],

            [{ name: "debonairs sauce", price: 8.90, checked: false, id: 0 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 1 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 2 },
            ],

            [
                { name: "Small Coke", price: 8.90, checked: false, id: 0 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 1 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 2 },
                { name: 'Small Coke Zero', price: 3.95, checked: false, id: 3 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 4 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 5 },
                { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 6 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 7 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 8 },
            ],
        ],

        minimum_quatity: [2, 1, 1, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 4
    },

    {
        meal: "Big Mac",
        price: 70.20,
        image: "https://cdn.pixabay.com/photo/2017/09/28/18/13/bread-2796393_1280.jpg",
        details: "McFeast features two 100% fresh beef burger patties that are hot",
        preferenceTitle: ["Choose your 2 dips", "Choose your 1st drink flavour", "Choose your 2nd drink flavour", "Would you like to add a side?", "Would you Like any extra sauce?"],
        preferenceData: [

            [{ name: "Jalapeno Dip", price: 8.91, checked: false, id: 10 }, { name: "Sweet & Sour Dip", price: 8.75, checked: false, id: 11 }, { name: 'BBQ Dip', price: 11.99, checked: false, id: 12 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 13 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 14 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 15 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 16 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 17 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 18 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 19 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 20 },
            ],

            [{ name: "Small Coke", price: 8.90, checked: false, id: 21 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 22 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 23 },
            { name: 'Small Coke Zero', price: 3.95, checked: false, id: 24 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 25 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 26 },
            { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 27 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 28 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 29 },
            ],

            [{ name: "debonairs sauce", price: 8.90, checked: false, id: 30 }, { name: "BBQ Sauce", price: 8.90, checked: false, id: 31 }, { name: 'Tikka Sauce', price: 11.90, checked: false, id: 32 },
            ],

            [
                { name: "Small Coke", price: 8.90, checked: false, id: 33 }, { name: "Small Fanta Orange", price: 8.90, checked: false, id: 34 }, { name: 'Small Sprite', price: 11.90, checked: false, id: 35 },
                { name: 'Small Coke Zero', price: 3.95, checked: false, id: 36 }, { name: 'Small Syoney Zero', price: 3.95, checked: false, id: 37 }, { name: 'Small Apple Juice', price: 10.95, checked: false, id: 38 },
                { name: 'Small Strawberry Shake', price: 16.95, checked: false, id: 39 }, { name: 'Small Chocolate Shake', price: 16.95, checked: false, id: 40 }, { name: 'Small Vanilla Shake', price: 17.95, checked: false, id: 41 },
            ],
        ],
        minimum_quatity: [2, 1, 1, null, null],
        counter: [0, 0, 0, 0, 0],
        required: [true, true, true, false, false],
        id: 5
    },

];
