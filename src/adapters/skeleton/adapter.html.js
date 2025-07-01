import {
  parameters,
  Platform,
  Adapter
} from 'https://obs.multistream.tools/v1/adapters.js';

const customPlatform = 'customPlatform';
const customAlert = 'customAlert';

class CustomPlatform extends Platform {
  constructor(...args) {
    super(customPlatform, [customAlert], ...args);
  }
}

class CustomPlatformAdapter extends Adapter {
  constructor(...args) {
    super(CustomPlatform, ...args);
  }
}

new CustomPlatformAdapter(parameters);
