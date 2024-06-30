import app from 'flarum/forum/app';
import addPreviewButton from './addPreviewButton';
import CharCountTextArea from "./components/CharCountTextArea";

import { extend } from 'flarum/common/extend';
import TextEditor from 'flarum/common/components/TextEditor';

app.initializers.add('dhtml-composer', () => {
  addPreviewButton();
});
