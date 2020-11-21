let devicesAnimation = document.querySelectorAll(".devices-animation");
let replayAnimationBtn = document.querySelector(".play-animation");

function onReplayAnimBtn() {
  for (let i = 0; i < devicesAnimation.length; i++) {
    devicesAnimation[i].style.display = "none";
    setTimeout(function () {
      devicesAnimation[i].style.display = "block";
    });
  }
}

if (replayAnimationBtn) {
  replayAnimationBtn.addEventListener("click", onReplayAnimBtn);
}
