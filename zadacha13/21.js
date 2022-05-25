const numbers = [1, 2, 4 ,5, 1, 4, 5];
let lastIndex = -1;
const numWeSearch = 5;

for (let i = 0; i <= numbers.length - 1; i++) 
{
 if (numbers[i] === numWeSearch)
 {
   lastIndex = i;
 }
}

alert(lastIndex)
