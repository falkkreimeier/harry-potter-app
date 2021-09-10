import { doSomethingWithData } from "./02-fetch-use-data";

export function Example() {
  console.log("start");
  fetch("https://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((allData) => {
      console.log("got all data");
      doSomethingWithData(allData);
      console.log("Echtes Ende");
    });
}
