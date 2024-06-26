require('es6-promise').polyfill();
import 'polyfill-nodelist-foreach'
    
    import tabs from './modules/tabs';
    import modal from './modules/modal';
    import timer from './modules/timer';
    import cards from './modules/cards';
    import calc from './modules/calc';
    import forms from './modules/forms';
    import slider from './modules/slider';
    import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => showModal('.modal', modalTimerId), 300000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items','tabheader__item_active')
    modal('[data-modal]','.modal', modalTimerId )
    timer('.timer', '2024-05-20')
    cards()
    calc()
    forms('form', modalTimerId)
    slider({
        container:'.offer__slider',
        slide:'.offer__slide',
        prevArray:'.offer__slider-prev',
        nextArray:'.offer__slider-next',
        totalCounter:'#total',
        currentCounter:'#current',
        wrapper:'.offer__slider-wrapper',
        field: '.offer__slider-inner'
    })

});