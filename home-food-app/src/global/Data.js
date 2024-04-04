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

export const restaurantData = [
    {
        restaurantName: "Mc Donalds", 
        farAway: "12", 
        businessAddress: "22 Cape Street, Red Deer",
        images: "https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg",
        averageReview: 4.8,
        numberOfReviews: 272,
        coordinates: {
            lat: -26.32723,
            lng: 28.24
        },
        discount: 10,
        deliveryTime: 15,
        collectTime: 5,
        foodType: "Burgers, Wraps, Milkshkes...",
        productData: [
            {
                name: "Big Mac",
                price: 13,
                images: "https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg",
            },
            {
                name: "Veggie Burger",
                price: 16,
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
                price: 13,
                images: "https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg",
            },
            {
                name: "Veggie Burger",
                price: 16,
                images: "https://www.noracooks.com/wp-content/uploads/2023/04/veggie-burgers-1-2.jpg",
            }
        ],
        id: 2
    }
]