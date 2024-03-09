 console.log("Hello world")

function areObjectsEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    for (const key of keys1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }
  let obj1 = {name:"Aravind", age: 15};
  let obj2 = {age: 15, name:"Aravind"};

  const areEqual = areObjectsEqual(obj1, obj2);
  
  console.log(areEqual);  

  // Use the API URL and displaying all the country  flags in the console.

  let xhr = new XMLHttpRequest();
  console.log(xhr);
  xhr.open("GET", "https://restcountries.com/v3.1/all");
  xhr.send();
  xhr.onload = function () {
    const data = JSON.parse(xhr.response);
    console.log(data[i]);
  };