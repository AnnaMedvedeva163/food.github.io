import { closeModal, showModal } from "./modal";


function forms(formSelector, modalTimerId ) {
    //forms
    const forms = document.querySelectorAll(formSelector);
    const message = {
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    }
    forms.forEach(item => {
        bindPostData(item);
    })

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            // e.preventDefault();

            const statusMessage = document.createElement('img');

            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend',statusMessage)
            showThanksModal(message.success);
        
        })
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.style.display = 'none';
        showModal('.modal', modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>&times;</div>
            <div class="modal__title">${message}</div>
        </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove()
            prevModalDialog.style.display = 'block';
            closeModal('.modal')
        }, 4000)
    }

}

export default forms;