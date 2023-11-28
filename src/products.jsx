const products = [
    {
        id: "1",
        title: 'maize',
        image: './images/p2.jpg',
        price: 4.99,
        category: 'fruit'
    },
    {
        id: "2",
        title: 'Tomatoes',
        image: './images/p3.jpg',
        price: 4.99,
        category: 'vegetable'
    },
    {
        id: "3",
        title: 'zuccinni',
        image: './images/p4.jpg',
        price: 4.99,
        category: 'vegetable'
    },
    {
        id: "4",
        title: 'Apples',
        image: './images/p7.jpg',
        price: 4.99,
        category: 'fruit'
    },
    {
        id: "5",
        title: 'Okra',
        image: './images/p8.jpg',
        price: 4.99,
        category: 'vegetable'
    },
    {
        id: "6",
        title: 'Carrots',
        image: './images/p9.jpg',
        price: 4.99,
        category: 'vegetable'
    },
    {
        id: "7",
        title: 'brocolli',
        image: './images/p3.jpg',
        price: 4.99,
        category: 'vegetable'
    },
    {
        id: "8",
        title: 'Cauliflower',
        image: './images/p4.jpg',
        price: 4.99,
        category: 'fruit'
    },
    {
        id: "9",
        title: 'Dates',
        image: './images/p7.jpg',
        price: 4.99,
        category: 'vegetable'
    },
    {
        id: "10",
        title: 'Oats',
        image: './images/p8.jpg',
        price: 4.99,
        category: 'fruit'
    },
    {
        id: "11",
        title: 'Grain',
        image: './images/p9.jpg',
        price: 4.99,
        category: 'fruit'
    },
    {
        id: "12",
        title: 'Bell Pepper',
        image: './images/p10.jpg',
        price: 4.99,
        category: 'vegetable'
    },
    {
        id: "13",
        title: 'Strawberries',
        image: './images/p11.jpg',
        price: 4.99,
        category: 'fruit'
    },
    {
        id: "14",
        title: 'Grapes',
        image: './images/p16.jpg',
        price: 4.99,
        category: 'fruit'
    }
]

const brands = [
    {
        id: "1",
        image: './images/1-2.jpg',
    },
    {
        id: "1",
        image: './images/2-2.jpg',
    },
    {
        id: "1",
        image: './images/3-2.jpg',
    },
    {
        id: "1",
        image: './images/4-2.jpg',
    }
]

const getProductData = (id) => {
    let productData = products.find(product =>product.id === id);

    if(productData == undefined) {
        console.log('product data does not exist for ID' + id)
        return undefined
    }
    return productData
}




export  { products, brands, getProductData } ;