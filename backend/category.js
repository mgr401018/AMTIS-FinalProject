let products = [
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Phone", category: "Electronics", price: 800 },
    { name: "smart-Phone", category: "Electronics", price: 800 },
    { name: "T-Shirt", category: "Clothing", price: 25 },
    { name: "Jeans", category: "Clothing", price: 50 },
    { name: "Blender", category: "Home Appliances", price: 150 }
];

function filterProducts(products, criteria) {
    return products.filter(product => {
        let matches = true;
        for (let key in criteria) {
            if (product[key] !== criteria[key]) {
                matches = false;
                break;
            }
        }
        return matches;
    });
}

let filteredClothing = filterProducts(products, { category: "Clothing" });
console.log(filteredClothing);

for(i = 0 ; i = 100;i++  ){
    if(filteredClothing[i] !== undefined){
        console.log(filteredClothing[i])
    }else{
        break;
    }
}


