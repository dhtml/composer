import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import TextEditor from 'flarum/common/components/TextEditor';
import Tooltip from "flarum/common/components/Tooltip";
import Button from "flarum/common/components/Button";
import CharacterCounter from './components/CharacterCounter';

export default function () {

  extend(TextEditor.prototype, 'oninit', function () {
    console.log("Character count things");
  });

  extend(TextEditor.prototype, 'controlItems', function (items) {
    console.log("TextEditor Add Control Items Here");

    items.add('xtercount', <CharacterCounter textEditor={this} />, 100);

    //console.log("Target composer");
  });

  extend(TextEditor.prototype, 'oncreate', function (f_, vnode) {
  });

  extend(TextEditor.prototype, 'onremove', function (f_, vnode) {
  });
}
