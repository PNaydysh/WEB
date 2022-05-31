const age = 9;
const ageGroup;

if (age <= 1)
  {
    ageGroup = "Щенки";
  }
else if (age<=3)
  {
    ageGroup = "Молодые собаки";
  }
else if (age<=7)
  {
    ageGroup = "Собаки средних лет";
  }
else if (age > 7)
  {
    ageGroup = "Почтенные таксоны";
  }

console.log(ageGroup);
