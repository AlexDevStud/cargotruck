let galeryInner   = document.querySelector('.galery__inner');

function galeryControl(selector) {
    let imagesArr = document.querySelectorAll(selector + " .galery__img"),
        imagesPreview = document.querySelector(selector + " .galery__preview");

    for (let i = 0; i < imagesArr.length; i++) {
        imagesArr[i].addEventListener('click', function () {
            imagesPreview.setAttribute('src', ('./img/galery-'+(Number(i)+1)+'.png'));
    
            for (let j = 0; j < imagesArr.length; j++) {
                imagesArr[j].classList.remove('galery__img--active');
            }
    
            imagesArr[i].classList.add('galery__img--active')
        });
    }
}

let input1      = document.querySelectorAll('.price-control__item input')[0],
    input2      = document.querySelectorAll('.price-control__item input')[1],
    btnPlus     = document.querySelector('.price-control__btn--plus'),
    btnMinus    = document.querySelector('.price-control__btn--minus'),
    sale        = document.querySelector('.price-control__sale'),
    sum         = document.querySelector('.price-control__sum'),
    oldSum      = document.querySelector('.price-control__old-sum'),
    btnSub      = document.querySelector('.card__btn');
    
btnPlus.addEventListener('click', function () {
    input1.value = input1.value

    if (input1.value >= 50) {
        input1.value = 50;
    } else {
        input1.value++;
    }

    if(input1.value < 5)
    {
        input2.value = 692;
        sale.innerHTML = "-21%";
        sale.classList.remove('bgc-rose');
    } 
    else {
        input2.value = 613;
        sale.innerHTML = "-30%";
        sale.classList.add('bgc-rose');
    }

    if(input1.value < 10)
    {
        btnSub.innerHTML = "Оформити замовлення";
    } 
    else {
        btnSub.innerHTML = "Отримати подарунок";
    }

    sum.innerHTML = input1.value * input2.value + " ₴";
    oldSum.innerHTML = input1.value * 876 + " ₴";

    console.log(1);

});

btnMinus.addEventListener('click', function () {

    if (input1.value <= 1) {
        input1.value = 1;
    } else {
        input1.value--;
    }

    if(input1.value < 5)
    {
        input2.value = 692;
        sale.innerHTML = "-21%";
        sale.classList.remove('bgc-rose');
    } 
    else {
        input2.value = 613;
        sale.innerHTML = "-30%";
        sale.classList.add('bgc-rose');
    }

    if(input1.value < 10)
    {
        btnSub.innerHTML = "Оформити замовлення";
    } 
    else {
        btnSub.innerHTML = "Отримати подарунок";
    }


    sum.innerHTML = input1.value * input2.value + " ₴";
    oldSum.innerHTML = input1.value * 876 + " ₴";

    console.log(2);
});

$('.mask-number').mask('+38(099) 999-99-99');

$.fn.setCursorPosition = function(pos) {
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


$('input[type="tel"]').click(function(){
    $(this).setCursorPosition(5);  // set position number
});



galeryControl(".card__galery");


// Отримуємо елементи DOM
var modal = document.querySelector('#myModal');
var btn = document.querySelector("#openModalBtn");
var span = document.querySelector(".close");

console.log(btn);
// Коли користувач клікає на кнопку, відкриємо модальне вікно
btn.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = "block";
})

// Коли користувач клікає на закрити кнопку (×), закриваємо вікно
span.addEventListener('click', function() {
    modal.style.display = "none";
})

// Коли користувач клікає десь за модальним вікном, закриваємо його
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})

let btnSubmit = document.querySelector(".card__btn"),
    hiddenInput = document.querySelector(".hidden-input"),
    podarok = document.querySelector(".podarok"),
    tPcs = document.querySelector(".tPcs"),
    tPrc= document.querySelector(".tPrc"),
    tTtl= document.querySelector(".tTtl"),
    tMore= document.querySelector(".tMore");

btnSubmit.addEventListener('click', function () {
    hiddenInput.value = "Стяжний ремінь " + input1.value + "шт * " + input2.value + "грн = " + (input1.value*input2.value);

    if (input1.value < 10) {
        podarok.style.display = "none";
    } else {
        podarok.style.display = "contents";
    }

    tPcs.innerHTML = input1.value + " ₴";
    tPrc.innerHTML = input2.value + " ₴";
    tTtl.innerHTML = input2.value * input1.value + " ₴";
    tMore.innerHTML = input2.value * input1.value + " ₴";

})