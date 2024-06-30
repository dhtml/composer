import app from 'flarum/forum/app';
import addPreviewButton from './addPreviewButton';
import addCharacterCount from "./addCharacterCount";

app.initializers.add('dhtml-composer', () => {
  addPreviewButton();
  addCharacterCount();
});
