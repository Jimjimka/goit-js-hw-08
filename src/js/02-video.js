import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    console.log(player);


    player.setCurrentTime(localStorage.videoplayerCurrentTime).then(function(seconds) {
   
        
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                
                break;
    
            default:
              
                break;
        }
    });

    const onPlay = function(data) {
        
        
        localStorage.setItem('videoplayerCurrentTime',data.seconds)
        console.log(data.seconds);
    };
    
    player.on('timeupdate',throttle(onPlay, 1000 ));

 