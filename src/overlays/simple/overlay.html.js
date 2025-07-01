import {
  loadFonts,
  parameters,
  validateNumber,
  Queue,
  setText,
  stringify,
  removeChildren,
  Observer
} from 'https://obs.multistream.tools/v1/overlay.js';

// Optional.
loadFonts('Tangerine');

let { duration } = parameters;

duration = validateNumber(duration, 5);

const queue = new Queue(duration);

const { logContainer } = window;

const log = data => setText(stringify(data, null, '  '), logContainer);

const clear = () => removeChildren(main);

const addToQueue = data => queue.add(() => log(data), clear);

new Observer({
  load: addToQueue,
  session: addToQueue,
  alerts: addToQueue,
  chat: addToQueue,
  other: addToQueue
});
