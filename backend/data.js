/*simple data fro practise*/
import bcrypt from 'bcryptjs';
const data = {

    users:[
        {
            name:'Maria',
            email:'makleanthous@hotmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:true,
        },
        {
            name:'Elena',
            email:'ele@hotmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:false,
        },
    ],
    products:[
        {
            name:'kebab',
            image:'/images/p1.jpg',
            price:15,
            countInStock:3,
            type: 'beef',
            rating:4,
            numReviews:60,
            description: 'best homemade pork',

        },
        {
            name:'salad',
            image:'/images/p2.jpg',
            price:15,
            countInStock:3,
            type: 'vegan',
            rating:4,
            numReviews:60,
            description: 'best homemade salad',

        },
        {
            name:'chicken',
            image:'/images/p3.jpg',
            price:15,
            countInStock:0,
            type: 'chicken',
            rating:4,
            numReviews:60,
            description: 'best homemade chicken',

        },
        {
            name:'pizza',
            image:'/images/p4.jpg',
            price:15,
            countInStock:13,
            type: 'italian',
            rating:4,
            numReviews:60,
            description: 'best homemade pizza',

        },
        {
            name:'puncakes',
            image:'/images/p5.jpg',
            countInStock:13,

            price:14,
            type: 'puncakes',
            rating:3,
            numReviews:60,
            description: 'best homemade puncakes',

        },
        {
            name:'fries',
            image:'/images/p6.jpg',
            price:15,
            countInStock:3,
            type: 'vegie',
            rating:2,
            numReviews:20,
            description: 'best homemade Fries',

        },

    ],
};
export default data;