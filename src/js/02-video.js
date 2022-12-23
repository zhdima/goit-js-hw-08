import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

function doTask02() {

  const KEY_PLAYER_TIME = 'videoplayer-current-time';
  const iframe = document.querySelector('iframe');
 
  if (!iframe) {
    console.log('Error: invalid markup!');
    return;
  }

  const player = new Player(iframe);

  const jsonSavedTime = localStorage.getItem(KEY_PLAYER_TIME);
  if (jsonSavedTime) {
    try {
      player.setCurrentTime(JSON.parse(jsonSavedTime));
    } catch (err) {
      console.error('Error: invalid saved time in LocalStorage.' + KEY_PLAYER_TIME);
      console.error(err);
    }
  }

  player.on('timeupdate', throttle(currentTime => 
    localStorage.setItem(KEY_PLAYER_TIME, JSON.stringify(currentTime.seconds)), 1000));
}

doTask02();
