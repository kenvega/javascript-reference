// can you run two catchs in promises?
// situation: a component needs to render a modal error when fails
//            but the service calling the api needs to log the failure to console too
//            i think both should be in their respective catch function, but do they work?

// conclusion after tests:
//            when a service fails in a promise, the respective catch will run
//            but what is returned will always end up in the then from the component
//            so the only way to get to the catch of the component through the service is.. (?)
//              could it be throwing an error in the catch from the service (?)

const axios = require("axios");

handleClick();

// this part represents part of the component
function handleClick() {
  serviceCalledThatActuallyRunsAxios()
    .then((response) => console.log("response from service", response))
    .catch((error) => console.log("error in component", error));
}

// this part represents part of the service being called
function serviceCalledThatActuallyRunsAxios() {
  return axios
    .get("https://jsonplaceholder.typicode.com/todos/0") // change between /todos/1 (ok) and /todos/0 (error) to test
    .then((json) => {
      console.log("response from axios", json.data);
      return json.data;
    })
    .catch((error) => {
      console.log("error data", error.response.data);
      // return error.response.data; // this will run .then on component
      throw error.response.data; // this will run .catch on component
    });
}
