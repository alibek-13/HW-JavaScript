// Используя наработки предыдущих ДЗ:

// Наша цель накопить N яблок

// Каждый день (итерацию цикла) мы получаем или теряем случайное количество яблок 
// в промежутке от (MIN, MAX) Например от -5 до 10;

// На каждый день выводить лог как в предыдущем ДЗ:
//   "Получили/потеряли R яблок"
//   "В коробке S яблок"

// В конце "Ура мы накопили N яблок"

const randomInt = (min, max) => 
  min + Math.floor(Math.random() * (max - min));

console.log(randomInt(-5, 10));

const randomInt = full;

const Box = (b, fullBox, emptyBox, creditBox) => {
        
    if ( b === 0 ) {  
      
      return emptyBox;
    
    }
    else if ( b < 0 ) {

      return creditBox;
      }
    else if (b > 0) {
      return fullBox;
    }
  }
  const  apple = (n, form1, form2, form3) => {
              
    n = n % 100;
              
    n1 = n % 10;
              
    if (n > 10 && n < 20) {
              
      return form3;
                  }
    else if (n1 > 1 && n1 < 5) {

      return form2;
                  }
    else if (n1 === 1) {

      return form1;
                  }
      return form3;
  }
  full = n; // Значение из базы данных
  b = n;
  console.log ("В ящике:"+ n + " " + apple(n, "Яблоко", "Яблока", "Яблок") +" "
   + Box(b, "Полная коробка", "Пустая коробка", "Кредитная коробка",));
