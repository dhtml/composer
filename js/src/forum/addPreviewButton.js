import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import TextEditor from 'flarum/common/components/TextEditor';
import Tooltip from "flarum/common/components/Tooltip";
import Button from "flarum/common/components/Button";

const preview = () => {
  m.route.set("/composer-preview-page");
  alert("Preview");
};

export default function () {
  extend(TextEditor.prototype, 'oninit', function () {
    console.log("TextEditor OnInit");
  });

  extend(TextEditor.prototype, 'controlItems', function (items) {
    console.log("TextEditor Add Control Items Here");

    if(!this.attrs.preview) {
      console.log("Target composer");

      items.add(
        'preview',
        <Tooltip text={app.translator.trans('core.forum.composer.preview_tooltip')}>
          <Button icon="far fa-eye" className="Button Button--icon"  onclick={preview}/>
        </Tooltip>,
        -1
      );

    }


  });

  extend(TextEditor.prototype, 'oncreate', function (f_, vnode) {
    console.log("TextEditor OnCreate");
  });

  extend(TextEditor.prototype, 'onremove', function (f_, vnode) {
    console.log("TextEditor OnRemove");
  });
}
