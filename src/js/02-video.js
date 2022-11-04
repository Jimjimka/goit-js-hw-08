import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframeEl = document.querySelector('#vimeo-player');

const player = new Player(iframeEl);

const onPlay = function(data) {
    localStorage.setItem('videoplayerCurrentTime', data.seconds); 
    console.log(data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const setTime = () => {
    if (localStorage.getItem('videoplayerCurrentTime') === null) {
        return;
    }
player.setCurrentTime(localStorage.getItem('videoplayerCurrentTime'))
    
}

setTime()