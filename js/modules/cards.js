import json from "../services/db.json";

function cards() {
  //используем классы для карточек
  const menuCards = document.querySelector(".menu__field .container");

  class MenuCard {
    constructor(src, alt, title, descr, price) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.render();
    }
    render() {
      menuCards.innerHTML += `<div class="menu__item">
                <img src="${this.src}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
                </div>
            </div>`;
    }
  }

    const data = json.menu
    data.forEach(({img, altimg, title, descr, price}) => {
        new MenuCard(img, altimg, title, descr, price)
    })

}

export default cards;
