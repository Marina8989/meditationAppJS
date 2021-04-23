const playBtn = document.querySelector('.playBtn');
const pauseBtn = document.querySelector('.pauseBtn');
const twoBtn = document.querySelector('.two-minutes');
const fiveBtn = document.querySelector('.five-minutes');
const tenBtn = document.querySelector('.ten-minutes');

playBtn.addEventListener('click', () => {
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'block';
});

pauseBtn.addEventListener('click', () => {
   playBtn.style.display = 'block';
   pauseBtn.style.display = 'none'
})

function timing(min) {
    let minutes = min;
    let seconds = 20;


        setInterval(() => {
             console.log('Minutes ' + minutes);
             seconds = seconds - 1;
             console.log('Minutes left ' + minutes)
             console.log('Seconds left ' + seconds);
             if(seconds == 1) {
                minutes = minutes - 1;
                seconds = 20
             }   
             if(minutes == 0) {
                 clearTimeout(seconds);
             }          
        }, 1000);
}

console.log(timing(2));