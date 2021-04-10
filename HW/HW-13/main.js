let validForm = {
    username: "Alibek",
    password: "Garrila",
    age: "29",
    growth: "183",
  };
  
  let invalidForm = {
    username: "Aliba",
    password: "Garra",
    age: "29a",
    growth: "125.1",
  };
  
  
  const handleSubmit = (form) => {

  const { username, password, age,growth } = form;
  
    let isValid = true;
    let errors = { };
  
    if (username.length < 5) {
      errors["username"] = "Логин должен быть не меньше 5 символов";
      isValid = false;
    }
    
    if (password.length < 10) {
      errors["password"] = "Пароль должен быть не меньше 8 символов";
      isValid = false;
    }
  
    if (password.indexOf("!") < 0) {
      errors["password"] = "Пароль должен содержать '!'";
      isValid = false;
    }
  
    let ageNumber = parseInt(age);
     
    
    if (isNaN(ageNumber)  || age !== String(ageNumber)) {
      errors["age"] = "Возраст должен быть числом";
      isValid = false;
    }
  
    if (age < 0 || age > 150) {
      errors["age"] = "Возраст должен быть в промежутке от 0 до 150 лет";
      isValid = false;
    }

    let growthValue = parseFloat(growth);

    if(growth.length == 0){
      isValid = true;
      growth = "Ytdd";
    }
    else{
      if(growth < 0 || growth > 300){
        errors["growth"] = "Рост должен быть в промежутке от 0 до 300";
        isValid = false;
      }
     else if(!Number.isInteger(growthValue)){
        errors["growth"] = "Значение роста должно быть целым";
        isValid = false;
      }
    }
    

    if (isValid) {
      const user = {
        username,
        password,
        age,
        growth,
        dateOfRegistration: new Date(),
      };
  
      console.log("Создаем пользователя", user);
    } else {
      console.log("Форма заполнена с ошибками", errors, form);
    }
  }
  
  handleSubmit(validForm);
  console.log("-----");
  handleSubmit(invalidForm);
  
