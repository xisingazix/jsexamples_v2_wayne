const arrCategories = new Array(
    {name: "Cat A", description: "Cars below 1600cc"},
    {name: "Cat B", description: "Cars above 1600cc"},
    {name: "Cat C", description: "Goods Vehicles and Buses"},
);

//access arrCategories length property
console.log(arrCategories.length);

//access arrCategories Index 0's property called name and descriotion
//console.log(arrCategories[0].name, arrCategories[0].description);

//print out all categories name and description
//using for loop
for (let i = 0; i < arrCategories.length; i++) {
    console.log(arrCategories[i].name, arrCategories[i].description);
};

console.log("\n");
// add new instance, inherits methods and properties
arrCategories.push({name: "Cat E", description: "Open"});


// using the forEach method of the Array object
arrCategories.forEach((category) => {
    console.log(category.name, category.description);
});
