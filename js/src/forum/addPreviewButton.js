import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import TextEditor from 'flarum/common/components/TextEditor';

export default function () {
  extend(TextEditor.prototype, 'oninit', function () {
    console.log("TextEditor OnInit");
  });

  extend(TextEditor.prototype, 'controlItems', function (items) {
    console.log("TextEditor Add Control Items Here");
  });

  extend(TextEditor.prototype, 'oncreate', function (f_, vnode) {
    console.log("TextEditor OnCreate");
  });

  extend(TextEditor.prototype, 'onremove', function (f_, vnode) {
    console.log("TextEditor OnRemove");
  });
}
