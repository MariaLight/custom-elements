const materialSelect = document.querySelector('#material');
const choices = new Choices(materialSelect, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false
})

function init() {
    // Создание карты.
    let myMap = new ymaps.Map("map", {

        center: [48.87219657376512, 2.354223999999991],

        zoom: 16,
        controls: []
    });
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {

        iconLayout: 'default#image',

        iconImageHref: '../img/mark.svg',

        iconImageSize: [30, 42]
    });
    myMap.geoObjects.add(myPlacemark);
}
ymaps.ready(init);

const selector = document.querySelector("input[type='tel']");

const tel = new Inputmask("+7 (999) 999-99-99");
tel.mask(selector);

new JustValidate('.form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue();
                return Number(phone) && phone.length === 10;
            }
        },
        email: {
            required: true,
            email: true
        }
    },
    messages: {
        name: {
            required: 'Как вас зовут?',
            minLength: 'Имя должно должно содержать не менее 2 букв',
            maxLength: 'Имя должно содержать не более 30 букв'
        },
        email: 'Укажите ваш e-mail',
        tel:'Укажите ваш телефон'
    },
    colorWrong: '#FF5C00'
})