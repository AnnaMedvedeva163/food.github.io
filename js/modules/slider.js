function slider({container, slide, prevArray, nextArray, totalCounter, currentCounter, wrapper, field}) {
    // slider

    const slides = document.querySelectorAll(slide),
          slider = document.querySelector(container),
          prev = document.querySelector(prevArray),
          next = document.querySelector(nextArray),
          total = document.querySelector(totalCounter),
          current = document.querySelector(currentCounter),
          slidesWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(field),
          width = window.getComputedStyle(slidesWrapper).width;

    
          let slideIndex = 1;
     
          showSlides(slideIndex);
      
          if (slides.length < 10) {
              total.textContent = `0${slides.length}`;
          } else {
              total.textContent = slides.length;
          }
      
          function showSlides(n) {
              if (n > slides.length) {
                  slideIndex = 1;
              }
              if (n < 1) {
                  slideIndex = slides.length;
              }
      
              slides.forEach((item) => item.style.display = 'none');
      
              slides[slideIndex - 1].style.display = 'block'; // Как ваша самостоятельная работа - переписать на использование классов show/hide
              
              if (slides.length < 10) {
                  current.textContent =  `0${slideIndex}`;
              } else {
                  current.textContent =  slideIndex;
              }
          }
      
          function plusSlides (n) {
              showSlides(slideIndex += n);
          }
      
          prev.addEventListener('click', function(){
              plusSlides(-1);
          });
      
          next.addEventListener('click', function(){
              plusSlides(1);
          });
      

    
//     function showSlider() {
//         slides.forEach((item, i) => {
//             item.style.display = 'none'
//             if (+current.innerHTML == (i+1)) {
//                 item.style.display = 'block'
//             }
//         })
//     }

//     function checkingNumbers (item) {
//         if (slider.length < 10){
//             item.innerHTML = `0${slider.length}`
//         } else {
//             item.innerHTML = slider.length
//         }
//     }
//     checkingNumbers(total)
//     current.innerHTML = '01'
//     console.log(current.innerHTML)
//     showSlider()

//     prev.addEventListener('click', (e) => {
//         if ( +current.innerHTML == 1) {
//             checkingNumbers(current) 
//         } else {
//             if ((+current.innerHTML - 1) < 10){
//                 current.innerHTML = `0${+current.innerHTML - 1}`
//             } else {
//                 current.innerHTML = +current.innerHTML - 1
//             }
//         }
//         showSlider()
//     })
//     next.addEventListener('click', (e) => {
//         if ( +current.innerHTML == slider.length) { 
//             current.innerHTML = `01`
//         } else {
//             if ((+current.innerHTML + 1) < 10){
//                 current.innerHTML = `0${+current.innerHTML + 1}`
//             } else {
//                 current.innerHTML = +current.innerHTML + 1
//             }    
//         }
//         showSlider()
//     })

 }

export default slider;