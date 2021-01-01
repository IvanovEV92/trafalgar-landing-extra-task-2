import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
const refs = {
  btnRef: document.querySelector('.hero__btn'),
  modalRef: document.querySelector('template'),
};

const instance = basicLightbox.create(refs.modalRef, {
  onShow: instance => {
    const btnResetRef = instance.element().querySelector('#clear');
    btnResetRef.addEventListener('click', instance.close);
    window.addEventListener('keydown', modalCloseEscape);
  },

  onClose: instance => {
    const btnResetRef = instance.element().querySelector('#clear');
    btnResetRef.removeEventListener('click', instance.close);
    window.removeEventListener('keydown', modalCloseEscape);
  },
});

refs.btnRef.addEventListener('click', instance.show);
function modalCloseEscape(e) {
  if (e.code === 'Escape') {
    instance.close();
  }
}
