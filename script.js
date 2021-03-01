function imgSlider(slider){
    document.querySelector('.vans').src = slider;
}

function changeVansColor(color){
    const vShape = document.querySelector('.v-shape');
    vShape.style.background = color;
}

function changeTextColor(text){
    const txtVans = document.querySelector('.text-vans');
    txtVans.style.color = text;
}

function changeParagraph(paragraph){
    const pVans = document.querySelector('.p-vans');
    pVans.textContent = paragraph;
}

function changeTextParagraph(textPara){
    const txtPVans = document.querySelector('.text-p-vans');
    txtPVans.textContent = textPara
}

function toggle(){
    var menu = document.querySelector('.toggle');
    var navigation = document.querySelector('.nav-sec1');
    menu.classList.toggle('active')
    navigation.classList.toggle('active')
}