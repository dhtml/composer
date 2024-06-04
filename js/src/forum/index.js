// js/src/forum/index.js
const multiplier = 1.75

function loadMoreIfNeeded() {
  const distanceToBottom = -(
    (document.body.scrollHeight || document.documentElement.scrollHeight) -
    (document.body.scrollTop ||
      document.documentElement.scrollTop +
        document.documentElement.clientHeight)
  );

  if (distanceToBottom > document.documentElement.clientHeight * multiplier) return;

  $(".DiscussionList-loadMore button").click();
}

document.addEventListener("scroll", loadMoreIfNeeded, { passive: true });