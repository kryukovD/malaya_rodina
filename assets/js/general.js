$(document).ready(function () {

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
        $(".mobile-menu__dropdown").addClass("mobile-menu__dropdown--active");
    });

    $(".mobile-menu__close").click(function () {
        $(".mobile-menu__dropdown").removeClass("mobile-menu__dropdown--active");
    });

    $(".mobile-menu__li--has--children").click(function () {
        $(this).toggleClass("mobile-menu__li--active");
        $(this).next(".mobile-menu__children").toggleClass("mobile-menu__children--active");
    });

    // Плавный скролл к якорю
    $('.ancor').click(function () {
        let anchor = $(this).attr('href')
        $('html, body').animate({
            scrollTop: $(anchor).offset().top - 100
        }, 500)
    });

    function isElementInViewport(el) {
        const rect = el[0].getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= ($(window).height()) &&
            rect.right <= ($(window).width())
        );
    }



    // Запуск счетчика
    function startCounter() {
        const $counter = $('.section-statistics__row');
        if ($('.section-statistics__row').length > 0) {
            if (isElementInViewport($counter)) {
                /*счетчик */
                $('.counter').countTo({
                    refreshInterval: 50,
                    formatter: function (value, options) {
                        return value.toLocaleString('ru-RU', { maximumFractionDigits: 0 });
                    },
                });
                // Убираем обработчик скролла, чтобы счетчик запускался один раз
                $(window).off('scroll', onScroll);
            }
        }
    }



    // Обработчик события скролла
    function onScroll() {
        startCounter();
    }


    $(window).on('scroll', onScroll);


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


    // function cloneSlides(slidesSelector,wrapperSwiperSelector){
    //     let slides = document.querySelectorAll(slidesSelector);

    //     if (slides.length === 5) {
    //         let swiperWrapper = document.querySelector(wrapperSwiperSelector);
    //         slides.forEach(slide => {
    //             let clone = slide.cloneNode(true);
    //             swiperWrapper.appendChild(clone);
    //         });
    //     }
    // }

    //    cloneSlides(".speakers-slider .swiper-slide",".speakers-slider .swiper-wrapper");

    /*speakers slider */
    const speakersSlider = new Swiper('.speakers-slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
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
    });



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


    /*photo gallery slider */

    // const swiperContainer = document.querySelector('.slider-photo-gallery');
    // const swiperWrapper = swiperContainer.querySelector('.swiper-wrapper');
    // const originalSlides = swiperWrapper.children;

    // // Проверяем количество слайдов и клонируем при необходимости
    // const totalSlides = originalSlides.length;
    // const requiredSlides = 30; // Необходимое количество слайдов для корректного отображения

    // if (totalSlides < requiredSlides) {
    //     const slidesToClone = requiredSlides - totalSlides;

    //     for (let i = 0; i < slidesToClone; i++) {
    //         const clonedSlide = originalSlides[i % totalSlides].cloneNode(true); // Клонируем слайды
    //         swiperWrapper.appendChild(clonedSlide); // Добавляем клонированные слайды в обертку
    //     }
    // }


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
                let src = $(this).attr("data-src");
                let allImage = $(".slider-photo-gallery__item");
                let objectsShow = [];
                objectsShow.push({ src: src, type: 'image' });
                allImage.each(function (i, item) {
                    objectsShow.push({ src: $(item).attr("data-src"), type: 'image' });
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
        // Your custom options
    });



    $(".slider-photo-gallery").on('mouseenter', '.slider-photo-gallery__item.swiper-slide-active', function () {
        $(".slider-photo-gallery__item.scale-2").addClass("slider-photo-gallery__item--change-height");
        $(".slider-photo-gallery__item.scale-3").addClass("slider-photo-gallery__item--change-height");
    });
    $(".slider-photo-gallery").on("click", ".slider-photo-gallery__item.swiper-slide-active", function () {
        let src = $(this).attr("data-src");
        let allImage = $(".slider-photo-gallery__item");
        let objectsShow = [];
        objectsShow.push({ src: src, type: 'image' });
        allImage.each(function (i, item) {
            objectsShow.push({ src: $(item).attr("data-src"), type: 'image' });
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



    /* news slider */
    var swiperContainerNews = $('.slider-news');
    var slidesNews = swiperContainerNews.find('.swiper-slide');
    var minSlides = 5; // Минимальное количество слайдов

    // Дублируем слайды, если их меньше 4
    if (slidesNews.length < minSlides) {
        var slidesToDuplicate = minSlides - slidesNews.length;
        for (var i = 0; i < slidesToDuplicate; i++) {
            slidesNews.eq(i % slidesNews.length).clone().appendTo(".slider-news .swiper-wrapper"); // Клонируем и добавляем
        }
    }

    const newsSlider = new Swiper('.slider-news', {
        slidesPerView: 4, // Показываем несколько слайдов одновременно
        autoHeight: false,
        spaceBetween: 20,
        allowTouchMove: true,
        speed: 1000,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.section-news__btns .slider-arrow--next',
            prevEl: '.section-news__btns  .slider-arrow--prev',
        },
        on: {

            // Событие при смене слайда
            slideChange: function () {
                updateClassNews(this);
            },


        },
        breakpoints: {
            0: {
                slidesPerView: "auto",
                spaceBetween: 8,
                width: null,
                navigation: false,
                allowTouchMove: true,
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            },
            576: {
                allowTouchMove: false,
                slidesPerView: "auto",
                with: "auto",
                scrollbar: false,
                navigation: {
                    nextEl: '.section-news__btns .slider-arrow--next',
                    prevEl: '.section-news__btns  .slider-arrow--prev',
                },

            },

            768: {
                allowTouchMove: false,
                slidesPerView: 3,
                loopAdditionalSlides: 3,
                observer: true,
                observeParents: true,
                scrollbar: false,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.section-news__btns .slider-arrow--next',
                    prevEl: '.section-news__btns  .slider-arrow--prev',
                },

            },

            1024: {
                slidesPerView: 4, // Показываем несколько слайдов одновременно
                spaceBetween: 20,
                loop: true
            }
        }

    });




    function updateClassNews(swiper) {
        // Сначала удаляем классы со всех слайдов
        swiper.slides.forEach(slide => {
            slide.classList.remove('section-news__item--large-slide', 'section-news__item--small-slide', 'section-news__item--revert-slide', 'section-news__item--before-revert-slide');
        });

        // Находим первый видимый слайд и задаем ему класс 'large-slide'
        const activeSlide = swiper.slides[swiper.activeIndex];

        activeSlide.classList.add('section-news__item--large-slide');
        swiper.slides[(swiper.activeIndex + 2)].classList.add("section-news__item--before-revert-slide");
        swiper.slides[(swiper.activeIndex + 1)].classList.add("section-news__item--revert-slide");
        // Задаем остальным слайдам класс 'small-slide'
        for (let i = 1; i <= 3; i++) {
            const nextSlide = swiper.slides[(swiper.activeIndex + i) % swiper.slides.length];
            nextSlide.classList.add('section-news__item--small-slide');
        }
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


    const wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: false,       // default
            live: true        // default
        }
    )
    wow.init();


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
            $("body").css("padding-top", headerHeight + "px")
            $('.header').addClass('fixed');
        } else {
            $("body").css("padding-top", 0)
            $('.header').removeClass('fixed');
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
        console.log($checked)
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
        console.log($required)
        console.log($valid)
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
    } else {
        $('.section-program__message--intersection').hide()
        $('.section-program__item--register').removeClass('except')
    } 

    mergeMeetings.forEach(function (e) {
        $('.section-program__item--register[data-id="' + e + '"]').addClass('except')
    })
    console.log(mergeMeetings)
}
$(document).ready(
    _intersectionTime()
)

$('.jsRefuseReg').click(function () {
    $(this).closest('.section-program__item').removeClass('section-program__item--register').removeClass('except')
    _intersectionTime()
})
$('.jsReg').click(function () {
    $(this).closest('.section-program__item').addClass('section-program__item--register')
    _intersectionTime()
})

$('.jsShowMyEvent').click(function () {
    $(this).removeClass('btn-secondary').addClass('btn-primary')
    $('.jsShowAllEvent').removeClass('btn-primary').addClass('btn-secondary')
    $('.section-program__item').not('.section-program__item--register').hide()
})
$('.jsShowAllEvent').click(function () {
    $(this).removeClass('btn-secondary').addClass('btn-primary')
    $('.jsShowMyEvent').removeClass('btn-primary').addClass('btn-secondary')
    $('.section-program__item').show()
})




// Драг без полосы прокрутки. При необходимости динамического добавления класса вызвать dragscroll.reset()
$(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports'], factory);
    } else if (typeof exports !== 'undefined') {
        factory(exports);
    } else {
        factory((root.dragscroll = {}));
    }
}(this, function (exports) {
    var _window = window;
    var _document = document;
    var mousemove = 'mousemove';
    var mouseup = 'mouseup';
    var mousedown = 'mousedown';
    var EventListener = 'EventListener';
    var addEventListener = 'add' + EventListener;
    var removeEventListener = 'remove' + EventListener;
    var newScrollX, newScrollY;

    var dragged = [];
    var reset = function (i, el) {
        for (i = 0; i < dragged.length;) {
            el = dragged[i++];
            el = el.container || el;
            el[removeEventListener](mousedown, el.md, 0);
            _window[removeEventListener](mouseup, el.mu, 0);
            _window[removeEventListener](mousemove, el.mm, 0);
        }

        dragged = [].slice.call(_document.getElementsByClassName('dragscroll'));
        for (i = 0; i < dragged.length;) {
            (function (el, lastClientX, lastClientY, pushed, scroller, cont) {
                (cont = el.container || el)[addEventListener](
                    mousedown,
                    cont.md = function (e) {
                        if (!el.hasAttribute('nochilddrag') ||
                            _document.elementFromPoint(
                                e.pageX, e.pageY
                            ) == cont
                        ) {
                            pushed = 1;
                            lastClientX = e.clientX;
                            lastClientY = e.clientY;

                            e.preventDefault();
                        }
                    }, 0
                );

                _window[addEventListener](
                    mouseup, cont.mu = function () { pushed = 0; }, 0
                );

                _window[addEventListener](
                    mousemove,
                    cont.mm = function (e) {
                        if (pushed) {
                            (scroller = el.scroller || el).scrollLeft -=
                                newScrollX = (- lastClientX + (lastClientX = e.clientX));
                            scroller.scrollTop -=
                                newScrollY = (- lastClientY + (lastClientY = e.clientY));
                            if (el == _document.body) {
                                (scroller = _document.documentElement).scrollLeft -= newScrollX;
                                scroller.scrollTop -= newScrollY;
                            }
                        }
                    }, 0
                );
            })(dragged[i++]);
        }
    }


    if (_document.readyState == 'complete') {
        reset();
    } else {
        _window[addEventListener]('load', reset, 0);
    }
    exports.reset = reset;
}));


