let element = document.querySelector('#banner');
let footer = document.querySelector('#footer');

element.addEventListener('click', function(){
    footer.classList.contains('hidden') 
    ? footer.classList.remove('hidden')
    : footer.classList.add('hidden')
})
