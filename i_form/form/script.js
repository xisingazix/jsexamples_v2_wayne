// 10. element.setAttribute()
// Setting the Attributes of HTML select input

// Create the array to populate selectDom
const arrTopics = new Array("Properties", "Methods", "Eventlisteners");


// Create the array to store selected values (for submission)
const arrSelected = new Array();


// Declare constant selectDom to refer to <select> of id = "selectTopics"
const selectDom = document.getElementById("selectTopics");


// Set the attributes of selectDom
selectDom.setAttribute("multiple", "true");

// Populate the options in selectDom
arrTopics.forEach((topic, index) => {
    selectDom.options.add(new Option(`${index + 1}. ${topic}`, topic)); // first topic represent the value to display, the second topic represent the value that is stored
});
// 11. element.getAttribute()
// get the Attributes's value(s) of selected options
arrTopics.forEach((topic, index) => {
    //   selectDom.options[index].setAttribute("class", "btn btn-primary d-block m-2")  // by using setattribute method
    selectDom.options[index].classList.add("btn", "btn-primary", "d-block", "m-2"); //by using classList.add method

})
// 12. element.addEventListener()
// Adding an event listener to a buttona
// a dropdown menu have "change option" that can be used to be targetted by eventlistner
selectDom.addEventListener("click", () => {     // used click event listen instead of change to detect reclicking same option

    //get the collection of options from the <select> object
    const collection = selectDom.selectedOptions;

    //iterate through the collection
    for (let i = 0; i < collection.length; i++) {
        const itemValue = collection[i].getAttribute("value");

        //check if arrSelected contains one of the selected list items
        const found = arrSelected.find((item) => item === itemValue);


        //only if its not found in arrSelected, then add it to the list of display
        if (!found) {


            //create the list item element to be appended on to listSelected <ul>
            // list item element should show the text stored in itemValue
            const listItem = document.createElement("li");
            listItem.textContent = itemValue;
            listItem.classList.add(`${itemValue}`);
            document.getElementById("listSelected").append(listItem);

            //udpate arrSelected
            //prevent duplicate selection using an additional array to track selected items
            arrSelected.push(itemValue);
        }
        else {       // remove list item when reselected
            const toRemove = arrSelected.indexOf(itemValue); //find duplicate
            arrSelected.splice(toRemove, 1);      //remove duplicate
            const unselected = document.querySelector(`.${itemValue}`);  // identify the list item to remove
            unselected.remove(); // remove list item

        }

    }
});

// Clear the selection from listSelected and arrSelected
// Use the splice method to remove all elements in an array


const btnClearSelect = document.getElementById("btnClearSelection");

btnClearSelect.addEventListener("click", () => {
    arrSelected.splice(0 ,arrSelected.length);  // use dynamic method to remove all ( use length )
    document.getElementById("listSelected").replaceChildren();
   
})
