poly = 4774;
poly = String(poly);

let ylop ="";
let isPalindrom = false;

for(let i = poly.length - 1; i>=0; i--)
  {
    ylop += poly[i];
  }
if(poly == ylop)
  {
    isPalindrom = true;
  }

console.log(isPalindrom)
