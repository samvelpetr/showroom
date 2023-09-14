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

    // autoplay: {
    //     delay: 2000,
    // },

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

const header__icon2 = document.querySelector('.header__icon2')
const favoritePopUp__mother = document.querySelector('.favoritePopUp__mother')
const closePopUp1 = document.querySelector('.closePopUp1')
header__icon2.onclick = function () {
    favoritePopUp__mother.classList.add('displayBlock')
}
closePopUp1.onclick = function () {
    favoritePopUp__mother.classList.remove('displayBlock')

}





const forPartners__mother = document.querySelector('.forPartners__mother')
const forPartners__close = document.querySelector('#forPartners__close')

const forPartnersBut = document.querySelectorAll('.forPartnersBut')
try {
    forPartnersBut[0].onclick = function () {
        forPartners__mother.classList.add('displayFlex')
    }
    forPartnersBut[1].onclick = function () {
        forPartners__mother.classList.add('displayFlex')
    }

    forPartnersBut[2].onclick = function () {
        forPartners__mother.classList.add('displayFlex')
    }


    forPartners__close.onclick = function () {
        forPartners__mother.classList.remove('displayFlex')
    }

} catch (error) {

}
const creditBut2 = document.querySelectorAll('p.credit')

const credit__mother = document.querySelector('.credit__mother')
const creditPopUpBut = document.querySelectorAll('.creditPopUpBut')
const paymentPopUp__mother = document.querySelector('.paymentPopUp__mother')
const closePopUp3 = document.querySelector('.closePopUp3')
const closePopUp4 = document.querySelector('.closePopUp4')
const paymentPopUpBut = document.querySelector('.paymentPopUpBut')
const delivery__conditions=document.querySelectorAll('.delivery__conditions')

try {

    creditBut2[0].onclick = function () {
        // alert('helo')
        credit__mother.classList.add('displayFlex')
    }
    creditBut2[1].onclick = function () {
        // alert('helo')
        credit__mother.classList.add('displayFlex')
    }
} catch (err) { }
try {
    creditPopUpBut[0].onclick = function () {
        credit__mother.classList.add('displayFlex')
    }
    creditPopUpBut[1].onclick = function () {
        credit__mother.classList.add('displayFlex')
    }
    creditPopUpBut[2].onclick = function () {
        credit__mother.classList.add('displayFlex')
    }
    creditPopUpBut[3].onclick = function () {
        credit__mother.classList.add('displayFlex')
    }
    closePopUp4.onclick = function () {

        credit__mother.classList.remove('displayFlex')

    }

    paymentPopUpBut.onclick = function () {
        paymentPopUp__mother.classList.add('displayFlex')
    }

    closePopUp3.onclick = function () {

        paymentPopUp__mother.classList.remove('displayFlex')

    }

} catch (error) {

}








const furnitureToOrderBut = document.querySelectorAll('.furnitureToOrderBut')
const furnitureToOrder__mother = document.querySelector('.furnitureToOrder__mother');
const furnitureOrder__close = document.querySelector('#furnitureOrder__close')
try {
    furnitureOrder__close.onclick = function () {
        document.body.classList.remove('overflow__hiden')

        furnitureToOrder__mother.classList.remove('displayFlex')
    }
    furnitureToOrderBut[0].onclick = function () {
        document.body.classList.add('overflow__hiden')
        furnitureToOrder__mother.classList.add('displayFlex')
    }
    furnitureToOrderBut[1].onclick = function () {
        furnitureToOrder__mother.classList.add('displayFlex')
    }
    furnitureToOrderBut[2].onclick = function () {
        furnitureToOrder__mother.classList.add('displayFlex')
    }


} catch (error) {

}
const header__icon3 = document.querySelector('.header__icon3')
const basketPopUp__mother = document.querySelector('.basketPopUp__mother')
const closePopUp2 = document.querySelector('.closePopUp2')
try {
    header__icon3.onclick = function () {
        basketPopUp__mother.classList.add('displayBlock')
    }
    closePopUp2.onclick = function () {
        basketPopUp__mother.classList.remove('displayBlock')

    }

} catch (error) {

}

let furNames1 = [...document.querySelectorAll('.furniture__namesSwiper li')]
let furNames = [...document.querySelectorAll('.furniture__names ul li')]
let furItems = [...document.querySelectorAll('.furnitures_wrapper > div')]
try {

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
} catch (error) {

}
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
const deliveryPopUp__mother = document.querySelector('.deliveryPopUp__mother')
const deliveryPopUpBut = document.querySelector('.deliveryPopUpBut')
const closePopUp5 = document.querySelector('.closePopUp5')



try {
    delivery__conditions[0].onclick = function () {
        deliveryPopUp__mother.classList.add('displayFlex')
    
    }
    delivery__conditions[1].onclick = function () {
        paymentPopUp__mother.classList.add('displayFlex')
    
    }
} catch (error) {
    
}


const buyClickPopUp__mother = document.querySelector('.buyClickPopUp__mother')

const buyClickPopUp__close = document.querySelector('#buyClickPopUp__close')

const product__buy1click = document.querySelector('.product__buy1click')
deliveryPopUpBut.onclick = function () {
    deliveryPopUp__mother.classList.add('displayFlex')

}
closePopUp5.onclick = function () {
    deliveryPopUp__mother.classList.remove('displayFlex')
}


try {
    buyClickPopUp__close.onclick = function () {
        buyClickPopUp__mother.classList.remove('displayFlex')

    }
    product__buy1click.onclick = function () {

        buyClickPopUp__mother.classList.add('displayFlex')
    }




} catch (error) {

}
const furnitureToOrder__mother2 = document.querySelector('.furnitureToOrder__mother2')
const furnitureOrder__close2 = document.querySelector('#furnitureOrder__close2')
const individualPrice = document.querySelectorAll('.individualPrice')
try {
    individualPrice[0].onclick = function (params) {
        furnitureToOrder__mother2.classList.add('displayFlex')
    }
    individualPrice[1].onclick = function (params) {
        furnitureToOrder__mother2.classList.add('displayFlex')
    }
    furnitureOrder__close2.onclick = function (params) {
        furnitureToOrder__mother2.classList.remove('displayFlex')

    }

} catch (error) {

}
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


const radioElement = [...document.querySelectorAll('.radioElement')].splice(0, 4)
const radio = [...document.querySelectorAll('.radioElement input')].splice(0, 4)
const radioElement3 = [...document.querySelectorAll('.delivery__payment__method .radioElement')]

const radio3 = [...document.querySelectorAll('.delivery__payment__method .radioElement input')]

const radioElement1 = [...document.querySelectorAll('.radioELement1')]
const radio1 = [...document.querySelectorAll('.radioELement1 input')]
try {


    radioElement1.forEach((e, i) => {

        e.addEventListener('click', function () {
            radioElement1.forEach(e =>
                e.classList.remove('radioElement2')
            )
            radio1[i].checked = true
            e.classList.add('radioElement2')

        })
    })
    radioElement3.forEach((e, i) => {

        e.addEventListener('click', function () {
            radioElement3.forEach(e =>
                e.classList.remove('radioElement2')
            )
            radio3[i].checked = true
            e.classList.add('radioElement2')

        })
    })

    radioElement.forEach((e, i) => {

        e.addEventListener('click', function () {
            radioElement.forEach(e =>
                e.classList.remove('radioElement2')
            )
            radio[i].checked = true
            e.classList.add('radioElement2')
            if (i == 2) {
                document.querySelector('.delivery__delInfo').classList.add('displayFlex')
                document.querySelector('.delivery_delHomeInfo').classList.remove('displayFlex')
            } else {
                document.querySelector('.delivery_delHomeInfo').classList.add('displayFlex')

                document.querySelector('.delivery__delInfo').classList.remove('displayFlex')

            }
        })
    })


    const MakeOrder = document.querySelector('#MakeOrder')
    const delivery__mother = document.querySelector('.delivery__mother')
    const closeDel = document.querySelector('.delivery__nameLine a')
    MakeOrder.addEventListener('click', function () {
        delivery__mother.classList.add('displayBlock')
    })
    closeDel.addEventListener('click', function () {
        delivery__mother.classList.remove('displayBlock')

    })
}
catch (error) {
}
const h3ComplectSvg = document.querySelector('.h3Complect svg');

const h3Complect = document.querySelector('.h3Complect');
const imgs = [...document.querySelectorAll('.descriptionUl img')]
try {
    h3Complect.addEventListener('click', function () {
        h3ComplectSvg.classList.toggle('rotate')
        imgs.map(e => {
            e.classList.toggle('displayBlock')
        })
    })

} catch (error) {

}

const descLi = document.querySelectorAll('.descriptionAndChar > ul li')
const desc1 = document.querySelector('.description__part')
const desc2 = document.querySelector('.complectation')
const desc3 = document.querySelector('.reviewsPart')
const descLi2 = [...document.querySelectorAll('.furNameSwiper li')]

const descs = [desc1, desc2, desc3]
descLi.forEach((e, i) => {
    e.addEventListener('click', function () {
        descLi.forEach((el, index) => {
            el.classList.remove('fur-active')
            descs[index].classList.remove('displayFlex')
            descs[index].classList.remove('displayBlock')
        })
        e.classList.add('fur-active')
        if (i == 2) {
            descs[i].classList.add('displayBlock')

        } else {
            descs[i].classList.add('displayFlex')

        }
    })
})

descLi2.forEach((e, i) => {
    e.addEventListener('click', function () {
        descLi2.forEach((el, index) => {
            el.classList.remove('fur-active')
            descs[index].classList.remove('displayFlex')
            descs[index].classList.remove('displayBlock')
        })
        e.classList.add('fur-active')
        if (i == 2) {
            descs[i].classList.add('displayBlock')

        } else {
            descs[i].classList.add('displayFlex')

        }
    })
})

const description4__2 = document.querySelector('#description4__2')
const description4__1 = document.querySelector('#description4__1')
const description4 = document.querySelector('#description4')
try {
    description4__2.addEventListener('click', function () {
        description4__1.classList.toggle('rotate')
        // description4.map(e => {
        description4.classList.toggle('displayBlock')
        // })
    })

} catch (error) {

}