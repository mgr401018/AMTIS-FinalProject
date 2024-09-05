let Item_list = [
    { name: "", short_description: "" , description: "" , price: 0 ,discount: 0 , quality: 0 , category: "Chair" , sizes: "s,m,l", colors : "black, ect."}, 
    { name: "", short_description: "" , description: "" , price: 0 ,discount: 0 , quality: 0 , category: "Chair" , sizes: "s,m,l", colors : "black, ect."}, 
    { name: "", short_description: "" , description: "" , price: 0 ,discount: 0 , quality: 0 , category: "Chair" , sizes: "s,m,l", colors : "black, ect."}, 
    { name: "", short_description: "" , description: "" , price: 0 ,discount: 0 , quality: 0 , category: "Chair" , sizes: "s,m,l", colors : "black, ect."}, 
    { name: "", short_description: "" , description: "" , price: 0 ,discount: 0 , quality: 0 , category: "Chair" , sizes: "s,m,l", colors : "black, ect."}, 
    { name: "", short_description: "" , description: "" , price: 0 ,discount: 0 , quality: 0 , category: "Chair" , sizes: "s,m,l", colors : "black, ect."}, 
];

function filterProducts(Item_list, criteria) {
    return Item_list.filter(product => {
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

let filteredChair = filterProducts(Item_list, { category: "Chair" });
console.log(filteredChair);


