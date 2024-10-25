$(document).ready(function () {
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
        allowTouchMove: false,


        breakpoints: {
            0: {
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
                slidesPerView: 1.3,
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






    var photoGallerySwiper = new Swiper('.slider-photo-gallery', {
        allowTouchMove: false,
        slidesPerView: 5, // Показываем несколько слайдов одновременно
        spaceBetween: 24, // Отступы между слайдами
        centeredSlides: true, // Центрируем активный слайд
        loop: true, // Зацикливаем слайды
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 50, // Угол поворота слайдов
            stretch: 0, // Расстояние между слайдами
            depth: 100, // Глубина слайдов, чем больше значение — тем больше эффект 3D
            modifier: 0, // Модификатор эффекта (усиление)
            slideShadows: true // Тени у слайдов
        },

        on: {
            slideChange: function () {
                updateSlides(this);
            },
            init: function () {
                updateSlides(this); // Установить начальные стили
            },
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
                loop: true,
                centeredSlides: true,
                slidesPerView: 5,
                spaceBetween: 24,


            }
        },



    });




    function updateSlides(swiper) {

        const slides = swiper.slides;
        const activeIndex = swiper.activeIndex;

        // Очищаем все слайды от классов
        slides.forEach((slide) => {
            slide.classList.remove('scale-1', 'scale-2', 'scale-3');
        });

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
        loop: false,
        allowTouchMove: false,
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
                allowTouchMove: false,
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
    const newsSlider = new Swiper('.slider-news', {
        slidesPerView: 4, // Показываем несколько слайдов одновременно
        autoHeight: false,
        spaceBetween: 20,
        allowTouchMove: false,
        loop: true,
        navigation: {
            nextEl: '.section-news__btns .slider-arrow--next',
            prevEl: '.section-news__btns  .slider-arrow--prev',
        },
        on: {
            // Событие при смене слайда
            slideChange: function () {
                updateClassNews(this);
            }
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
                scrollbar: false,
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
            slide.classList.remove('section-new__item--large-slide', 'section-new__item--small-slide');
        });

        // Находим первый видимый слайд и задаем ему класс 'large-slide'
        const activeSlide = swiper.slides[swiper.activeIndex];
        activeSlide.classList.add('section-new__item--large-slide');

        // Задаем остальным слайдам класс 'small-slide'
        for (let i = 1; i <= 3; i++) {
            const nextSlide = swiper.slides[(swiper.activeIndex + i) % swiper.slides.length];
            nextSlide.classList.add('section-new__item--small-slide');
        }
    }


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

    function updateSwiper() {
        sliderStreamSwiper.update();
        photoGallerySwiper.update();
        photoGallerySwiper.updateSize();
        photoGallerySwiper.updateSlidesClasses()

    }

    /*faq tabs */
    $(".section-faq__answer").click(function () {
        if ($(this).hasClass("section-faq__answer--active")) {
            $(this).removeClass("section-faq__answer--active");
            return false;
        }
        $(".section-faq__answer").removeClass("section-faq__answer--active");
        $(this).addClass("section-faq__answer--active");
    });
    updateSwiper();


    /*marque */





    /*rezize */
    $(window).resize(function () {
        updateSwiper();
    

    })


    $('.section-brands__row--first').marquee({
        duration: 3000, // Время движения строки
        gap: 10, // Расстояние между повторениями
        delayBeforeStart: 0, // Задержка перед началом
        direction: 'left', // Направление движения
        duplicated: true,// Дублирование строки для бесшовного эффекта
        startVisible: true,
        scrollDelay: 10000,
        easing: "linear",
        behavior: "linear",
        speed: 70,
        pauseOnHover: true
    });

    // Настройка второй бегущей строки
    $('.section-brands__row--second').marquee({
        duration: 3000, // Время движения строки
        gap: 10, // Расстояние между повторениями
        delayBeforeStart: 0, // Задержка перед началом
        direction: 'right', // Направление движения
        duplicated: true, // Дублирование строки для бесшовного эффекта
        startVisible: true,
        scrollDelay: 10000,
        easing: "linear",
        behavior: "linear",
        speed: 70,
        pauseOnHover: true
    });

    $(document).ready(function () {
        // Показывать кнопку при прокрутке вниз
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.btn-upper').fadeIn();
            } else {
                $('.btn-upper').fadeOut();
            }
        });

        // Плавная прокрутка вверх при клике
        $('.btn-upper').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 300); // 600 - длительность анимации в миллисекундах
            return false;
        });
    });




});