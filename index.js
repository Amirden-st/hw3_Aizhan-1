function countChars(string, character) {
    let count = 0;
    let i = 0;
    while (i < string.length) {
        if (string[i] === character) {
            count++;
        }
        i++;
    }
    return count;
}
console.log(countChars("abbccdddd", 'd'))

function getMin(arr) {
    return Math.min(...arr)
}

console.log(getMin([1, 2, 3, 4, 5]));

function getMin(arr) {
    return Math.min(...arr)
}

console.log(getMin([75, 32, 1221, 43,]));

const products = [
    {
        productName: 'milk',
        cost: 48,
        category: 'food'
    },
    {
        productName: 'bread',
        cost: 20,
        category: 'food'
    },
    {
        productName: 'egg',
        cost: 11,
        category: 'food'
    },
    {
        productName: 'axe',
        cost: 180,
        category: 'tool'
    },
    {
        productName: 'hammer',
        cost: 170,
        category: 'tool'
    },
    {
        productName: 'bag',
        cost: 1100,
        category: 'clothes'
    },
    {
        productName: 'socks',
        cost: 90,
        category: 'clothes'
    },
]
function getCategory(category) {
    let arr = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].category === category) {
            arr.push(products[i])
        };
    };
    return arr;
}
console.log(getCategory('tool'));

function getProduct(productName) {
    let foundProduct = products.find(product=> {
        if (product.productName === productName) return true
    } 
    )
return foundProduct}
console.log(getProduct('egg'))