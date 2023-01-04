var duration = 7000, steps = 3, step = 1;
setInterval( function() {
document.querySelector( '.animation' ).setAttribute( 'data-animation-step', step = ++step > steps ? 1 : step );
}, duration / steps );