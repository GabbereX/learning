function getHeader() {
  const container = document.createElement('header');
  const logo = document.createElement('a');
  const searchContainer = document.createElement('div');
  const input = document.createElement('input');

  container.classList.add('header');
  logo.classList.add('logo');
  input.classList.add('header__input');

  searchContainer.id = 'searchContainer_ID';
  input.id = 'inputSearch_ID';

  logo.href = '/';
  logo.innerHTML = `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="25" fill="#9873FF"/><path d="M17.2617 29.082C17.2617 30.0898 16.9102 30.8574 16.207 31.3848C15.5098 31.9121 14.4639 32.1758 13.0693 32.1758C12.3545 32.1758 11.7451 32.126 11.2412 32.0264C10.7373 31.9326 10.2656 31.792 9.82617 31.6045V29.3896C10.3242 29.624 10.8838 29.8203 11.5049 29.9785C12.1318 30.1367 12.6826 30.2158 13.1572 30.2158C14.1299 30.2158 14.6162 29.9346 14.6162 29.3721C14.6162 29.1611 14.5518 28.9912 14.4229 28.8623C14.2939 28.7275 14.0713 28.5781 13.7549 28.4141C13.4385 28.2441 13.0166 28.0479 12.4893 27.8252C11.7334 27.5088 11.1768 27.2158 10.8193 26.9463C10.4678 26.6768 10.21 26.3691 10.0459 26.0234C9.8877 25.6719 9.80859 25.2412 9.80859 24.7314C9.80859 23.8584 10.1455 23.1846 10.8193 22.71C11.499 22.2295 12.46 21.9893 13.7021 21.9893C14.8857 21.9893 16.0371 22.2471 17.1562 22.7627L16.3477 24.6963C15.8555 24.4854 15.3955 24.3125 14.9678 24.1777C14.54 24.043 14.1035 23.9756 13.6582 23.9756C12.8672 23.9756 12.4717 24.1895 12.4717 24.6172C12.4717 24.8574 12.5977 25.0654 12.8496 25.2412C13.1074 25.417 13.667 25.6777 14.5283 26.0234C15.2959 26.334 15.8584 26.624 16.2158 26.8936C16.5732 27.1631 16.8369 27.4736 17.0068 27.8252C17.1768 28.1768 17.2617 28.5957 17.2617 29.082ZM21.9287 26.6562L23.0977 25.1621L25.8486 22.1738H28.8721L24.9697 26.4365L29.1094 32H26.0156L23.1855 28.0186L22.0342 28.9414V32H19.3535V18.3242H22.0342V24.4238L21.8936 26.6562H21.9287ZM35.9824 21.9893C37.1426 21.9893 38.0508 22.4434 38.707 23.3516C39.3633 24.2539 39.6914 25.4932 39.6914 27.0693C39.6914 28.6924 39.3516 29.9492 38.6719 30.8398C37.998 31.7305 37.0781 32.1758 35.9121 32.1758C34.7578 32.1758 33.8525 31.7568 33.1963 30.9189H33.0117L32.5635 32H30.5156V18.3242H33.1963V21.5059C33.1963 21.9102 33.1611 22.5576 33.0908 23.4482H33.1963C33.8232 22.4756 34.752 21.9893 35.9824 21.9893ZM35.1211 24.1338C34.459 24.1338 33.9756 24.3389 33.6709 24.749C33.3662 25.1533 33.208 25.8242 33.1963 26.7617V27.0518C33.1963 28.1064 33.3516 28.8623 33.6621 29.3193C33.9785 29.7764 34.4766 30.0049 35.1562 30.0049C35.707 30.0049 36.1436 29.7529 36.4658 29.249C36.7939 28.7393 36.958 28.001 36.958 27.0342C36.958 26.0674 36.7939 25.3438 36.4658 24.8633C36.1377 24.377 35.6895 24.1338 35.1211 24.1338ZM41.5283 30.7432C41.5283 30.251 41.6602 29.8789 41.9238 29.627C42.1875 29.375 42.5713 29.249 43.0752 29.249C43.5615 29.249 43.9365 29.3779 44.2002 29.6357C44.4697 29.8936 44.6045 30.2627 44.6045 30.7432C44.6045 31.2061 44.4697 31.5723 44.2002 31.8418C43.9307 32.1055 43.5557 32.2373 43.0752 32.2373C42.583 32.2373 42.2021 32.1084 41.9326 31.8506C41.6631 31.5869 41.5283 31.2178 41.5283 30.7432Z" fill="white"/></svg>`;

  input.placeholder = 'Введите запрос';

  searchContainer.append(input)
  container.append(logo, searchContainer);

  return container;
};

function getMain() {
  const main = document.createElement('main');
  const title = document.createElement('h1');

  main.classList.add('main');
  title.classList.add('title');

  title.innerText = 'Клиенты';

  main.append(title);

  return main;
};

function getClientsTable() {
  const tableContainer = document.createElement('div');
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const tableBody = document.createElement('tbody');
  const aToZ = document.createElement('span');

  const [
    tableColumnId,
    tableColumnName,
    tableColumnDateCreate,
    tableColumnDateEdit,
    tableColumnContacts,
    tableColumnActions
  ] = Array(6).fill().map((i) => {
    i = document.createElement('th');
    i.classList.add('table__column');
    tableHead.append(i);
    return i;
  });

  tableColumnId.innerText = 'ID';
  tableColumnName.innerText = 'Фамилия Имя Отчество';
  tableColumnDateCreate.innerText = 'Дата и время создания';
  tableColumnDateEdit.innerText = 'Последние изменения';
  tableColumnContacts.innerText = 'Контакты';
  tableColumnActions.innerText = 'Действия';
  aToZ.innerText = 'А-Я';

  tableContainer.classList.add('table__container')
  table.classList.add('table');
  tableHead.classList.add('table__head');
  tableBody.classList.add('table__body');


  tableHead.id = 'tableHead_ID';
  tableBody.id = 'tableBody_ID';
  tableColumnId.id = 'tableColumnId_ID';
  tableColumnName.id = 'tableColumnName_ID';
  tableColumnDateCreate.id = 'tableColumnDateCreate_ID';
  tableColumnDateEdit.id = 'tableColumnDateEdit_ID';
  aToZ.id = 'aToZ_ID';
  tableColumnActions.setAttribute('colspan', '2');

  tableColumnName.append(aToZ);
  table.append(tableHead);
  table.append(tableBody);
  tableContainer.append(table)

  spin(tableBody)

  return {
    tableContainer
  };
};

function getAddClientButton() {
  const button = document.createElement('button');

  button.classList.add('add-button');
  button.innerHTML = `<svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.5 8C16.71 8 18.5 6.21 18.5 4C18.5 1.79 16.71 0 14.5 0C12.29 0 10.5 1.79 10.5 4C10.5 6.21 12.29 8 14.5 8ZM5.5 6V3H3.5V6H0.5V8H3.5V11H5.5V8H8.5V6H5.5ZM14.5 10C11.83 10 6.5 11.34 6.5 14V16H22.5V14C22.5 11.34 17.17 10 14.5 10Z" fill=""/></svg>Добавить клиента`;

  return {
    button
  };
};

function spin(tableBody) {
  tableBody.innerHTML = '';
  const tr = document.createElement('tr');
  const td = document.createElement('td');

  tr.classList.add('spin');
  td.classList.add('table__spin');

  td.setAttribute('colspan', '6');

  td.innerHTML = `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.00025 40.0005C4.00025 59.8825 20.1182 76.0005 40.0002 76.0005C59.8822 76.0005 76.0002 59.8825 76.0002 40.0005C76.0002 20.1185 59.8823 4.00049 40.0003 4.00049C35.3513 4.00048 30.9082 4.88148 26.8282 6.48648" stroke="#9873FF" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round"/>
  </svg>`;

  tr.append(td);
  tableBody.append(tr);
};

export { getHeader, getMain, getClientsTable, getAddClientButton, spin };