(()=>{var e={n:t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},d:(t,i)=>{for(var o in i)e.o(i,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:i[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const i=flarum.core.compat["forum/app"];var o=e.n(i);const n=flarum.core.compat["common/extend"],s=flarum.core.compat["common/components/TextEditor"];var r=e.n(s);const p=flarum.core.compat["common/components/Tooltip"];var c=e.n(p);const a=flarum.core.compat["common/components/Button"];var l=e.n(a),d=function(){$("#preview-snippet-title").slideToggle((function(){$("#preview-snippet-title").is(":visible")&&$("html, body").animate({scrollTop:$("#preview-discussion").offset().top},1e3)}))};flarum.core.compat["common/Component"],o().initializers.add("dhtml-composer",(function(){(0,n.extend)(r().prototype,"oninit",(function(){var e=this;console.log("TextEditor OnInit"),this.composer=o().composer,this.previewTimer=null,this.attrs.preview||($(".DiscussionList-discussions").append('\n    <li id="preview-discussion" role="article" aria-setsize="-1" aria-posinset="19">\n        <div class="DiscussionListItem DiscussionListItem--sticky">\n            <div class="DiscussionListItem-content Slidable-content read">\n                <a href="/d/69-what-programming-language-to-learn-in-2024/8" class="DiscussionListItem-main">\n                    <h2 class="DiscussionListItem-title" id="preview-snippet-title"></h2>\n                    <ul class="DiscussionListItem-info">\n                        <li class="item-excerptM" id="preview-snippet-body">\n                        </li>\n                    </ul>\n                </a>\n            </div>\n        </div>\n    </li>'),$("#preview-snippet-title").hide(),this.attrs.previewMode=!0,this.previewTimer=setInterval((function(){if($("#preview-snippet-title").is(":visible")){var t=e.composer.fields.title(),i=e.composer.fields.content();s9e.TextFormatter.preview(i,$("#preview-snippet-body")[0]),$("#preview-snippet-title").html(t)}}),3e3))})),(0,n.extend)(r().prototype,"controlItems",(function(e){this.attrs.preview||e.add("preview",m(c(),{text:o().translator.trans("core.forum.composer.preview_tooltip")},m(l(),{icon:"far fa-eye",className:"Button Button--icon",onclick:d})),-1)})),(0,n.extend)(r().prototype,"oncreate",(function(e,t){})),(0,n.extend)(r().prototype,"onremove",(function(e,t){this.attrs.preview||($("#preview-discussion").remove(),clearInterval(this.previewTimer))}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map