// validar login
function validateEmail() {
  const emailInput = document.getElementById('login');

  if (emailInput.value === 'tryber@teste.com') {
    return true;
  }
  return false;
}

// validar senha
function validatePassword() {
  const passwordInput = document.getElementById('password');

  if (passwordInput.value === '123456') {
    return true;
  }
  return false;
}

// validar login e senha mediante click
function validateAccess() {
  const loginButton = document.getElementById('login-button');

  loginButton.addEventListener('click', () => {
    if (validateEmail() && validatePassword()) {
      window.alert('Olá, Tryber!');
    } else {
      window.alert('Login ou senha inválidos.');
    }
  });
}

// valida checkbox termos
function enableSubmit() {
  const getSubmitButton = document.getElementById('submit-btn');
  const getAgreementCheck = document.getElementById('agreement');

  getSubmitButton.disabled = true;

  getAgreementCheck.addEventListener('click', () => {
    if (getAgreementCheck.checked === true) {
      getSubmitButton.disabled = false;
    } else {
      getSubmitButton.disabled = true;
    }
  });
}

// contar caracteres
function countCharacters() {
  const counter = document.getElementById('counter');
  const textarea = document.getElementById('textarea');
  let count = 500;

  textarea.addEventListener('keyup', () => {
    count = 500 - textarea.value.length;

    counter.innerText = count;
  });
}

// cria parágrafo com nome e sobrenome
function returnNameValue(getFormDiv) {
  const fullNameDiv = document.querySelector('.first-row');
  const nameInput = document.getElementById('input-name');
  const lastNameInput = document.getElementById('input-lastname');
  const fullName = document.createElement('p');
  fullName.innerText = `Nome: ${nameInput.value} ${lastNameInput.value}`;

  getFormDiv.appendChild(fullName);
  fullNameDiv.parentNode.removeChild(fullNameDiv);
}

// cria parágrafo com email e casa selecionada
function returnEmailHouseValue(getFormDiv) {
  const emailHouseDiv = document.querySelector('.second-row');
  const emailInput = document.getElementById('input-email');
  const houseInput = document.getElementById('house');
  const email = document.createElement('p');
  email.innerText = `Email: ${emailInput.value}`;
  const house = document.createElement('p');
  house.innerText = `Casa: ${houseInput.value}`;

  getFormDiv.appendChild(email);
  getFormDiv.appendChild(house);
  emailHouseDiv.parentNode.removeChild(emailHouseDiv);
}

// cria parágrafo com família
function returnFamilyValue(getFormDiv) {
  const getFamilyWrapper = document.querySelector('.family-wrapper');
  const checkFamily = document.querySelector('input[type=radio][name=family]:checked').value;
  const returnFamily = document.createElement('p');
  returnFamily.innerText = `Família: ${checkFamily}`;

  getFormDiv.appendChild(returnFamily);
  getFamilyWrapper.parentNode.removeChild(getFamilyWrapper);
}

// function verifica checked contents
function checkedContents(array) {
  const checksArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].checked === true) {
      checksArray.push(` ${array[index].value}`);
    }
  }
  return checksArray.toString();
}

// cria parágrafo com matérias
function returunContentValues(getFormDiv) {
  const getContentWrapper = document.querySelector('.content-wrapper');
  const getRadioCheckWrapper = document.querySelector('.radio-check-wrapper');
  const checkContent = document.getElementsByClassName('subject');
  const checkedValues = document.createElement('p');

  checkedValues.innerText = `Matérias: ${checkedContents(checkContent)}`;
  getFormDiv.appendChild(checkedValues);
  getContentWrapper.parentNode.removeChild(getContentWrapper);
  getRadioCheckWrapper.parentNode.removeChild(getRadioCheckWrapper);
}

// cria parágrafo com o valor da avaliação
function returnCsatValue(getFormDiv) {
  const getCsatDiv = document.querySelector('.csat');
  const checkCsat = document.querySelector('input[type=radio][name=rate]:checked').value;
  const returnCsat = document.createElement('p');
  returnCsat.innerText = `Avaliação: ${checkCsat}`;

  getFormDiv.appendChild(returnCsat);
  getCsatDiv.parentNode.removeChild(getCsatDiv);
}

// cria parágrafo com o valor do comentário
function returnCommentValue(getFormDiv) {
  const getCommentValue = document.getElementById('textarea').value;
  const getCommentDiv = document.querySelector('.comment-area');
  const commentValue = document.createElement('p');

  commentValue.innerText = `Observações: ${getCommentValue}`;
  getFormDiv.appendChild(commentValue);
  getCommentDiv.parentNode.removeChild(getCommentDiv);
}

// retira checkbox termos de uso e botão enviar
function removeAgreementSubmit(getSubmitButton) {
  const getAgreementCheck = document.querySelector('.agreement-check');

  getAgreementCheck.parentNode.removeChild(getAgreementCheck);
  getSubmitButton.parentNode.removeChild(getSubmitButton);
}

// altera elementos do formulário
function changeFormChilds() {
  const getSubmitButton = document.getElementById('submit-btn');
  const getFormDiv = document.getElementById('evaluation-form');

  getSubmitButton.addEventListener('click', (event) => {
    event.preventDefault(getFormDiv);
    returnNameValue(getFormDiv);
    returnEmailHouseValue(getFormDiv);
    returnFamilyValue(getFormDiv);
    returunContentValues(getFormDiv);
    returnCsatValue(getFormDiv);
    returnCommentValue(getFormDiv);
    removeAgreementSubmit(getSubmitButton);
  });
}

window.onload = function start() {
  validateAccess();
  enableSubmit();
  countCharacters();
  changeFormChilds();
};
