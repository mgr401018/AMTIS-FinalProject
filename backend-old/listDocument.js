let Item_list = [
    
    { name: "Classic Office Chair", short_description: "Comfortable office chair", description: "Ergonomically designed office chair with lumbar support and adjustable height.", price: 150, discount: 10, quality: 4, category: "Chair", sizes: "s,m,l", colors: "black, blue, gray" },       
    { name: "Executive Leather Chair", short_description: "Luxury leather chair", description: "High-quality leather executive chair with reclining feature and soft padding.", price: 300, discount: 15, quality: 5, category: "Chair", sizes: "s,m,l", colors: "black, brown" },
    { name: "Mesh Back Office Chair", short_description: "Breathable mesh chair", description: "Office chair with mesh back for breathability and comfort during long work hours.", price: 120, discount: 5, quality: 4, category: "Chair", sizes: "s,m,l", colors: "black, white" },
    { name: "Gaming Chair", short_description: "Ergonomic gaming chair", description: "Ergonomically designed gaming chair with adjustable armrests and headrest.", price: 200, discount: 20, quality: 5, category: "Chair", sizes: "s,m,l", colors: "black, red, blue" },
    { name: "Lounge Chair", short_description: "Stylish lounge chair", description: "Modern lounge chair with plush cushioning and sleek design.", price: 250, discount: 10, quality: 4, category: "Chair", sizes: "s,m,l", colors: "black, gray, beige" },
    { name: "Dining Chair Set", short_description: "Set of 4 dining chairs", description: "Elegant dining chairs with comfortable seating and solid wood frame.", price: 180, discount: 15, quality: 4, category: "Chair", sizes: "s,m,l", colors: "black, white, brown" },
    { name: "Modern Sectional Sofa", short_description: "Stylish sectional sofa", description: "Large sectional sofa with reversible chaise and comfortable cushions.", price: 900, discount: 20, quality: 5, category: "Sofa", sizes: "s,m,l", colors: "black, gray, navy" },
    { name: "Leather Recliner Sofa", short_description: "Luxurious leather recliner", description: "Premium leather sofa with reclining seats and footrest for extra comfort.", price: 1200, discount: 25, quality: 5, category: "Sofa", sizes: "s,m,l", colors: "black, brown, cream" },
    { name: "Compact Loveseat", short_description: "Compact 2-seater sofa", description: "Comfortable and stylish loveseat ideal for small spaces.", price: 400, discount: 10, quality: 4, category: "Sofa", sizes: "s,m,l", colors: "black, gray, blue" },
    { name: "Fabric Sofa Set", short_description: "Durable fabric sofa", description: "Sofa set with high-quality fabric upholstery and foam cushions for durability.", price: 800, discount: 15, quality: 4, category: "Sofa", sizes: "s,m,l", colors: "black, green, beige" },
    { name: "Sleeper Sofa", short_description: "Convertible sleeper sofa", description: "Sofa that easily converts into a bed with a hidden pull-out mattress.", price: 1000, discount: 20, quality: 5, category: "Sofa", sizes: "s,m,l", colors: "black, gray, navy" },
    { name: "Bar Table and Stool Set", short_description: "Elegant bar table and stools", description: "Modern bar table with matching stools, perfect for a breakfast nook or bar area.", price: 350, discount: 10, quality: 4, category: "Table and Stool", sizes: "s,m,l", colors: "black, white, gray" },
    { name: "Folding Table and Chairs", short_description: "Portable folding table set", description: "Folding table with four chairs, perfect for small spaces or outdoor use.", price: 200, discount: 5, quality: 4, category: "Table and Stool", sizes: "s,m,l", colors: "black, beige, brown" },
    { name: "Wooden Dining Set", short_description: "Classic wooden table and stools", description: "Elegant wooden dining table with matching stools, perfect for any dining room.", price: 500, discount: 10, quality: 5, category: "Table and Stool", sizes: "s,m,l", colors: "black, brown, white" },
    { name: "Adjustable Height Bar Set", short_description: "Bar table and adjustable stools", description: "Bar set with height-adjustable stools, sleek and modern for any space.", price: 450, discount: 15, quality: 4, category: "Table and Stool", sizes: "s,m,l", colors: "black, silver, white" },
    { name: "Rustic Wooden Table", short_description: "Solid wood dining table", description: "Sturdy and stylish wooden table with a rustic finish, ideal for dining rooms.", price: 700, discount: 10, quality: 5, category: "Table", sizes: "s,m,l", colors: "black, brown, natural" },
    { name: "Glass Coffee Table", short_description: "Modern glass coffee table", description: "Tempered glass coffee table with stainless steel legs for a contemporary look.", price: 250, discount: 5, quality: 4, category: "Table", sizes: "s,m,l", colors: "black, silver" },
    { name: "Extendable Dining Table", short_description: "Extendable wooden table", description: "Dining table with an extendable design, perfect for hosting larger groups.", price: 850, discount: 20, quality: 5, category: "Table", sizes: "s,m,l", colors: "black, walnut" },
    { name: "Marble Top Table", short_description: "Luxury marble dining table", description: "Elegant dining table with a marble top, perfect for formal dining areas.", price: 1200, discount: 15, quality: 5, category: "Table", sizes: "s,m,l", colors: "black, white, gray" },
    { name: "Compact Side Table", short_description: "Compact and versatile side table", description: "Small side table with a modern design, perfect for small spaces.", price: 150, discount: 5, quality: 4, category: "Table", sizes: "s,m,l", colors: "black, white, gray" },
    { name: "Outdoor Patio Table", short_description: "Durable outdoor table", description: "Weather-resistant outdoor table with a sleek design, perfect for patios.", price: 400, discount: 10, quality: 4, category: "Table", sizes: "s,m,l", colors: "black, white, green" },
    { name: "Foldable Picnic Table", short_description: "Portable foldable table", description: "Lightweight picnic table that folds for easy transport and storage.", price: 180, discount: 5, quality: 4, category: "Table", sizes: "s,m,l", colors: "black, blue, red" },
    { name: "Wooden Coffee Table", short_description: "Elegant wooden coffee table", description: "Stylish coffee table made of solid wood, perfect for living rooms.", price: 300, discount: 10, quality: 5, category: "Table", sizes: "s,m,l", colors: "black, brown, natural" } 
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

let filteredTabelandStool =[ filterProducts(Item_list, { category: "Sofa" })];
console.log(JSON.stringify(filteredTabelandStool ,null , 2 ));