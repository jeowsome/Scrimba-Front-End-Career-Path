import { tweetsData } from "./data.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

const tweetInput = document.getElementById("tweet-input");
const feedEl = document.getElementById("feed");

document.onclick = (e) => {
  const {
    dataset: { reply, like, retweet },
    id,
  } = e.target;
  if (like) {
    handleLikeClick(like);
    render();
  } else if (retweet) {
    handleRetweetClick(retweet);
    render();
  } else if (id == "tweet-btn") {
    handleTweetBtnClick();
    render();
  }

  if (reply) {
    handleReplyClick(reply);
  }
};

function handleLikeClick(tweetId) {
  const [targetTweetObj] = tweetsData.filter((e) => e.uuid === tweetId);
  targetTweetObj.isLiked ? targetTweetObj.likes-- : targetTweetObj.likes++;
  targetTweetObj.isLiked = !targetTweetObj.isLiked;
}

function handleRetweetClick(tweetId) {
  const [targetTweetObj] = tweetsData.filter((e) => e.uuid === tweetId);
  targetTweetObj.isRetweeted
    ? targetTweetObj.retweets--
    : targetTweetObj.retweets++;
  targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted;
}

function handleReplyClick(replyId) {
  let replyEl = document.getElementById(`replies-${replyId}`);

  if (replyEl) {
    replyEl.classList.toggle("hidden");
  }
}

function handleTweetBtnClick() {
  if (tweetInput.value) {
    tweetsData.unshift({
      handle: `@Jeowsome`,
      profilePic: `images/scrimbalogo.png`,
      likes: 0,
      retweets: 0,
      tweetText: tweetInput.value,
      replies: [],
      isLiked: false,
      isRetweeted: false,
      uuid: uuidv4(),
    });
    tweetInput.value = "";
  }
}

function getHTMLFeed() {
  return tweetsData
    .map(
      ({
        handle,
        tweetText,
        profilePic,
        replies,
        likes,
        retweets,
        uuid,
        isLiked,
        isRetweeted,
      }) => `<div class="tweet">
    <div class="tweet-inner">
        <img src="${profilePic}" class="profile-pic">
        <div>
            <p class="handle">${handle}</p>
            <p class="tweet-text">${tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                <i class="fa-regular fa-comment-dots" data-reply="${uuid}"></i>
                    ${replies.length}
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-heart ${
                  isLiked ? "liked" : ""
                }" data-like="${uuid}"></i>
                    ${likes}
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-retweet ${
                  isRetweeted ? "retweeted" : ""
                }" data-retweet="${uuid}"></i>
                    ${retweets}
                </span>
            </div>   
        </div>            
    </div>
</div>
${
  replies.length > 0
    ? `<div id="replies-${uuid}" class="hidden">
    ${replies
      .map(
        ({ handle, profilePic, tweetText }) => `<div class="tweet-reply">
    <div class="tweet-inner">
        <img src="${profilePic}" class="profile-pic">
            <div>
                <p class="handle">${handle}</p>
                <p class="tweet-text">${tweetText}</p>
            </div>
        </div>
</div>`
      )
      .join("")}
</div>`
    : ""
}`
    )
    .join("");
}

function render() {
  feedEl.innerHTML = getHTMLFeed();
}

render();
