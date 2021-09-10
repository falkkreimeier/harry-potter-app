export function doSomethingWithData(alldata) {
  console.log("doSomethingWithData");
  console.log(alldata);
  alldata.forEach((charakter) => {
    console.log(charakter.name);
  });
}
