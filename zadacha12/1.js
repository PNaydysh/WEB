let ageDog = 10;
let ageDogsGroup;
if (ageDog <= 1)
  {
    ageDogsGroup = "Щенки";
  }
if(ageDog>1 && ageDog<=3)
  {
    ageDogsGroup = "Молодые собаки";
  }
if(ageDog>3 && ageDog<=7)
  {
    ageDogsGroup = "Собаки средних лет";
  }
if(ageDog > 7)
  {
    ageDogsGroup = "Почтенные таксоны";
  }
console.log(ageDogsGroup);
