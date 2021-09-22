function multiple(sum){
    console.log(sum * 2);
  }
  
  function add(sum){
    console.log(sum + 8);
  }
  
  function toSum(num1,num2,operation){
    var sum = num1 + num2;
    operation(sum);
  }
  
  toSum(10,10,add);
  toSum(10,10,multiple);