async function fetchData() {
  // TODO: fetch via async/await
  try {

    //take note of the prepend await
    const response = await fetch('https://reqres.in/api/unknown', {
      headers: { 'x-api-key': 'reqres_385fbf5855074bb7b86da3ae1c59044a' },
    });

    //handling errors
    if (response.status === 403)
      throw new Error('Permission Denied. Please confirm authentication.');
    else if (!response.ok)
      throw new Error('Network response is NOT ok.');
    
    // take note of  the prepended kayword await
    const result = await response.json();
    console.log(result.data); // check with result first , find the one needed  then  result.nameOfTherequired

  } catch (error) {
    //manage the error messages, including those custom ones ( 403  and network response from above)
    console.log(error.message);
  }
}
fetchData();
