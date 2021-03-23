const formAdd = document.querySelector('.add');
const  inputsList = document.querySelectorAll('.input');

formAdd.addEventListener('submit' , (evt)=>{
    evt.preventDefault();
    console.log('отправка формы');
});


    //форма с именем

    inputsList.forEach((input)=> {
        input.addEventListener('input' , ()=>{
            checkValidInput(formAdd,input);      
        });
    });

    // разобьем все на функции
     // 1 функция показывает ошибку,принимает в себя форму и поле ввода
    function showError(form,input){
        const error = formAdd.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage ;
        input.classList.add('title-check-valid');
    }

    //2 функция которая скрывает ошибку^ghbybvftn форму и поле ввода

    function hideError(form,input){
        const error = formAdd.querySelector(`#${input.id}-error`);
        error.textContent = '';
        input.classList.remove('title-check-valid');
    }

    //3 функция по проверке валидности поля ввода

    function checkValidInput(form,input){
        if (!input.validity.valid){
            showError(form,input);
         } else {
            hideError(form,input);
        }
    }

  





