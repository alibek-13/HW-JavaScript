// У нас есть коробка для яблок. В которой изначально пусто.

// Написать несколько операций по изменению количества яблок в коробке (2-3)

// После каждой операции вывести в коесоль красивое сообщение с количеством яблок например "В ящике 10 яблок" Слово "яблоко" должно быть согласовано с числом

// Согласование с числом реализовать отдельной функцией, которая принимает три формы слова и возвращает функцию для согласования (см. урок)

// После каждой операции вывести "состояние" коробки: "Пустая", "Полная", "Кредитная коробка" (используем if)

// Вынести процесс логирования в консоль в отдельную функцию

// 1 яблоко form1 2 яблока form2 3 яблока form2 4 яблока form2 5 яблок form3 6 яблок 
// form3 7 яблок form3 8 яблок form3 9 яблок form3 10 яблок form3 xxxx11-19 яблок
//  form3 xxxx20 яблок xxxx21 яблоко xxxx22 яблока xxxx23 яблока xxxx24 яблока xxxx25 
//  яблок xxxx26 яблок xxxx27 яблок xxxx28 яблок xxxx29 яблок xxxx30 яблок

let Box = 0;

console.log("В ящике: " + Box + " яблок");
console.log ("______________________")
let apple = 1;

const nNounRus = (form1, form2) => {
  // n + " " + (n === 1 ? singular : plural);
  return (n) => {
    let word;

    if (n % 10 === 1 && n % 100 !== 11) {
      word = form1;
    } else {
      word = form2;
    }

    return n + " " + word;
  }
}

const printWeHaveSomething = (f) => (n) => {


if (apple  > 0) { 
    console.log ("«состояние» коробки: " + "«Полная»" + "\n В ящике: "+ f(n) );
}
//условия если большее 0 яблок
if (apple === 0 ) { 
    console.log ("«состояние» коробки: " + "«Пустая»" + "\n В ящике: "+ apple + " яблок");
} 
//условия если равно  0 яблок
if (apple < 0 ) {
    console.log ("«состояние» коробки: " + "«Кредитная коробка»" + "\n В ящике: "+ apple + " яблок");
}
//условия если меньшее 0 яблок
}




  
  // const nItems = nNounRus("item");
  
  // console.log("You have " + nItems(10) + " in your cart");
  // console.log("You added " + nItems(2) + " in your cart");
  



  
  
  const printApples = printWeHaveSomething (nNounRus("яблока", "яблок", "яблоки"));
  const printBananas = printWeHaveSomething (nNounRus("Пустая", "Полная"));
  // const printFeet = printWeHaveSomething (nNounRus("ногой", "ногами"));
  
  
  let apples = 0;
  printApples(apples);
  
  apples += 1;
  printApples(apples);
  
  apples += 10;
  printApples(apples);
  
  apples += 110;
  printApples(apples);
  
  
  let bananas = 0;
  printBananas(bananas);
  
  bananas += 1;
  printBananas(bananas);
  
  bananas += 10;
  printBananas(bananas);
  
  bananas += 110;
  printBananas(bananas);
  
  
  // let feet = 0;
  // printFeet(feet);
  
  // feet += 1;
  // printFeet(feet);
  
  // feet += 10;
  // printFeet(feet);
  
  // feet += 110;
  // printFeet(feet); 



