// У нас есть коробка для яблок. В которой изначально пусто.

// Написать несколько операций по изменению количества яблок в коробке (2-3)

// После каждой операции вывести в коесоль красивое сообщение
// с количеством яблок например "В ящике 10 яблок" Слово "яблоко" должно быть согласовано с числом

// Согласование с числом реализовать отдельной функцией, которая принимает 
//три формы слова и возвращает функцию для согласования (см. урок)

// После каждой операции вывести "состояние" коробки: "Пустая", "Полная", "Кредитная коробка" (используем if)

// Вынести процесс логирования в консоль в отдельную функцию

// 1 яблоко form1 // 2 яблока form2 // 3 яблока form2 // 4 яблока form2 // 5 яблок form3 // 6 яблок form3// 7 яблок form3 
// 8 яблок form3 // 9 яблок form3 // 10 яблок form3 // xxxx11-19 яблок form3 // xxxx 20 яблок // xxx21 яблоко 
// xxxx22 яблока // xxxx23 яблока // xxxx24 яблока // xxxx25 form3


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

          return form1;}

          return form3;
      }
      n = 123; // Значение из базы данных
      b = n;
      console.log ("В ящике:"+ n + " " + apple(n, "Яблоко", "Яблока", "Яблок") +" "
       + Box(b, "Полная коробка", "Пустая коробка", "Кредитная коробка",));



































// let Box;

// console.log("В ящике: " + Box + " яблок");
// // console.log ("______________________")
//  let apple = 1;

// const nNounRus = (form1, form2, form3 ) => {
//   // n + " " + (n === 1 ? singular : plural);
//   return (n) => {
//     let word;

//     if (n % 10 === 1 && n % 100 !== 11) {
//       word = form1;
//     } else if (n % 10 <= 2 && n % 10 >= 4 ) {
//       word = form2;
     
//     }
//     console.log ( form2);

//     return n + " " + word;
//   }
// }



// const printWeHaveSomething = (f) => (n) => {


// // if (apple  > 0) { 
// //     
// // }
// // //условия если большее 0 яблок
// // if (apple === 0 ) { 
// //     console.log ("\n В ящике: "+ f(n));
// // } 
// // //условия если равно  0 яблок
// // if (apple < 0 ) {
// //     console.log ("\n В ящике: "+ f(n));
// // }
// // //условия если меньшее 0 яблок
// // 

// console.log ("\n В ящике: "+ f(n) );
// }




  
//   // const nItems = nNounRus("item");
  
//   // console.log("You have " + nItems(10) + " in your cart");
//   // console.log("You added " + nItems(2) + " in your cart");
  



  
  
//   const printApples = printWeHaveSomething (nNounRus("яблоко", "яблока"));
//   const printBananas = printWeHaveSomething (nNounRus("Пустая", "Полная"));
//   // const printFeet = printWeHaveSomething (
//   //  nNounRus("ногой", "ногами"));
  
  
//   let apples = 0;
//   printApples(apples);
  
//   apples += 1;
//   printApples(apples);

//   apples += 20;
//   printApples(apples);

//   apples += 10;
//   printApples(apples);

//   apples += 12;
//   printApples(apples);

//   apples += 20;
//   printApples(apples);

//   apples += 110;
//   printApples(apples);
   
//   apples += 111;
//   printApples(apples);
  
//   apples += 4;
//   printApples(apples);

  
  
//   // let bananas = 0;
//   // printBananas(bananas);
  
//   // bananas += 1;
//   // printBananas(bananas);
  
//   // bananas += 10;
//   // printBananas(bananas);
  
//   // bananas += 110;
//   // printBananas(bananas);
  
  
//   // let feet = 0;
//   // printFeet(feet);
  
//   // feet += 1;
//   // printFeet(feet);
  
//   // feet += 10;
//   // printFeet(feet);
  
//   // feet += 110;
//   // printFeet(feet); 