import Component from 'flarum/common/Component';

export default class CharacterCounter extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    this.textEditor = this.attrs.textEditor;
    this.charCount = 0;
  }

  view() {
    return (
      <div className="CharacterCounter">
        <button className="Button">
          <span className="Button-label">{this.charCount}</span>
        </button>
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
