$(document).ready(function () {

    $('[data-wow-delay]').addClass('wow')

    const wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animate__animated', // default
            offset: 0,          // default
            mobile: false,       // default
            live: true,        // default
            scrollContainer: null
        }
    )
    wow.init();
    


    $.fn.setCursorPosition = function (pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };

    $("[type='tel']").click(function () {
        $(this).setCursorPosition(3);
    }).mask("+7(999)999-9999");

    /* mobile menu */
    $(".mobile-menu__burger").click(function () {
        $('body').addClass('no-overflow')
        $(".mobile-menu__dropdown").addClass("mobile-menu__dropdown--active");
    });

    $(".mobile-menu__close").click(function () {
        $('body').removeClass('no-overflow')
        $(".mobile-menu__dropdown").removeClass("mobile-menu__dropdown--active");
    });

    $(".mobile-menu__li--has--children svg").click(function () {
        let $parent = $(this).closest('li')
        $parent.toggleClass("mobile-menu__li--active");
        $parent.next(".mobile-menu__children").toggleClass("mobile-menu__children--active");
    });

    // Плавный скролл к якорю
    $('.ancor').click(function () {
        let anchor = $(this).attr('href')
        $('html, body').animate({
            scrollTop: $(anchor).offset().top - 100
        }, 500)
    });

    // function isElementInViewport(el) {
    //     const rect = el[0].getBoundingClientRect();
    //     return (
    //         rect.top >= 0 &&
    //         rect.left >= 0 &&
    //         rect.bottom <= ($(window).height()) &&
    //         rect.right <= ($(window).width())
    //     );
    // }

    // Запуск счетчика
    // function startCounter() {
    //     const $counter = $('.section-statistics__row');
    //     if ($('.section-statistics__row').length > 0) {
    //         if (isElementInViewport($counter)) {
    //             /*счетчик */
    //             $('.counter').countTo({
    //                 refreshInterval: 50,
    //                 formatter: function (value, options) {
    //                     return value.toLocaleString('ru-RU', { maximumFractionDigits: 0 });
    //                 },
    //             });
    //             // Убираем обработчик скролла, чтобы счетчик запускался один раз
    //             $(window).off('scroll', onScroll);
    //         }
    //     }
    // }

    // // Обработчик события скролла
    // function onScroll() {
    //     startCounter();
    // }
    // $(window).on('scroll', onScroll);


    /* hover on map item */
    $(".section-marafon__region").hover(function () {
        const data_id = $(this).attr("data-target");
        $(`${data_id}`).addClass("path-active");
    }, function () {
        const data_id = $(this).attr("data-target");
        $(`${data_id}`).removeClass("path-active");
    });

    $(".section-marafon__map path").hover(function () {
        $(this).addClass("path-active");
        let target = $(this).attr("id");
        $(`.section-marafon__region[data-target='#${target}'`).addClass("section-marafon__region--active");
        let href = $(`.section-marafon__region[data-target='#${target}'`).attr("href");
        $(this).click(function () {
            if (href) {
                window.location.href = href;
            }
        });

    }, function () {
        $(this).removeClass("path-active");
        let target = $(this).attr("id");
        $(`.section-marafon__region[data-target='#${target}'`).removeClass("section-marafon__region--active");
    });


    console.log($('.slider-quote__item').length)






    if($('.slider-quote__item').length > 1) {
     

        /*quote slider */
        const quoteSlider = new Swiper('.slider-quote', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            slidesPerView: 1,
            autoHeight: true,
            spaceBetween: 0,
            speed: 1000,
            navigation: {
                nextEl: '.section-marafon-page-quote .slider-arrow--next',
                prevEl: '.section-marafon-page-quote .slider-arrow--prev',
            },
            scrollbar: {
                el: '.slider-quote  .slider-scrollbar',

            },

            allowTouchMove: true,


        });

        if (quoteSlider.slides.length <= 1) {
            $(".slider-quote__arrows").css("z-index", "-1");
            $(".slider-quote__arrows").css("opacity", 0);
        }
    } else {
        $('.slider-quote__arrows').hide()
    }


    /*placement slider */
    const placement = new Swiper('.placement-slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3,
        autoHeight: true,
        spaceBetween: 20,
        navigation: {
            nextEl: '.section-placement .slider-arrow--next',
            prevEl: '.section-placement .slider-arrow--prev',
        },
        scrollbar: {
            el: '.placement-slider  .slider-scrollbar',
        },
        allowTouchMove: true,

        breakpoints: {
            0: {
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
                slidesPerView: 1.15,
                navigation: false,
                allowTouchMove: true,
                spaceBetween: 8,
                autoHeight: false,
            },
            576: {
                scrollbar: false,
                slidesPerView: 1,
                spaceBetween: 8,
                autoHeight: false,
            },

            768: {
                scrollbar: false,
                slidesPerView: 2,
                spaceBetween: 16,

            },
            1200: {
                scrollbar: false,
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });

    
    /*placement slider */
    const newSlider = new Swiper('.new-slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        autoHeight: true,
        spaceBetween: 20,
        navigation: {
            nextEl: '.section-new__arrow.slider-arrow--next',
            prevEl: '.section-new__arrow.slider-arrow--prev',
        },
        allowTouchMove: true,
    });

    /*placement slider */
    const mapSlider = new Swiper('.map-slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        autoHeight: true,
        spaceBetween: 20,
        navigation: {
            nextEl: '.section-new__arrow.slider-arrow--next',
            prevEl: '.section-new__arrow.slider-arrow--prev',
        },
        allowTouchMove: true,
    });

    /*tabs */
    $(".section-members__tabs-li").each(function (i, item) {
        if ($(item).hasClass("section-members__tabs-li--active")) {
            let target = $(this).attr("data-target");
            $(target).show();
        }
    });
    $(".section-members__tabs-li").click(function () {
        if ($(this).find("a").length == 0) {


            $(".section-members__tabs-li").each(function (i, item) {
                $(this).removeClass("section-members__tabs-li--active");
            });
            $(".section-members__tabs-body").hide();
            let target = $(this).attr("data-target");
            $(this).addClass("section-members__tabs-li--active");
            $(target).show();
        }
    });

    var photoGallerySwiper = undefined;
    function initGallerySlider() {
        var startX = 0; // Начальная позиция мыши по оси X
        var isDragging = false; // Флаг для определения начала движения
        var isSwiped = false; // Флаг для определения, произошел ли свайп
        var swipeThreshold = 10; // Пороговое значение для определения свайпа
        if (photoGallerySwiper !== undefined && photoGallerySwiper instanceof Swiper) {
            // Если Swiper уже существует, уничтожим его
            photoGallerySwiper.destroy(true, true);
        }

        photoGallerySwiper = new Swiper('.slider-photo-gallery', {
            allowTouchMove: true,
            slidesPerView: 5, // Показываем несколько слайдов одновременно
            spaceBetween: 24, // Отступы между слайдами
            slidesPerGroup: 1,
            centeredSlides: true, // Центрируем активный слайд
            loop: true, // Зацикливаем слайды
            speed: 1000, // Скорость перехода в миллисекундах
            threshold: 1,
            shortSwipes: false,

            grabCursor: true,
            on: {
                slideChange: function () {
                    this.loopFix();
                    updateSlides(this);

                },
                init: function () {
                    updateSlides(this); // Установить начальные стили

                },

                transitionEnd: function () {
                    this.loopFix();  // Принудительно фиксируем положение слайдо
                }
            },

            navigation: {
                nextEl: '.section-photo-gallery .slider-arrow-chevron--next',
                prevEl: '.section-photo-gallery .slider-arrow-chevron--prev',
            },
            breakpoints: {
                0: {
                    allowTouchMove: true,
                    centeredSlides: true,
                    slidesPerView: 3,
                    navigation: false,
                    spaceBetween: 4,
                    loop: true,
                    scrollbar: {
                        el: '.slider-photo-gallery .slider-scrollbar',
                    }
                },
                576: {
                    slidesPerView: 3,
                    navigation: {
                        nextEl: '.section-photo-gallery .slider-arrow-chevron--next',
                        prevEl: '.section-photo-gallery .slider-arrow-chevron--prev',
                    },
                    scrollbar: false
                },


                1024: {
                    lazy: false,
                    loop: true,
                    centeredSlides: true,
                    slidesPerView: 5,
                    spaceBetween: 24,
                    watchSlidesProgress: true,
                    watchSlidesVisibility: true,
                    loopedSlides: 5


                }
            },



        });

        /*
        $('.slider-photo-gallery').on('mousedown touchstart', function (event) {
            startX = event.clientX || event.touches[0].clientX;  // Запоминаем начальную позицию мыши или пальца
            isDragging = true;  // Устанавливаем флаг для начала движения
            isSwiped = false; // Сбрасываем флаг свайпа при начале нового движения
        });

      
        $(document).on('mousemove touchmove', function (event) {
            if (!isDragging) return; // Если не происходит свайпа, не выполняем код

            var currentX = event.clientX || event.touches[0].clientX;  // Текущая позиция мыши или пальца
            var diffX = startX - currentX; // Разница между начальной и текущей точками

            // Если мышь сдвинулась более чем на 10px влево или вправо
            if (Math.abs(diffX) > swipeThreshold) {
                isSwiped = true; // Устанавливаем флаг, что свайп произошел
                if (diffX > 0) {
                    photoGallerySwiper.slideNext();  // Свайп вправо (переключаем на следующий слайд)
                } else {
                    photoGallerySwiper.slidePrev();  // Свайп влево (переключаем на предыдущий слайд)
                }
                isDragging = false; // Останавливаем обработку после одного свайпа
            }
        });

    
        $(document).on('mouseup touchend', function () {
            isDragging = false; // Сбрасываем флаг движения мыши
        });

        // Обработчик клика по активному слайду
        $('.slider-photo-gallery').on('click', '.swiper-slide', function (event) {
            if (isSwiped) {
                // Если произошел свайп, не выполняем действие клика
                event.preventDefault(); // Отменяем действие клика
                return; // Выходим из функции
            }
            // Проверяем, является ли текущий слайд активным
            var activeIndex = photoGallerySwiper.activeIndex; // Получаем индекс активного слайда
            var currentIndex = $(this).index(); // Получаем индекс текущего слайда
            if (currentIndex === activeIndex) {
                let src = $(this).attr("href");
                let allImage = $(".slider-photo-gallery__item");
                let objectsShow = [];
                objectsShow.push({ src: src, type: 'image' });
                allImage.each(function (i, item) {
                    objectsShow.push({ src: $(item).attr("href"), type: 'image' });
                });
                Fancybox.show(objectsShow);
            }
        });
         */
    }

    if (hasSliderOnPage(".slider-photo-gallery")) {
        initGallerySlider();
    }


    Fancybox.bind("[data-fancybox]", {
        iframe : {
            css : {
                width : '600px'
            }
        }
    });



    $(".slider-photo-gallery").on('mouseenter', '.slider-photo-gallery__item.swiper-slide-active', function () {
        $(".slider-photo-gallery__item.scale-2").addClass("slider-photo-gallery__item--change-height");
        $(".slider-photo-gallery__item.scale-3").addClass("slider-photo-gallery__item--change-height");
    });
    $(".slider-photo-gallery").on("click", ".slider-photo-gallery__item.swiper-slide-active", function () {
        let src = $(this).attr("href");
        let allImage = $(".slider-photo-gallery__item");
        let objectsShow = [];
        objectsShow.push({ src: src, type: 'image' });
        allImage.each(function (i, item) {
            objectsShow.push({ src: $(item).attr("href"), type: 'image' });
        });
        Fancybox.show(objectsShow);
    });



    function updateSlides(swiper) {
        if (swiper == undefined) {
            return false;
        }


        const slides = swiper.slides;
        const activeIndex = swiper.activeIndex;

        // Очищаем все слайды от классов
        if (slides.length > 0) {
            slides.forEach((slide) => {
                slide.classList.remove('scale-1', 'scale-2', 'scale-3', 'slider-photo-gallery__item--change-height');
            });
        }

        // Применяем классы масштабирования к слайдам вокруг активного
        if (!window.matchMedia("(max-width: 1024px)").matches) {

            const totalSlides = slides.length;
            slides[activeIndex % totalSlides].classList.add('scale-1'); // Центральный
            slides[(activeIndex - 1 + totalSlides) % totalSlides].classList.add('scale-2'); // Левый
            slides[(activeIndex + 1) % totalSlides].classList.add('scale-2'); // Правый
            slides[(activeIndex - 2 + totalSlides) % totalSlides].classList.add('scale-3'); // Дальний левый
            slides[(activeIndex + 2) % totalSlides].classList.add('scale-3'); // Дальний правый
        } else {
            const totalSlides = slides.length;
            slides[activeIndex % totalSlides].classList.add('scale-1'); // Центральный
            slides[(activeIndex - 1 + totalSlides) % totalSlides].classList.add('scale-2'); // Левый
            slides[(activeIndex + 1) % totalSlides].classList.add('scale-2'); // Правый

        }
    }



    var sliderStreamSwiper = new Swiper('.slider-stream', {
        slidesPerView: 1, // Показываем несколько слайдов одновременно
        spaceBetween: 0, // Отступы между слайдами
        centeredSlides: true, // Центрируем активный слайд
        loop: true,
        allowTouchMove: true,
        speed: 1000,
        breakpoints: {
            0: {
                loop: true,
                allowTouchMove: true,
                scrollbar: {
                    el: '.slider-scrollbar',

                },
                navigation: false

            },

            576: {
                scrollbar: false,
                allowTouchMove: true,
                navigation: {
                    nextEl: '.section-stream .slider-arrow--next',
                    prevEl: '.section-stream .slider-arrow--prev',
                },
            }
        }

    })


    $('.slider-stream__item-play').on('click', function () {
        let videoURL = $(this).next('iframe').attr('src');
        if (videoURL.indexOf('autoplay=1') === -1) {
            $(this).next('iframe').attr('src', videoURL + '?autoplay=1'); // Добавляем параметр autoplay
        }
    });



function updateClassNews(swiper) {
    swiper.slides.forEach(slide => {
        slide.classList.remove('section-news__item--large-slide', 'section-news__item--small-slide', 'section-news__item--revert-slide', 'section-news__item--before-revert-slide');
    });
    const activeSlide = swiper.slides[swiper.activeIndex];
    activeSlide.classList.add('section-news__item--large-slide');
    swiper.slides[(swiper.activeIndex + 2)].classList.add("section-news__item--before-revert-slide");
    swiper.slides[(swiper.activeIndex + 1)].classList.add("section-news__item--revert-slide");
    for (let i = 1; i <= 3; i++) {
        const nextSlide = swiper.slides[(swiper.activeIndex + i) % swiper.slides.length];
        nextSlide.classList.add('section-news__item--small-slide');
    }
}

if($(window).width() > 768) {
    /* news slider */
    let swiperContainerNews = $('.slider-news');
    let slidesNews = swiperContainerNews.find('.swiper-slide');
    let minSlides = 5;
    let $loop;

    if(slidesNews.length > 4) {
        if (slidesNews.length < minSlides) {
            var slidesToDuplicate = minSlides - slidesNews.length;
            for (var i = 0; i < slidesToDuplicate; i++) {
                slidesNews.eq(i % slidesNews.length).clone().appendTo(".slider-news .swiper-wrapper"); // Клонируем и добавляем
            }
        }
        $loop = true;
        $('.section-news__arrows').show()
        $('.slider-news').removeClass('no-slide')
    } else if(slidesNews.length == 4) {
        if (slidesNews.length < minSlides) {
            var slidesToDuplicate = minSlides - slidesNews.length;
            for (var i = 0; i < slidesToDuplicate; i++) {
                slidesNews.eq(i % slidesNews.length).clone().appendTo(".slider-news .swiper-wrapper"); // Клонируем и добавляем
            }
        }
        $loop = true;
        $('.section-news__arrows').show()
        $('.slider-news').removeClass('no-slide')
    } else if(slidesNews.length == 3 && $(window).width() <= 1200) {
        if (slidesNews.length < minSlides) {
            var slidesToDuplicate = minSlides - slidesNews.length;
            for (var i = 0; i < slidesToDuplicate; i++) {
                slidesNews.eq(i % slidesNews.length).clone().appendTo(".slider-news .swiper-wrapper"); // Клонируем и добавляем
            }
        }
        $loop = true;
        $('.section-news__arrows').show()
        $('.slider-news').removeClass('no-slide')
    } else if(slidesNews.length == 2 && $(window).width() <= 1080) {
        if (slidesNews.length < minSlides) {
            var slidesToDuplicate = minSlides - slidesNews.length;
            for (var i = 0; i < slidesToDuplicate; i++) {
                slidesNews.eq(i % slidesNews.length).clone().appendTo(".slider-news .swiper-wrapper"); // Клонируем и добавляем
            }
        }
        $loop = true;
        $('.section-news__arrows').show()
        $('.slider-news').removeClass('no-slide')
    } else if(slidesNews.length == 4 && $(window).width() > 1200){
        $loop = false;
        $('.section-news__arrows').hide()
        $('.slider-news').addClass('no-slide')
    } else if(slidesNews.length == 3 && $(window).width() > 1080) {
        $loop = false;
        $('.section-news__arrows').hide()
        $('.slider-news').addClass('no-slide-3')
    }

    const newsSlider = new Swiper('.slider-news', {
        slidesPerView: 4,
        autoHeight: false,
        spaceBetween: 20,
        allowTouchMove: true,
        speed: 1000,
        loop: $loop,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.section-news__btns .slider-arrow--next',
            prevEl: '.section-news__btns  .slider-arrow--prev',
        },
        on: {
            slideChange: function () {
                updateClassNews(this);
            },
        }
    })

} else {
    $('.slider-news').removeClass('no-slide')
    const newsSlider = new Swiper('.slider-news', {
        slidesPerView: 1,
        autoHeight: false,
        spaceBetween: 20,
        allowTouchMove: true,
        speed: 1000,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.section-news__btns .slider-arrow--next',
            prevEl: '.section-news__btns  .slider-arrow--prev',
        }
    })
}


    /*Партнер слайдеры */
    const partner_slider_1 = new Swiper('.section-brands__row--first', {
        loop: true,
        allowTouchMove: false,
        slidesPerView: 7, // показывать несколько слайдов одновременно
        spaceBetween: 20,
        autoplay: {
            delay: 0, // Задержка между слайдами
            disableOnInteraction: false,

        },
        speed: 8000,
        grabCursor: true,

        breakpoints: {
            0: {
                slidesPerView: 3.2,
                spaceBetween: 8,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 8,
            },
            1200: {
                slidesPerView: 7,
                spaceBetween: 20,
            }
        }

    });


    var swiperNew = new Swiper('.swiper-new', {
        centeredSlides: true,
        slidesPerView: 7,
        loop: true,
        navigation: {
            nextEl: '.slider-arrow-chevron--next',
            prevEl: '.slider-arrow-chevron--prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
            },
            768: {
                slidesPerView: 7,
            },
        }
    });

    $('.section-photo-gallery').on('click', '.swiper-slide-test.swiper-slide-next', function () {
        $('.slider-arrow-chevron--next').trigger('click')
    })
    $('.section-photo-gallery').on('click', '.swiper-slide-test.swiper-slide-prev', function () {
        $('.slider-arrow-chevron--prev').trigger('click')
    })
    

    const partner_slider_2 = new Swiper('.section-brands__row--second', {
        loop: true,
        allowTouchMove: false,
        slidesPerView: 7, // показывать несколько слайдов одновременно
        spaceBetween: 20,
        autoplay: {
            delay: 0, // Задержка между слайдами
            reverseDirection: true, // Прокрутка слева направо
            disableOnInteraction: false
        },
        speed: 8000,
        grabCursor: true,
        breakpoints: {
            0: {
                slidesPerView: 3.2,
                spaceBetween: 8,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 8,
            },
            1200: {
                slidesPerView: 7,
                spaceBetween: 20,
            }
        }
    });



    // Функция, которая добавляет класс к первому видимому слайду
    // Функция для увеличения первого видимого слайда
    function resizeFirstVisibleSlide(swiper) {
        // Удаляем класс 'large' со всех слайдов
        swiper.slides.forEach(slide => slide.classList.remove('large'));

        // Получаем первый видимый слайд
        const firstVisibleSlide = swiper.slides[swiper.activeIndex];

        // Добавляем класс 'large' к первому слайду
        firstVisibleSlide.classList.add('large');
    }

    function updateSlideSizes(swiper) {
        // Удаляем классы с всех слайдов

        swiper.slides.forEach(slide => {
            slide.classList.remove('active-slide', 'large-slide');
        });

        // Получаем индекс текущего активного слайда
        const activeIndex = swiper.activeIndex;

        // Добавляем классы к активному слайду
        swiper.slides[activeIndex].classList.add('active-slide');

        // Увеличиваем первый, второй и четвертый слайды
        const indicesToEnlarge = [0, 1, 3]; // Индексы для увеличения

        indicesToEnlarge.forEach(index => {
            if (index < swiper.slides.length && index !== activeIndex) { // Проверяем, что индекс не выходит за границы
                swiper.slides[index].classList.add('large-slide');
            }
        });
    }


    /*Устанавливаем дату*/


    // Функция для правильного склонения слов в зависимости от числа
    function getCorrectWordForm(number, forms) {
        number = Math.abs(number) % 100;
        const n1 = number % 10;
        if (number > 10 && number < 20) {
            return forms[2];
        }
        if (n1 > 1 && n1 < 5) {
            return forms[1];
        }
        if (n1 === 1) {
            return forms[0];
        }
        return forms[2];
    }
    const endDate = new Date($(".main-banner__time").attr("data-time")).getTime();

    // Функция для обновления таймера каждую секунду
    const countdown = setInterval(function () {
        const now = new Date().getTime();
        const timeLeft = endDate - now;

        // Расчет времени
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        // Получение правильных форм слов
        const dayLabel = getCorrectWordForm(days, ['день', 'дня', 'дней']);
        const hourLabel = getCorrectWordForm(hours, ['час', 'часа', 'часов']);
        const minuteLabel = getCorrectWordForm(minutes, ['минута', 'минуты', 'минут']);

        // Вывод значений в HTML
        $(".main-banner__time-item").eq(0).find("span").eq(0).text(days);
        $(".main-banner__time-item").eq(1).find("span").eq(0).text(hours);
        $(".main-banner__time-item").eq(2).find("span").eq(0).text(minutes);

        //* Вывод форм слов */
        // Вывод значений в HTML
        $(".main-banner__time-item").eq(0).find("span").eq(1).text(dayLabel);
        $(".main-banner__time-item").eq(1).find("span").eq(1).text(hourLabel);
        $(".main-banner__time-item").eq(2).find("span").eq(1).text(minuteLabel);


        // Если таймер истек
        if (timeLeft < 0) {
            clearInterval(countdown);
            $(".main-banner__time").innerHTML = "Время истекло!";
        }
    }, 1000);


    function debounce(func, wait) {
        let timeout;

        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }


    /*faq tabs */

    $(".section-faq__answer").each(function (i, item) {
        if ($(item).hasClass("section-faq__answer--active")) {
            $(this).find(".section-faq__answer-text").stop(true, true).slideDown(300);
        }
    });
    $(".section-faq__answer-name").click(function () {

        let parent = $(this).parents(".section-faq__answer");
        if ($(parent).hasClass("section-faq__answer--active")) {
            $(parent).removeClass("section-faq__answer--active");
            $(parent).find(".section-faq__answer-text").stop(true, true).slideUp(300);
            return false;
        }
        $(".section-faq__answer").removeClass("section-faq__answer--active");
        $(".section-faq__answer").find(".section-faq__answer-text").stop(true, true).slideUp(300);
        $(parent).addClass("section-faq__answer--active");
        $(parent).find(".section-faq__answer-text").stop(true, true).slideDown(300);
    });


    /*marque */

    /*page forum show more */
    $(".forum-text-block__collapse").click(function () {
        if ($(this).parents(".forum-text-block").find(".forum-text-block__inner").hasClass("forum-text-block__inner--expanded")) {
            $(this).text("Подробнее");
        }
        else {
            $(this).text("Свернуть");
        }
        $(this).parents(".forum-text-block").find(".forum-text-block__inner").toggleClass("forum-text-block__inner--expanded");
    });

    /*rezize */
    $(window).resize(function () {
        // updateSwiper();
        if (photoGallerySwiper !== undefined) {
            if (photoGallerySwiper && typeof photoGallerySwiper.destroy === 'function') {
                photoGallerySwiper.destroy(true, true);
                photoGallerySwiper = null;
            }
            setTimeout(function () {
                if (hasSliderOnPage(".slider-photo-gallery")) {
                    initGallerySlider();
                }
            }, 300);

        }
        else {
            if (hasSliderOnPage(".slider-photo-gallery")) {
                initGallerySlider();
            }
        }
    })


    function hasSliderOnPage(swiperSelector) {
        return $(swiperSelector).length > 0;
    }




    // Показывать кнопку при прокрутке вниз
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.btn-upper').fadeIn();
        } else {
            $('.btn-upper').fadeOut();
        }


        var scroll = $(window).scrollTop();
        var headerHeight = $('.header').outerHeight(); // Получаем высоту шапки

        if (scroll >= headerHeight) {
            // $("body").css("padding-top", headerHeight + "px")
            // $('.header').addClass('fixed');
            $('.header').addClass('sticky');
        } else {
            // $("body").css("padding-top", 0)
            // $('.header').removeClass('fixed');
            $('.header').removeClass('sticky');
        }
    });



    // Плавная прокрутка вверх при клике
    $('.btn-upper').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 300); // 600 - длительность анимации в миллисекундах
        return false;
    });
    /*dots menu */

    /*close popup */
    $(".popup-come-out__close").click(function () {
        $(".popup-come-out").removeClass("popup-come-out--active");
    });
    $(".btn-trigger-popup").click(function () {
        let idPopup=$(this).attr("data-id-popup");
        $(idPopup).addClass("popup-come-out--active");
    });


    // плейсхолдер
    $('input, textarea').on('focusout', function () {
        let $masktel = /(^(?!\+.*\(.*\).*--.*$)(?!\+.*\(.*\).*-$)(\+[0-9]{1,3}\([0-9]{1,3}\)[0-9]{1}([-0-9]{0,8})?([0-9]{0,1})?)$)|(^[0-9]{1,4}$)/
        $(this).val() != '' ? $(this).closest('.fieldset').addClass('not-empty') : $(this).closest('.fieldset').removeClass('not-empty')
        if($(this).attr('type') == 'tel' && !$masktel.test($(this).val())) {
            $(this).closest('.fieldset').removeClass('not-empty')
        }
    })
    // валидация
    $('input, textarea').on('focusout', function () {
        let $this = $(this)
        let $val = $this.val()
        let $parent = $this.closest('.fieldset')
        let $masktel = /(^(?!\+.*\(.*\).*--.*$)(?!\+.*\(.*\).*-$)(\+[0-9]{1,3}\([0-9]{1,3}\)[0-9]{1}([-0-9]{0,8})?([0-9]{0,1})?)$)|(^[0-9]{1,4}$)/
        let $name = /^([A-Za-z][A-Za-z\-\']{1,50})|([А-ЯЁIЇҐЄа-яёіїґє][А-ЯЁIЇҐЄа-яёіїґє\-\']{1,50})$/
        let $email = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
        function _valid($parent) {
            $parent.removeClass('fieldset--error').addClass('fieldset--valid')
        }
        function _noValid($parent) {
            $parent.addClass('fieldset--error')
        }
        if($parent.hasClass('fieldset--required')) {
            if($parent.hasClass('fieldset--tel')) {
                $masktel.test($val) ? _valid($parent) : _noValid($parent)
            } else if($parent.hasClass('fieldset--email')) {
                $email.test($val) ? _valid($parent) : _noValid($parent)
            } else if($parent.hasClass('fieldset--name')) {
                $name.test($val) ? _valid($parent) : _noValid($parent)
            } else {
                $val != '' ? _valid($parent) : _noValid($parent)
            }
        }
    })
    $(':checkbox').change(function() {
        let $checked = $(this).prop('checked')
        let $parent = $(this).closest('.fieldset')
        $checked ?  $parent.removeClass('fieldset--error').addClass('fieldset--valid') : $parent.addClass('fieldset--error')
    });
    
    $('.placeholder').click(function () {
        $(this).prev().focus()
    })

    // сабмит
    $('form').on('submit', function(e) {
        e.preventDefault()
        let $form = $(this)
        let $required = $form.find('.fieldset--required').length
        let $valid = $form.find('.fieldset--valid').length
        if($required == $valid) {
            alert('submit')
        } else {
            $form.find('.fieldset--required').not('.fieldset--valid').addClass('fieldset--error').eq(0).find('input').focus()
        }
    })


    $(document).click(function (event) {

        var $target = $(event.target);

        // Проверяем, что клик произошел не по элементу или его дочерним элементам
        if (!$target.closest('.header__menu__dots').length && $('.header__menu__dots').is(':visible')) {
            $('.header__menu__dots').find(".header-dropdown__overlay").removeClass("header-dropdown__overlay--active"); // Скрываем блок
        }

        // Проверяем, был ли клик вне всплывающего окна и не по кнопке показа
        if (!$('.popup-come-out__inner').is(event.target) && $('.popup-come-out__inner').has(event.target).length === 0){
            if(!$(".btn-trigger-popup").is(event.target) && $(".btn-trigger-popup").has(event.target).length === 0){
                $(".popup-come-out").removeClass("popup-come-out--active"); 
            }
        } 
          
        
    });

 

    $(".header__menu__dots-icons").click(function (e) {
        $(this).parents(".header__menu__dots").find(".header-dropdown__overlay").toggleClass("header-dropdown__overlay--active");
    });
    $(".header-menu__li--is_dropdown").hover(function () {
        $(".header__menu__dots-icons").parents(".header__menu__dots").find(".header-dropdown__overlay").removeClass("header-dropdown__overlay--active");
    });

});
function _intersectionTime() {
    const inPairs = (xs) => xs .slice (1) .map ((x, i) => [xs [i], x])
    const uniq = (xs) => [... new Set (xs)]
    const overlaps = (events) =>
    inPairs (uniq (events .flatMap ((w) => [w .startDate, w .endDate])) .sort ())
        .map (([start, end]) => ({
            start, 
            end, 
            events: events.filter (e => e .startDate < end && e.endDate > start) .map (e => e .id) 
        }))
        .filter (({events}) => events .length > 1)
    
    let meetings = []

    let mergeMeetings = []
    let i = 0
    $('.section-program__item--register').each(function () {
        i++
        $time = {
                id: $(this).attr('data-id'),
                startDate: $(this).attr('data-start'),
                endDate: $(this).attr('data-end')
        }
        meetings.push($time)
    })

    const conflicts = overlaps(meetings) 
    
    conflicts.forEach(function (e) {
      mergeMeetings = mergeMeetings.concat(e.events)
    })

    if(mergeMeetings.length) {
        $('.section-program__message--intersection').show()
        $('.section-program').addClass('section-program--intersection')
    } else {
        $('.section-program__message--intersection').hide()
        $('.section-program__item--register').removeClass('except')
        $('.section-program').removeClass('section-program--intersection')
    } 

    mergeMeetings.forEach(function (e) {
        $('.section-program__item--register[data-id="' + e + '"]').addClass('except')
    })
}
$(document).ready(
    _intersectionTime()
)

$('.jsRefuseReg').click(function () {
    $(this).closest('.section-program__item').removeClass('section-program__item--register').removeClass('except')
    _intersectionTime()

    if($(this).closest('.section-program').hasClass('jsMyProgramm')) {
        $(this).closest('.section-program__item').hide()
    }
})
$('.jsReg').click(function () {
    $(this).closest('.section-program__item').addClass('section-program__item--register')
    _intersectionTime()
})

$('.jsShowMyEvent').click(function () {
    $(this).removeClass('btn-secondary').addClass('btn-primary')
    $('.jsShowAllEvent').removeClass('btn-primary').addClass('btn-secondary')
    $('.section-program__item').not('.section-program__item--register').hide()
    $('.section-program__list').hide()
    $('.section-program__item--register').each(function () {
        $(this).closest('.section-program__list').show()
    })
    $('.section-program').addClass('jsMyProgramm')
})
$('.jsShowAllEvent').click(function () {
    $(this).removeClass('btn-secondary').addClass('btn-primary')
    $('.jsShowMyEvent').removeClass('btn-primary').addClass('btn-secondary')
    $('.section-program__item').show()
    $('.section-program__list').show()
    $('.section-program').removeClass('jsMyProgramm')
})

// // Драг без полосы прокрутки. При необходимости динамического добавления класса вызвать dragscroll.reset()
// $(function (root, factory) {
//     if (typeof define === 'function' && define.amd) {
//         define(['exports'], factory);
//     } else if (typeof exports !== 'undefined') {
//         factory(exports);
//     } else {
//         factory((root.dragscroll = {}));
//     }
// }(this, function (exports) {
//     var _window = window;
//     var _document = document;
//     var mousemove = 'mousemove';
//     var mouseup = 'mouseup';
//     var mousedown = 'mousedown';
//     var EventListener = 'EventListener';
//     var addEventListener = 'add' + EventListener;
//     var removeEventListener = 'remove' + EventListener;
//     var newScrollX, newScrollY;

//     var dragged = [];
//     var reset = function (i, el) {
//         for (i = 0; i < dragged.length;) {
//             el = dragged[i++];
//             el = el.container || el;
//             el[removeEventListener](mousedown, el.md, 0);
//             _window[removeEventListener](mouseup, el.mu, 0);
//             _window[removeEventListener](mousemove, el.mm, 0);
//         }

//         dragged = [].slice.call(_document.getElementsByClassName('dragscroll'));
//         for (i = 0; i < dragged.length;) {
//             (function (el, lastClientX, lastClientY, pushed, scroller, cont) {
//                 (cont = el.container || el)[addEventListener](
//                     mousedown,
//                     cont.md = function (e) {
//                         if (!el.hasAttribute('nochilddrag') ||
//                             _document.elementFromPoint(
//                                 e.pageX, e.pageY
//                             ) == cont
//                         ) {
//                             pushed = 1;
//                             lastClientX = e.clientX;
//                             lastClientY = e.clientY;

//                             e.preventDefault();
//                         }
//                     }, 0
//                 );

//                 _window[addEventListener](
//                     mouseup, cont.mu = function () { pushed = 0; }, 0
//                 );

//                 _window[addEventListener](
//                     mousemove,
//                     cont.mm = function (e) {
//                         if (pushed) {
//                             (scroller = el.scroller || el).scrollLeft -=
//                                 newScrollX = (- lastClientX + (lastClientX = e.clientX));
//                             scroller.scrollTop -=
//                                 newScrollY = (- lastClientY + (lastClientY = e.clientY));
//                             if (el == _document.body) {
//                                 (scroller = _document.documentElement).scrollLeft -= newScrollX;
//                                 scroller.scrollTop -= newScrollY;
//                             }
//                         }
//                     }, 0
//                 );
//             })(dragged[i++]);
//         }
//     }


//     if (_document.readyState == 'complete') {
//         reset();
//     } else {
//         _window[addEventListener]('load', reset, 0);
//     }
//     exports.reset = reset;
// }));

$(function () {
    $('.faq__title').click(function () {
        if(!$(this).closest('.faq__item').hasClass('faq__item--active')) {
            $('.faq__item').removeClass('faq__item--active').find('.faq__descr').slideUp(350)
            $(this).next().slideDown(350).closest('.faq__item').addClass('faq__item--active')
        } else {
            $('.faq__item').removeClass('faq__item--active').find('.faq__descr').slideUp(350)
        }
    })

    $('.section-hotel__inner iframe').attr('height', ($('.section-hotel__col-left').height() - 100))

})

$(function () {
    let $hotels = window.hotels
    if($('#map').length) {
        ymaps.ready(init);
        function init() {
            var myMap = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 10,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            });
            let $pointsList = [];

            $hotels.forEach(function(e) {







                MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
                    '<div class="popover top">' +
                        '<a class="close" href="#">&times;</a>' +
                        '<div class="arrow"></div>' +
                        '<div class="popover-inner" style="background: #fff; box-shadow: 0 0 4px -1px #000">' +
                        '$[[options.contentLayout observeSize minWidth=354 maxWidth=354 minHeight=67 maxHeight=250]]' +
                        '</div>' +
                        '</div>', {
                        /**
                         * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
                         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
                         * @function
                         * @name build
                         */
                        build: function () {
                            this.constructor.superclass.build.call(this);
                            this._$element = $('.popover', this.getParentElement());
                            this.applyElementOffset();
                            this._$element.find('.close')
                                .on('click', $.proxy(this.onCloseClick, this));
                        },
                        /**
                         * Удаляет содержимое макета из DOM.
                         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
                         * @function
                         * @name clear
                         */
                        clear: function () {
                            this._$element.find('.close')
                                .off('click');
                            this.constructor.superclass.clear.call(this);
                        },
        
                        /**
                         * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
                         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                         * @function
                         * @name onSublayoutSizeChange
                         */
                        onSublayoutSizeChange: function () {
                            MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);
        
                            if(!this._isElement(this._$element)) {
                                return;
                            }
        
                            this.applyElementOffset();
        
                            this.events.fire('shapechange');
                        },
        
                        /**
                         * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
                         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                         * @function
                         * @name applyElementOffset
                         */
                        applyElementOffset: function () {
                            this._$element.css({
                                left: -(this._$element[0].offsetWidth / 2),
                                top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight)
                            });
                        },
        
                        /**
                         * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
                         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                         * @function
                         * @name onCloseClick
                         */
                        onCloseClick: function (e) {
                            e.preventDefault();
        
                            this.events.fire('userclose');
                        },
        
                        /**
                         * Используется для автопозиционирования (balloonAutoPan).
                         * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
                         * @function
                         * @name getClientBounds
                         * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
                         */
                        getShape: function () {
                            if(!this._isElement(this._$element)) {
                                return MyBalloonLayout.superclass.getShape.call(this);
                            }
        
                            var position = this._$element.position();
        
                            return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                                [position.left, position.top], [
                                    position.left + this._$element[0].offsetWidth,
                                    position.top + this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight
                                ]
                            ]));
                        },
        
                        /**
                         * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
                         * @function
                         * @private
                         * @name _isElement
                         * @param {jQuery} [element] Элемент.
                         * @returns {Boolean} Флаг наличия.
                         */
                        _isElement: function (element) {
                            return element && element[0] && element.find('.arrow')[0];
                        }
                    }),
        
                // Создание вложенного макета содержимого балуна.
                MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<h3 class="popover-title">$[properties.balloonHeader]</h3>' +
                        '<div class="popover-content">$[properties.balloonContent]</div>'
                )





                let coord = e.coords                    
                $pointsList.push(coord)
                myPlacemark = new ymaps.Placemark(coord, {
                    balloonContent: `
                        <div class="card-placement__map">
                            <div class="card-placement__img">
                                <img src="` + e.img + `">
                            </div>
                            <div class="card-placement__content">
                                <div class="card-placement__name">
                                    <span class="rate">` + e.rate + `</span>
                                    ` + e.name + `
                                </div>
                                <a href="` + e.link + `" target="_blank">Подробнее</a>
                            </div>
                        </div>
                    `,
                }, {
                    balloonShadow: false,
                    balloonLayout: MyBalloonLayout,
                    balloonContentLayout: MyBalloonContentLayout,
                    balloonPanelMaxMapArea: 0,
                    hideIconOnBalloonOpen: false,
                    balloonOffset: [-430, -60],
                    iconLayout: 'default#image',
                    iconImageHref: window.marker,
                    iconImageSize: [30, 44],
                    iconImageOffset: [-15, -44],
                    // Не скрываем иконку при открытом балуне.
                    // hideIconOnBalloonOpen: false,
                    // И дополнительно смещаем балун, для открытия над иконкой.
                    // balloonOffset: [3, -40]
                },
                {
                },
                )
                myPlacemark.events.add('click', function(e) {
                    $('.map-content__inner').html(e.get('target')['properties'].get('balloonContent'))
                    $('.map-content').show()
                })

                myMap.geoObjects.add(myPlacemark)
                myMap.setCenter(coord, 11) 
            })

            myMap.behaviors.disable('scrollZoom')
        }
    }
})

$(function () {
    if($('#detail-map').length) {
        ymaps.ready(init);
        function init() {
            var hotelMap = new ymaps.Map("detail-map", {
                center: [55.76, 37.64],
                zoom: 10,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            });

            let $coord = $('#detail-map').attr('data-coords').split(',')
            let $marker = $('#detail-map').attr('data-marker') || './assets/images/map/baloon.svg'

            var myPlacemark = new ymaps.Placemark($coord, {
                balloonContent: '',
            },
            {
                iconLayout: 'default#image',
                iconImageHref: $marker,
                iconImageSize: [30, 44],
                iconImageOffset: [-15, -44]
            })
            hotelMap.geoObjects.add(myPlacemark)
            hotelMap.setCenter($coord, 11) 

        }
    }
})
$(function () {
    if($('#semi-map').length) {
        ymaps.ready(init);
        function init() {
            var semiMap = new ymaps.Map("semi-map", {
                center: [55.76, 37.64],
                zoom: 10,
                controls: []
            }, {
                searchControlProvider: 'yandex#search'
            });


            let $coord = $('#semi-map').attr('data-coords').split(',')
            let $marker = $('#semi-map').attr('data-marker') || './assets/images/map/baloon.svg'

            var myPlacemark = new ymaps.Placemark($coord, {
                balloonContent: '',
            },
            {
                iconLayout: 'default#image',
                iconImageHref: $marker,
                iconImageSize: [30, 44],
                iconImageOffset: [-15, -44]
            })
            semiMap.geoObjects.add(myPlacemark)
            semiMap.setCenter($coord, 11) 
        }
    }
})

$('.modal').on('click', '.map-content__close', function () {
    $('.ymaps-2-1-79-balloon__close-button').trigger('click')
    $('.map-content').hide()
})

$('.jsOpenModalCard').click(function () {
    $('.overlay-wrapper').fadeIn(350)
    $('.overlay').find('.modal').addClass('modal--show')
    $('html, body').addClass('no-overflow')
})

$('.modal__close, .modal-title__close').click(function () {
    $('.overlay').find('.modal').removeClass('modal--show')
    $('.overlay').closest('.overlay-wrapper').fadeOut(350)
    $('html, body').removeClass('no-overflow')
})

//truncateText
function _truncateText() {
    let $truncHeight = 0
    let $truncWrapper = $('.section-about-forum__desc')
    $truncWrapper.find('p').each(function () {
        $truncHeight = $truncHeight + $(this).height()
    })
    if($truncHeight > 260) {
        $truncWrapper.addClass('trunk')
    }
    $('.truncateText').click(function () {
        let $parent = $(this).closest('.section-about-forum__desc')
        let $button = $('.truncateText')
        $parent.toggleClass('trincate-expand')
        $parent.hasClass('trincate-expand') ? $button.text('Свернуть') : $button.text('Подробнее (развернуть)')
    })

}

function _region() {
    var search = location.search.substring(1);
    if (search) {
        let obj = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')
        if(obj.region && $('.pseudo-options').length) {
        $('.btn--like-select span').text(obj.region)
        $('.pseudo-options .option').each(function () {
            let $this = $(this)
            if($this.text() == obj.region) {
                $this.addClass('option--active')
            }
        })
        }
    }
    $('.jsOpenSelect').click(function (e) {
        e.preventDefault()
        $(this).find('.pseudo-options').fadeToggle()
        $(this).find('.pseudo-options__border').fadeToggle()
    })
    $('.option').click(function () {
        let $text = $(this).text()
        $('.option').removeClass('option--active')
        $(this).addClass('option--active')
        $('.btn--like-select span').text($text)
        $('.btn--like-select[data-id-popup] span').text($text)
        $('.popup-come-out__close').trigger('click')
    })
}

$('[data-filter-news]').click(function () {
    $(this).toggleClass('filter-active')
})

function _speakersSlider() {
    let $loop;
    if($('.speakers-slider .card-speakers.swiper-slide').length > 4) {
        $loop = true
        $('.section-speakers__arrows').show()
    } else {
        if($(window).width() > 1200) {
            $('.section-speakers__arrows').hide()
            $loop = false
        } else {
            $('.section-speakers__arrows').show()
            $loop = true
        }
        
    }
    
    const speakersSlider = new Swiper('.speakers-slider', {
        direction: 'horizontal',
        loop: $loop,
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.section-speakers .slider-arrow--next',
            prevEl: '.section-speakers .slider-arrow--prev',
        },
        allowTouchMove: true,
        speed: 1000,
        breakpoints: {
            0: {
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
                slidesPerView: 1.25,
                navigation: false,
                allowTouchMove: true,
            },
            576: {
                scrollbar: false,
                slidesPerView: 2,
                loop: true,
                navigation: {
                    nextEl: '.section-speakers .slider-arrow--next',
                    prevEl: '.section-speakers .slider-arrow--prev',
                },
                allowTouchMove: true,
            },
            768: {
                scrollbar: false,
                slidesPerView: 3,
            },
            1200: {
                scrollbar: false,
                slidesPerView: 4,
                spaceBetween: 20
            }
        }
    })
}

$(document).ready(
    _speakersSlider()
)

$(function () {
    _truncateText(),
    _region()
})

$(window).on('load', function () {
    setTimeout(function () {
        $('.section-stream').show();
    }, 2000)
})


$(document).ready(function () {
    $count = 0;
    $height = 0;
    $('.section-faq__answers-list li').each(function () {
        let $el = $(this).find('.section-faq__answer-layer')
        if($count < 5) {
            $height = $height + $el.height() + 8
            $count++
        }
    })
    $('.section-faq__answers-list').css('max-height', $height)
})