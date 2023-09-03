const swiper = new Swiper('.mainslider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 2000,
    }
});
const swiper1 = new Swiper('.modernCollection__swiper1', {
    navigation: {
        nextEl: '.pag__next',
        prevEl: '.pag__prev',
        clickable:true
    } ,
    centeredSlides:true,
    slidesPerView: 1,
    spaceBetween: 10,

    pagination: {
        el: '.swiper-pag',
       
        type:'custom',
        clickable: true,
        
        renderCustom: function (swiper1, current, total) {
            return current + ' из ' + total;
          }
    },
    
   autoplay: {
        delay: 2000,
    },
  
});
const swiper2 = new Swiper('.salesHit__swiper', {
    navigation: {
        nextEl: '.pag__next',
        prevEl: '.pag__prev',
        clickable:true
    } ,
    slidesPerView: 4,
    spaceBetween: 37,

    
    
   autoplay: {
        delay: 2000,
    },
  
});
const swiper3 = new Swiper('.reviews__swiper', {
    navigation: {
        nextEl: '.pag__next',
        prevEl: '.pag__prev',
        clickable:true
    } ,
    slidesPerView: 2,
    spaceBetween: 40,

    pagination: {
        el: '.swiper-pag',
       
        type:'custom',
        clickable: true,
        
        renderCustom: function (swiper1, current, total) {
            return current + ' из ' + total;
          }
    },
    
   autoplay: {
        delay: 2000,
    },
  
});
let furNames= [...document.querySelectorAll('.furniture__names ul li')]
console.log(furNames);
let furItems = [...document.querySelectorAll('.furnitures_wrapper > div')]
console.log(furItems);

furNames.forEach((element,index)=>{
    element.addEventListener('click',function(){
        furNames.forEach((el,i)=>{
            el.classList.remove('fur-active')
            furItems[i].classList.remove('furniture-active')
        })
        element.classList.add('fur-active')
        furItems[index].classList.add('furniture-active')
    })
})