console.log("hellow world")

//anonymous funtions (ES-6)
//1)Print odd numbers

let arr = [1,2,3,4,5,6,7,8,9,10];
function anon_func(){
   for (let i=0; i<arr.length; i++){
   if(i%2 !=1){
      console.log(arr[i])
   }
}
}
anon_func(arr); 

// stings to tittle caps
const cas = ['apple', 'banana', 'cereal'];
console.log(cas);
const upper = cas.map(element => {
  return element.toUpperCase();
});

console.log(upper);
