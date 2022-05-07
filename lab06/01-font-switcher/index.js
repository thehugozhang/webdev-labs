var content = document.querySelector('.content')
var header = document.getElementById('header')

const makeBigger = () => {
   var contentSize = parseFloat(window.getComputedStyle(content, null).getPropertyValue('font-size'));
   var headerSize = parseFloat(window.getComputedStyle(header, null).getPropertyValue('font-size'));

   content.style.fontSize = (contentSize + 1) + 'px';
   header.style.fontSize = (headerSize + 1) + 'px';
};

const makeSmaller = () => {
   var contentSize = parseFloat(window.getComputedStyle(content, null).getPropertyValue('font-size'));
   var headerSize = parseFloat(window.getComputedStyle(header, null).getPropertyValue('font-size'));
   
   content.style.fontSize = (contentSize - 1) + 'px';
   header.style.fontSize = (headerSize - 1) + 'px';
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

