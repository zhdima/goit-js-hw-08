import throttle from 'lodash.throttle';

const KEY_FORM_STATE = 'feedback-form-state';

const getFormState = form => ({ email: form.elements.email.value, message: form.elements.message.value });

function onFormSubmit(evt) {
  
  evt.preventDefault();

  console.log(getFormState(evt.currentTarget));

  localStorage.removeItem(KEY_FORM_STATE);
  evt.currentTarget.reset();
}

function doTask03() {

  const form = document.querySelector('.feedback-form');

  if (!form) {
    console.log('Error: invalid markup!');
    return;
  }

  const jsonFormState = localStorage.getItem(KEY_FORM_STATE);
  if (jsonFormState) {
    try {
      const formState = JSON.parse(jsonFormState);
      form.elements.email.value   = formState.email;
      form.elements.message.value = formState.message;
    } catch (err) {
      console.error('Error: invalid saved form state in LocalStorage!' + KEY_FORM_STATE);
      console.error(err);
    }
  }

  form.addEventListener('input', throttle(evt =>
    localStorage.setItem(KEY_FORM_STATE, JSON.stringify(getFormState(form))), 500));
  
  form.addEventListener('submit', onFormSubmit);
}

doTask03();
