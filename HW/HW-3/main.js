// У нас есть коробка для яблок. В которой изначально пусто.

// Написать несколько операций по изменению количества яблок в коробке (2-3)

// После каждой операции вывести в консоль красивое сообщение с помощью, например,
// "В ящике 10 яблок" (не заморачиваться с падежом слова "яблоко")

// После каждой операции вывести «состояние» коробки: «Пустая», «Полная», 
//«Кредитная коробка» (используем если)

// Вынести процесс логирования в консоль в отдельную функцию


let Box = 0;

console.log("В ящике: " + Box + " яблок");
console.log ("______________________")
let apple = 10;


if (apple  > 0) { 
    console.log ("«состояние» коробки: " + "«Полная»" + "\n В ящике: "+ apple + " яблок");
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
  
  // const nItems = nNounRus("item");
  
  // console.log("You have " + nItems(10) + " in your cart");
  // console.log("You added " + nItems(2) + " in your cart");
  


const printWeHaveSomething = (f) => (n) => {
    console.log("Я горжусь " + f(n) + "!");
  }
  
  
  const printApples = printWeHaveSomething (nNounRus("яблоком", "яблоками"));
  const printBananas = printWeHaveSomething (nNounRus("бананом", "бананами"));
  const printFeet = printWeHaveSomething (nNounRus("ногой", "ногами"));
  
  
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
  
  
  let feet = 0;
  printFeet(feet);
  
  feet += 1;
  printFeet(feet);
  
  feet += 10;
  printFeet(feet);
  
  feet += 110;
  printFeet(feet); 



