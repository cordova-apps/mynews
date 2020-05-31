
function StoryBubbles() {
  var story = document.getElementById("stories2");

  for (var i = 0; i < Catagories.length; i++) {
    story.appendChild(ons.createElement(
      '<ons-carousel-item id="item' +
      i +
      '" style="" class="buttons1">' +
      Catagories[i].categorieName +
      '</ons-carousel-item>'
    ));
    var element = document.getElementById("item" + i);
    element.style.width = "30px";

  }
}
StoryBubbles();

function NewsCardGenerator() {
  var story = document.getElementById("news-list");
  story.appendChild(ons.createElement(
    '<ons-card class="news">' +
    '<img class="news-image" src="https://onsen.io/playground/assets/img/post-01.jpg">' +
    '<div class="title news-title">' +
    'YouTube introduces Video Chapters to make it easier to navigate through longer videos' +
    '</div>' +
    '<div class="news-content">' +
    'Tensions escalate between President Trump and his favorite social media platform, Google and Microsoft considering investing in the Indian telecom market and the Raspberry Pi foundation announces a new Raspberry Pi. Here’s your Daily Crunch for May 28, 2020. …' +
    '</div>' +
    '</ons-card>' 
  ));
}

NewsCardGenerator();
NewsCardGenerator();
NewsCardGenerator();
NewsCardGenerator();


/*
git remote add origin 
git add .
git status
git commit -m "first commit"
git push -u origin master
*/