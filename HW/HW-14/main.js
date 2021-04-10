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


// string -> ValidationState
const createValidationState = (value) => ({
    value, // string - Исходное значение поля
    result: value, // any - Чистое значение поля
    isValid: true, //bolean - Флаг валидности поля
    error: null // string - Ошибка (если есть )
  });
  
  const withError = (state, error) => ({
    value: state.value,
    result: state.result,
    isValid: false,
    error
  })
  
  // ValidationState -> required -> length(8) -> hasChar(ExclamationMark) -> ValidationState
  // ValidationState -> required -> isNumber() -> isInRange(0, 150) -> ValidationState
  
  const required = (state) => {
    if (!state.isValid) {
      return state;
    }
  
    return state.result.length > 0 ? state : withError(state, "Обязательное поле");
  }
  
  const length = (minLength) => (state) => {
    if (!state.isValid) {
      return state;
    }
  
    return state.result.length >= minLength ? state : withError(state, "Длина должна быть не меньше " + minLength);
  }
  /*
  const validateAge = (age) => {
    let ageNumber = parseInt(age);
    if (isNaN(ageNumber) || age !== String(ageNumber)) {
      return [false, "Возраст должен быть числом"];
    }
    if (age < 0 || age > 150) {
      return [false, "Возраст должен быть в промежутке от 0 до 150 лет"];
    }
    return [true, null];
  }*/
  const isNumber = (age) => (state) => {
    if(!state.isValid) {
      return state;
    } //else if (isNaN(parseInt(age)) || age !== String(parseInt(age))) {
      //return withError(state, "Возраст должен быть числом");
    //}
    return state.result.value == isNaN(parseInt(age))  ? state : withError(state, "Возраст должен быть числом");
  }
  /*function isNumber(num) {
      return typeof num === 'number' && !isNaN(num);
  }*/
  
  const validate = (...validators) => (initialState) =>
    validators.reduce((state, validator) => validator(state), initialState);
  
  let UserFormValidation = {
    username: validate(required, length(5)),
    password: validate(required, length(8)),
    age: validate(required, isNumber())
    //age: validateAge,
    //height: validateHeight,
  };
  
  const validateFiled = key => value => {
    const state = createValidationState(value);
  
    return (
      UserFormValidation.hasOwnProperty(key)
      ? UserFormValidation[key](state)
      : state
    );
  }
  //UserFormValidation[key] ? UserFormValidation[key](value) : UserFormValidation["_default"](value);
  
  // UserForm = { string: string }
  // Errors = { string: string }
  // Maybe<User> = User | null
  // UserForm -> [boolean, Errors, Maybe<User>]
  // form -> validateFields -> isFormValid -> 
  //                        ----------------> [isValid, errors, createUser]
  // pipe(form, validateFileds, isFormValid, createResult)
  const validateUserForm = form => {
  
    const validationStates = 
      Object.entries(form)
        .map(([key, value]) => [key, validateFiled(key)(value)])
        .filter(([, state]) => !state.isValid); // [ [key, ValidationState] ]
  
    const isValid = validationStates.length == 0;
  
    return [
      isValid, 
      Object.fromEntries(
        validationStates.map(([key, state]) => [key, state.error])
      ), 
      isValid && createUser(form)
    ];
  }
  
  const createUser = ({
    username,
    password,
    age,
    height,
  }) => ({
    username,
    password,
    age,
    height,
    dateOfRegistration: new Date()
  });
  
  // UserForm -> void (Побочный эффект)
  // Пограничная функция между миром чистых функций и миром побочных эффектов
  const handleSubmit = (form) => {
    // проверка типов данных 
    const [isValid, errors, user] = validateUserForm(form);
  
    if (isValid) {
      // отправить форму 
      console.log("Создаем пользователя", user);
    } else {
      // отображаем ошибки в форме
      console.log("Форма заполнена с ошибками", errors, form);
    }
  }
  
  /// 
  
  handleSubmit(validForm);
  console.log("-----");
  handleSubmit(invalidForm);