let string1 = 'jhonpeter'
let string2 = 'eertpjnoh'
if(string1.length!==string2.length){
  console.log("False");
}
else{
string1 = string1.split('').sort().join('');
string2 = string2.split('').sort().join('');                              //1
if(string1==string2){
  console.log("true");
}

}

let country = {
    countryName:  "India",
    getName: function(){
    console.log("EX 2 :",this.countryName);                               //2
  }
}

country.getName();

let num = Number.MAX_SAFE_INTEGER + 1;
  console.log("EX 3 : ",Number.isInteger(num));
  console.log("EX 3 : " + isNaN(num));

let word = 'string';
  console.log("EX 3 : " + Number.isInteger(word));                          //3
  console.log("EX 3 : " + isNaN(word));
  
  
let sentence = "HELLO world";
  sentence = sentence.split("").reverse();
  sentence.join("");
  console.log("EX 4 : "+"Reversed sentence is:",sentence);                //4
  
let sentence1 = ' my name is ram ';
console.log(sentence1.split('').sort().join('').trim());