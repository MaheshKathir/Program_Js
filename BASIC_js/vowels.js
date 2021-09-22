let vowels = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"];
let word = 'Elephant';
let count = 0;
for(i=0;i<=word.length;i++)
{
  for(j=0;j<=vowels.length;j++)
  {
  if(vowels[j]==word[i]){
   count++;
  }
 
  }
}
console.log(count);