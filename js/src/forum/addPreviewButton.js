import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import TextEditor from 'flarum/common/components/TextEditor';
import Tooltip from "flarum/common/components/Tooltip";
import Button from "flarum/common/components/Button";

const snippetId = '#preview-discussion';

const scrollToPreview = ()=> {
  $('html, body').animate({
    scrollTop: $('#preview-discussion').offset().top
  }, 1000);
}

const snippet = `
    <li id="preview-discussion" role="article" aria-setsize="-1" aria-posinset="19">
        <div class="DiscussionListItem DiscussionListItem--sticky">
            <div class="DiscussionListItem-content Slidable-content read">
                <a href="/d/69-what-programming-language-to-learn-in-2024/8" class="DiscussionListItem-main">
                    <h2 class="DiscussionListItem-title" id="preview-snippet-title"></h2>
                    <ul class="DiscussionListItem-info">
                        <li class="item-excerptM" id="preview-snippet-body">
                        </li>
                    </ul>
                </a>
            </div>
        </div>
    </li>`;

const preview = () => {
  //m.route.set("/preview");

  $('#preview-snippet-title').slideToggle(function() {
    if ($('#preview-snippet-title').is(":visible")) {
      scrollToPreview();
    }
  });

};

export default function () {

  extend(TextEditor.prototype, 'oninit', function () {
    console.log("TextEditor OnInit");

    this.composer = app.composer;

    this.previewTimer = null;

    if(!this.attrs.preview) {
      $(".DiscussionList-discussions").append(snippet);
      $('#preview-snippet-title').hide();

      this.attrs.previewMode = true;

      this.previewTimer = setInterval(()=> {

        if ($('#preview-snippet-title').is(':visible')) {
          //console.log('#preview-snippet-title is visible');
          var otitle = this.composer.fields.title();
          var ocontent = this.composer.fields.content();
          s9e.TextFormatter.preview(ocontent, $('#preview-snippet-body')[0]);
          $('#preview-snippet-title').html(otitle);
        } else {
          //console.log('#preview-snippet-title is not visible');
        }
      },3000);
    }

  });

  extend(TextEditor.prototype, 'controlItems', function (items) {
    //console.log("TextEditor Add Control Items Here");

    if(!this.attrs.preview) {
      //console.log("Target composer");

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
    //console.log("TextEditor OnCreate");
  });

  extend(TextEditor.prototype, 'onremove', function (f_, vnode) {
    //console.log("TextEditor OnRemove");

    if(!this.attrs.preview) {
      $(snippetId).remove();
      clearInterval(this.previewTimer);
    }

  });
}
