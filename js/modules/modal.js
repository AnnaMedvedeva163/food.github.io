
function closeModal(modalSelector) {
    modal = document.querySelector(modalSelector);
    modal.style.display = 'none';
    document.body.style.overflow = '';

}
function showModal(modalSelector, modalTimerId) {
    modal = document.querySelector(modalSelector);
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden';
    console.log(modalTimerId)
    if(modalTimerId){
        clearInterval(modalTimerId)
    }
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    // Modal
    const modalTrigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSelector);

   

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => showModal(modalSelector, modalTimerId));
    });    

    // modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            closeModal(modalSelector);
        }
    })


    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
            showModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll',showModalByScroll)
        }
    }
    window.addEventListener('scroll',showModalByScroll);


}

export default modal;
export {showModal};
export {closeModal};