import {
  parameters,
  validateString,
  Observer,
  obsAPI
} from 'https://obs.multistream.tools/v1/overlay.js';

import { buttonClicked, settingsSubmitted, emitter } from './emitter.js';

let { endScene } = parameters;

endScene = validateString(endScene, 'End');

const getCurrentScene = 'getCurrentScene';
const buttonClickedEventKey = emitter.key(buttonClicked);
const settingsSubmittedEventKey = emitter.key(settingsSubmitted);

new Observer({
  [buttonClickedEventKey]() {
    console.log(buttonClicked);
  },
  [settingsSubmittedEventKey]({ data }) {
    console.log(settingsSubmitted, data);
  },
  [getCurrentScene]({ data }) {
    console.log(getCurrentScene, data);
  },
  obsSceneChanged({ data }) {
    console.log('new scene', data.name);
  }
});

obsAPI(getCurrentScene);
obsAPI('setCurrentScene', endScene);
