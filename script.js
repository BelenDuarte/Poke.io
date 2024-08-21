document.querySelector('.contact').addEventListener('click', function() {
    alert('Llamar al número de teléfono');
});


document.querySelector('.sonido').addEventListener('click', function() {
    var audio = new Audio('poke.mp3');
    audio.play();
});


document.querySelectorAll('.poke .blue button').forEach(function(button) {
    button.addEventListener('mouseover', function() {
        button.querySelector('p').style.display = 'block';
    });
    button.addEventListener('mouseout', function() {
        button.querySelector('p').style.display = 'none';
    });
});
