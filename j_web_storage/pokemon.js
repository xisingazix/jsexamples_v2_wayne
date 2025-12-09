function fetchData(){

    fetch('https://pokeapi.co/api/v2/pokemon?offset=1326&limit=5') //(?) is a query parameter
    .then((response) => {                    //  obtain the response and return the json
        

        return response.json();

    })     
    .then((data) =>{                      //  work on the json response
        
        //if fetched data goes beyond 1328 characters
        const returnedCharacters = data.results;

        if(!returnedCharacters.length)  // 0 === false , ! false  to trigger when length is 0
            throw new Error("No characters found");     // handle 0 character shown

        console.log(data);        //  the data is under the 'results'

    })  
    .catch((error) => {                          //  handle errors
        console.log(error.message);
    });                      


}

//call function
fetchData();
