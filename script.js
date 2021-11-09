'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnsOpenModal = document.querySelectorAll(`.show-modal`);

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

const openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener(`click`, openModal);

btnCloseModal.addEventListener(`click`, closeModal);

overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape` && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


//--------------------------------------------------------MODAL-POLOCY

const modalPolicy = document.querySelector(`.modalPolicy`);
const btnsOpenModalPolicy = document.querySelectorAll(`.show-modalPolicy`);
const btnCloseModalPolicy = document.querySelector(`.close-modalPolicy`);
const overlayPolicy = document.querySelector(`.overlay`);


const closeModalPolicy = function () {
  modalPolicy.classList.add(`hidden`);
  overlayPolicy.classList.add(`hidden`);
};

const openModalPolicy = function () {
  modalPolicy.classList.remove(`hidden`);
  overlayPolicy.classList.remove(`hidden`);
};

for (let i = 0; i < btnsOpenModalPolicy.length; i++)
  btnsOpenModalPolicy[i].addEventListener(`click`, openModalPolicy);

btnCloseModalPolicy.addEventListener(`click`, closeModalPolicy);

overlay.addEventListener(`click`, closeModalPolicy);

document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape` && !modalPolicy.classList.contains('hidden')) {
    closeModalPolicy();
  }
});





