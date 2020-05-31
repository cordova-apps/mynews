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

function NewsCardGenerator(title, imgurl, newscontent, urllink) {
  var story = document.getElementById("news-list");
  story.appendChild(ons.createElement(
    '<ons-card class="news">' +
    '<img class="news-image" src="'+
    imgurl +
    '">' +
    '<div class="title news-title">' +
    title +
    '</div>' +
    '<div class="news-content">' +
    newscontent +
    '</div>' +
    '</ons-card>' 
  ));
}

function NewsList(newsdata){
  if (newsdata.status== "ok"){
    console.log("status: ok");
    console.log("totalResults: "+newsdata.totalResults);
    var story = document.getElementById("news-list");
    story.innerHTML = "";
    for (var i = 0; i < newsdata.totalResults; i++) {
      NewsCardGenerator(
        NewsDemo.articles[i].title,
        NewsDemo.articles[i].urlToImage,
        NewsDemo.articles[i].description,
        NewsDemo.articles[i].urlToImage
      );
    }
  } 
}

function requestdata(url) {
  ///////////////////////////
  function success() {
    var data = JSON.parse(this.responseText);
    console.log(data);
    return data;
}

function error(err) {
   console.log('Error Occurred :', err);
   document.getElementById("demo").innerHTML = "Error";
}

var xhr = new XMLHttpRequest();
xhr.onload = success;
xhr.onerror = error;
xhr.open('GET', url);
xhr.send();
}

var mynewsdata = [];
function GetNews(catagori, country){
//   http://newsapi.org/v2/top-headlines?country=in&category=Sports&apiKey=e7d779891ffd4a2081fdeb0e97fa8134
var apisecret = "e7d779891ffd4a2081fdeb0e97fa8134" 
if (country == undefined) country = "";
else country = "country="+ country + "&";
if (catagori == undefined) catagori = "category=General"+ "&";
else catagori = "category=" + catagori+ "&";

var apiurl = "https://newsapi.org/v2/top-headlines?" + country + catagori + "apiKey=" + apisecret
mynewsdata = requestdata(apiurl);
NewsList(mynewsdata);
}

NewsList(NewsDemo);
GetNews("General","in");
