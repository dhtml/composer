import Component from 'flarum/common/Component';
import Tooltip from "flarum/common/components/Tooltip";
import app from 'flarum/forum/app';

export default class CharacterCounter extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    this.textEditor = this.attrs.textEditor;
    this.charCount = 0;
  }

  view() {
    return (
      <div className="CharacterCounter">
        <Tooltip text={app.translator.trans('dhtml-composer.forum.composer.character_counter')}>
        <button className="Button">
          <span className="Button-label">{this.charCount}</span>
        </button>
        </Tooltip>
      </div>
    );
  }


  updateCharCount() {
    console.log("wow");
    this.charCount++;
    //this.charCount = this.textEditor.$('textarea').val().length;
    m.redraw();
  }
}
