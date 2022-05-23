let numbers = [6, 2, 13, 9, 7, 3];
let lastIndex = -1;
let numWeSearch = 6;
let swap;

for (let i = 0; i < numbers.length; i++) 
{
  for (let j = i + 1; j < numbers.length; j++) 
   {
    if (numbers[j] < numbers[i]) 
    {
      swap = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = swap;
    }
  }
}

for (let i = 0; i <= numbers.length - 1; i++) 
{
 if (numbers[i] == numWeSearch)
 {
   lastIndex = i;
 }
}

if (lastIndex == -1)
{
  console.log('элемент не найден');
}
else console.log(lastIndex);
