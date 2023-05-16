import { tweetsData } from "./data.js";

const tweetBtn = document.getElementById("tweet-btn");
const tweetInput = document.getElementById("tweet-input");
const feedEl = document.getElementById("feed");

tweetBtn.onclick = () => {
  console.log(getHTMLFeed());
};

document.onclick = (e) => {
  const {
    dataset: { reply, like, retweet },
  } = e.target;
  if (like) {
    handleLikeClick(like);
  } else if (retweet) {
    handleRetweetClick(retweet);
  }
  render();
};

function handleLikeClick(tweetId) {
  const [targetTweetObj] = tweetsData.filter((e) => e.uuid === tweetId);
  targetTweetObj.isLiked ? targetTweetObj.likes-- : targetTweetObj.likes++;
  targetTweetObj.isLiked = !targetTweetObj.isLiked;

  console.log(targetTweetObj.likes);
}

function handleRetweetClick(tweetId) {
  const [targetTweetObj] = tweetsData.filter((e) => e.uuid === tweetId);
  targetTweetObj.isRetweeted
    ? targetTweetObj.retweets--
    : targetTweetObj.retweets++;
  targetTweetObj.isRetweeted = !targetTweetObj.isRetweeted;
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
</div>`
    )
    .join("");
}

function render() {
  feedEl.innerHTML = getHTMLFeed();
}

render();
