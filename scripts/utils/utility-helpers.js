const playSound = (sound) => {
  if (isSoundMuted && sound !== 'unmute') return;
  new Audio(`./assets/sounds/${sound}.mp3`).play();
};

const assertArray = (value) => (value instanceof Array ? value : [value]);
