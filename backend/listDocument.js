let Item_list = [
    { name: "", short_description: "" , description: "" , price: 0 ,discount: 0 , quality: 0 , category: "Chair" , sizes: "s,m,l", colors : "black, ect."}, 
    { name: "", short_description: "" , description: "" , price: 0 ,discount: 0 , quality: 0 , category: "Chair" , sizes: "s,m,l", colors : "black, ect."}, 
    { name: "", short_description: "" , description: "" , price: 0 ,discount: 0 , quality: 0 , category: "Chair" , sizes: "s,m,l", colors : "black, ect."}, 
    { name: "", short_description: "" , description: "" , price: 0 ,discount: 0 , quality: 0 , category: "Chair" , sizes: "s,m,l", colors : "black, ect."}, 
    { name: "", short_description: "" , description: "" , price: 0 ,discount: 0 , quality: 0 , category: "Chair" , sizes: "s,m,l", colors : "black, ect."}, 
    { name: "", short_description: "" , description: "" , price: 0 ,discount: 0 , quality: 0 , category: "Chair" , sizes: "s,m,l", colors : "black, ect."}, 
    { name: "", short_description: "" , description: "" , price: 0 ,discount: 0 , quality: 0 , category: "Sofa" , sizes: "s,m,l", colors : "black, ect."}, 
    { name: "", short_description: "" , description: "" , price: 0 ,discount: 0 , quality: 0 , category: "Sofa" , sizes: "s,m,l", colors : "black, ect."}, 
    { name: "", short_description: "" , description: "" , price: 0 ,discount: 0 , quality: 0 , category: "Sofa" , sizes: "s,m,l", colors : "black, ect."}, 
    { name: "", short_description: "" , description: "" , price: 0 ,discount: 0 , quality: 0 , category: "Sofa" , sizes: "s,m,l", colors : "black, ect."}, 
    { name: "", short_description: "" , description: "" , price: 0 ,discount: 0 , quality: 0 , category: "Sofa" , sizes: "s,m,l", colors : "black, ect."}, 

];

function filterProducts(Item_list, criteria) {
    return Item_list.filter(product => {
        for (let key in criteria) {
            if (product[key] == criteria[key]) {
                return true;
            }
        }
        return false;
    });
}

let filteredChair = [filterProducts(Item_list, { category: "Chair" })];
console.log(JSON.stringify(filteredChair, null, 2));

let filteredSofa =[ filterProducts(Item_list, { category: "Sofa" })];
console.log(JSON.stringify(filteredSofa ,null , 2 ));

