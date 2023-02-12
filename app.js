const likeButton = document.querySelector(".like-button");
const likesCount = document.querySelector(".likes-count");

let likes = 0;

likeButton.addEventListener("click", function(){
  likes++;
  likesCount.textContent = likes;
});
