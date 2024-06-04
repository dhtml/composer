import app from 'flarum/forum/app';
import addPreviewButton from './addPreviewButton';

app.initializers.add('dhtml-composer', () => {
  addPreviewButton();
});
