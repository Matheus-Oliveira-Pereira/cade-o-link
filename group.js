'use strict';

const newLi = document.querySelector(".newLi")

const createLink = () => {
  const linksUl = document.querySelector(".group__links");

  const li = document.createElement("li");
  const text = document.createElement("p");
  const titleValue = document.querySelector(".title_input").value;
  const linkValue = document.querySelector(".link_input").value;

  const titleTextNode = document.createTextNode(titleValue);
  text.appendChild(titleTextNode)

  text.classList.add("group__links--text")
  li.classList.add("group__links--link")
  li.appendChild(text)
  linksUl.appendChild(li)

  linksUl.innerHTML;

  closeModalForm();
}


newLi.addEventListener('click', createLink)


const modalForm = document.querySelector(`.modalForm`);
const overlayForm = document.querySelector(`.overlayForm`);
const btnCloseModalForm = document.querySelector(`.close-modalForm`);
const btnsOpenModalForm = document.querySelectorAll(`.show-modalForm`);

const closeModalForm = function () {
  modalForm.classList.add(`hidden`);
  overlayForm.classList.add(`hidden`);
};

const openModalForm = function () {
  modalForm.classList.remove(`hidden`);
  overlayForm.classList.remove(`hidden`);
};

for (let i = 0; i < btnsOpenModalForm.length; i++)
  btnsOpenModalForm[i].addEventListener(`click`, openModalForm);

btnCloseModalForm.addEventListener(`click`, closeModalForm);

overlayForm.addEventListener(`click`, closeModalForm);

document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape` && !modalForm.classList.contains('hidden')) {
    closeModalForm();
  }
});
