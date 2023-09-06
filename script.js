const swiper = new Swiper('.mainslider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    loop: true,
    slidesPerView: 1,
    // autoplay: {
    //     delay: 2000,
    // }
});
const swiper1 = new Swiper('.modernCollection__swiper1', {
    navigation: {
        nextEl: '.pag__next',
        prevEl: '.pag__prev',
        clickable: true
    },
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 10,

    pagination: {
        el: '.swiper-pag',

        type: 'custom',
        clickable: true,

        renderCustom: function (swiper1, current, total) {
            return current + ' из ' + total;
        }
    },

    autoplay: {
        delay: 2000,
    },


});

const swiper4 = new Swiper('.modernCollection__swiper3', {
    navigation: {
        nextEl: '.pag__next',
        prevEl: '.pag__prev',
        clickable: true
    },
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 10,

    pagination: {
        el: '.swiper-pag',

        type: 'custom',
        clickable: true,

        renderCustom: function (swiper1, current, total) {
            return current + ' из ' + total;
        }
    },

    autoplay: {
        delay: 2000,
    },

});
const swiper5 = new Swiper('.swiperFurniture', {
    freeMode: true,
    spaceBetween: 25,
    slidesPerView: 1.3
})
const swiper8 = new Swiper('.furniture__namesSwiper', {
    freeMode: true,
    spaceBetween: 20,
    slidesPerView: 2.5
})
const swiper6 = new Swiper('.swiperFurniture2', {
    freeMode: true,
    spaceBetween: 25,
    slidesPerView: 1.3
})
const swiper7 = new Swiper('.swiperFurniture3', {
    freeMode: true,
    spaceBetween: 25,
    slidesPerView: 1
})

// swiperFurniture2
const swiper2 = new Swiper('.salesHit__swiper', {
    navigation: {
        nextEl: '.pag__next',
        prevEl: '.pag__prev',
        clickable: true
    },


    breakpoints: {
        360: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        1080: {
            slidesPerView: 3,
            spaceBetween: 26,
        },
        1730: {
            slidesPerView: 4,
            spaceBetween: 37,
        }
    },

    autoplay: {
        delay: 2000,
    },

});
const swiper3 = new Swiper('.reviews__swiper', {
    navigation: {
        nextEl: '.pag__next',
        prevEl: '.pag__prev',
        clickable: true
    },
    slidesPerView: 2,
    spaceBetween: 40,
    breakpoints: {
        360: {
            slidesPerView: 1
        },
        780: {
            slidesPerView: 2,
        }
    },
    pagination: {
        el: '.swiper-pag',

        type: 'custom',
        clickable: true,

        renderCustom: function (swiper1, current, total) {
            return current + ' из ' + total;
        }
    },

    autoplay: {
        delay: 2000,
    },

});
let furNames1 = [...document.querySelectorAll('.furniture__namesSwiper li')]
let furNames = [...document.querySelectorAll('.furniture__names ul li')]
let furItems = [...document.querySelectorAll('.furnitures_wrapper > div')]

furNames1.forEach((element, index) => {
    element.addEventListener('click', function () {
        furNames1.forEach((el, i) => {
            el.classList.remove('fur-active')
            furItems[i].classList.remove('furniture-active')
        })
        element.classList.add('fur-active')
        furItems[index].classList.add('furniture-active')
    })
})

furNames.forEach((element, index) => {
    element.addEventListener('click', function () {
        furNames.forEach((el, i) => {
            el.classList.remove('fur-active')
            furItems[i].classList.remove('furniture-active')
        })
        element.classList.add('fur-active')
        furItems[index].classList.add('furniture-active')
    })
})
const hotel = document.querySelector('#hotels')
const hotelBlock = document.querySelector('.hotel__hover')
const popUp1 = document.querySelector('.takeBackCall__mother')
const popUpBut2 = document.querySelector('.backcall__mobile')
const popup1But = document.querySelector('.header__backcall span')
const popUp1Close = document.querySelector('#takeBackCall__close')
const burgerMenu1 = document.querySelector('.burgerMenu1')
const burger__menuIcon = document.querySelector('.burger__menuIcon')
burger__menuIcon.addEventListener('click', function () {
    burgerMenu1.classList.add('displayBlock')
})
document.body.onclick = function (e) {
    if (e.target.localName == 'svg' || e.target.className == 'burger__menuIcon') {
        return 0

    }
    else {
        burgerMenu1.classList.remove('displayBlock')

    }
}
popUpBut2.addEventListener('click', function () {
    popUp1.classList.add('displayFlex')
    document.body.classList.add('overflow__hiden')
})
popup1But.addEventListener('click', function () {
    popUp1.classList.add('displayFlex')
    document.body.classList.add('overflow__hiden')
})
popUp1Close.addEventListener('click', function () {
    popUp1.classList.remove('displayFlex')
    document.body.classList.remove('overflow__hiden')
})