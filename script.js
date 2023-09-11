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

    // autoplay: {
    //     delay: 2000,
    // },


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

    // autoplay: {
    //     delay: 2000,
    // },

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
const hoverIcon = [...document.querySelectorAll('.hoverIcon')].splice(0, 3)
const hoverIcon1 = [...document.querySelectorAll('.hoverIcon')].splice(3)
const modern__hoverItems = [...document.querySelectorAll('.modern__hoverItems')].splice(0, 3)
const modern__hoverItems1 = [...document.querySelectorAll('.modern__hoverItems')].splice(3)

// hoverIcon.forEach((e,i)=>{
//     try {


//     e.addEventListener('mouseover',function(){
//         console.log(true);
//         modern__hoverItems[i].classList.add('displayBlock')
//     })
//     e.addEventListener('mouseout',function(){
//         modern__hoverItems[i].classList.remove('displayBlock')
//     })}catch (error) {

//     }
// })
hoverIcon1.forEach((e, i) => {
    e.addEventListener('click', function () {
        modern__hoverItems1[i].classList.add('displayBlock')

    })
})
document.body.onclick = function (e) {

    try {
        if (e.target.localName == 'svg' || e.target.className == 'burger__menuIcon') {
            return 0

        }


        else {
            burgerMenu1.classList.remove('displayBlock')

        }
        if (e.target.className != 'hoverIcon' || e.target.className != 'modern__hoverItems') {

            modern__hoverItems1[0].classList.remove('displayBlock')
            modern__hoverItems1[1].classList.remove('displayBlock')
            modern__hoverItems1[2].classList.remove('displayBlock')
        }
    } catch (error) {

    }

}
try {
    popUpBut2.addEventListener('click', function () {
        popUp1.classList.add('displayFlex')
        document.body.classList.add('overflow__hiden')
    })
} catch (error) {

}

try {
    popup1But.addEventListener('click', function () {
        popUp1.classList.add('displayFlex')
        document.body.classList.add('overflow__hiden')
    })

} catch (error) {
    
}
try {

    popUp1Close.addEventListener('click', function () {
        popUp1.classList.remove('displayFlex')
        document.body.classList.remove('overflow__hiden')
    })
} catch (error) {

}
const catalog__mobile = document.querySelector('.catalog__mobile')
const catalog__780 = document.querySelector('.catalog__780')
const catalog__360 = document.querySelector('.catalog__360')
const hotelNamesCat = [...document.querySelectorAll('.catalog__780 .hotel__names__main li')]
const hotelBacks = [...document.querySelectorAll('.catalog__open_back_hotel')]
const close__catalog780 = document.querySelector('.close__catalog780')
const close__catalog360 = document.querySelector('.close__catalog360')
const hotelBlocks = [...document.querySelectorAll('.catalog__open_hotels')]
const hotelBlocks1 = [...document.querySelectorAll('.catalog__360 .catalog__open_hotels')]
const hotelNamesCat1 = [...document.querySelectorAll('.catalog__360_mobile2   .hotel__names__main li')]

const hotelBacks1 = [...document.querySelectorAll('.catalog__360 .catalog__open_back_hotel')]
const catalog__360_open = document.querySelector('.catalog__360_open')
const catalog__360_mobile2 = document.querySelector('.catalog__360_mobile2')
const takeBackCall1 = document.querySelector('.catalog__360_mobile1 div span')
const header__block2svg = document.querySelector('.header__block2  .input__svg')
header__block2svg.onclick = function () {
    catalog__360.classList.add('displayBlock')
}
takeBackCall1.onclick = function () {
    popUp1.classList.add('displayFlex')
}
catalog__360_open.onclick = function () {
    catalog__360_mobile2.classList.add('displayBlock')
}


const catalog_mobileBackcall = document.querySelector('.catalog__360_mobile1 > div span')

catalog_mobileBackcall.onclick = function () {
    popUp1.classList.add('displayFlex')
}
burger__menuIcon.onclick = function () {
    catalog__360.classList.add('displayBlock')
}
catalog__mobile.onclick = function () {
    catalog__780.classList.add('displayBlock')
}
close__catalog780.onclick = function () {
    catalog__780.classList.remove('displayBlock')

}
close__catalog360.onclick = function () {
    catalog__360_mobile2.classList.remove('displayBlock')
    catalog__360.classList.remove('displayBlock')

}
console.log(hotelNamesCat1);
try {

    hotelNamesCat1.forEach((e, i) => {
        hotelBacks1[i].addEventListener('click', function () {
            hotelBlocks1[i].classList.remove('displayBlock')

        })
        e.addEventListener('click', function () {
            hotelBlocks1[i].classList.add('displayBlock')
        })
    })
} catch (error) {

}

try {

    hotelNamesCat.forEach((e, i) => {
        hotelBacks[i].addEventListener('click', function () {
            hotelBlocks[i].classList.remove('displayBlock')

        })
        e.addEventListener('click', function () {
            hotelBlocks[i].classList.add('displayBlock')
        })
    })
} catch (error) {

}
