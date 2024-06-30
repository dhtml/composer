import Component from 'flarum/common/Component';

export default class CharCountTextArea extends Component {
    oninit(vnode) {
        super.oninit(vnode);
        this.textArea = this.attrs.textArea;
        this.charCount = 0;
    }

    oncreate(vnode) {
        super.oncreate(vnode);
        this.updateCharCount();
        this.textArea.on('input', this.updateCharCount.bind(this));
    }

    view() {
        return (
            <div className="CharCountTextArea">
                <div className="char-count">{this.charCount} characters</div>
            </div>
        );
    }

    updateCharCount() {
        this.charCount = this.textArea.val().length;
        m.redraw();
    }
}
