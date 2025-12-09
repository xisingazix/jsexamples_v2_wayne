function fetchData() {
  // TODO: fetch via promise
  fetch('https://reqres.in/api/unknown', {
    headers: { 'x-api-key': 'reqres_385fbf5855074bb7b86da3ae1c59044a' }
  }).then((response) => {

    //if the response has an issue, throw a custom response (graceful handling of error)
    if (response.status === 403)
      throw new Error('Permission Denied. Please confirm authentication.');

    //if the response if not OK , throw a custome response
    else if (!response.ok)
      throw new Error('Network response is NOT ok.');

    console.log(response); //status:404, 403, 200

    //otherwise return the response in JSON format
    return response.json();

  })
    .then((result) => {
      //logs out the data from the fetch request
      console.log(result.data);
    })
    .catch((error) => {
      //catch any error that occurs, error trapping to catch any error that may pass through
      console.log(error.message);
    })

}

fetchData();