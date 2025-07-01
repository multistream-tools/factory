import {
  ClickListener,
  Form,
  enable,
  i18n
} from 'https://obs.multistream.tools/v1/overlay.js';

import { buttonClicked, settingsSubmitted, emitter } from './emitter.js';

i18n({
  fr: {
    title: 'Exemple de dock personnalisé',
    textInput: 'Champ de texte',
    checkboxes: 'Cases à cocher',
    checkbox1: 'Case à cocher 1',
    checkbox2: 'Case à cocher 2',
    radioButtons: 'Boutons radio',
    radio1: 'Bouton radio 1',
    radio2: 'Bouton radio 2',
    button: 'Bouton',
    submit: 'Soumettre',
    reset: 'Réinitialiser'
  },
  es: {
    title: 'Ejemplo de dock personalizado',
    textInput: 'Campo de texto',
    checkboxes: 'Casillas de verificación',
    checkbox1: 'Casilla de verificación 1',
    checkbox2: 'Casilla de verificación 2',
    radioButtons: 'Botones de opción',
    radio1: 'Botón de opción 1',
    radio2: 'Botón de opción 2',
    button: 'Botón',
    submit: 'Enviar',
    reset: 'Restablecer'
  }
});

const { settingsForm, simpleButton, submitButton } = window;
const { text, checkbox1, checkbox2, radio } = settingsForm;

new ClickListener(() => emitter.emit(buttonClicked), simpleButton);

new Form(settingsForm, {
  persisted: [checkbox1.name, checkbox2.name],
  submit() {
    emitter.emit(settingsSubmitted, {
      text: text.value,
      checkbox1: checkbox1.checked,
      checkbox2: checkbox2.checked,
      radio: radio.value
    });
  }
});

enable(submitButton);
