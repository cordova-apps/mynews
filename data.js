
/*
git remote add origin 
git add .
git status
git commit -m "first commit"
git push -u origin master

git add . && git commit -m "first commit" && git push -u origin master
*/


var Catagories = [{
        "categorieName": "General",
        "imageAssetUrl": "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
        "categorieName": "Business",
        "imageAssetUrl": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"
    },
    {
        "categorieName": "Entertainment",
        "imageAssetUrl": "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    },
    {
        "categorieName": "Health",
        "imageAssetUrl": "https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1595&q=80"
    },
    {
        "categorieName": "Science",
        "imageAssetUrl": "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80"
    },
    {
        "categorieName": "Sports",
        "imageAssetUrl": "https://images.unsplash.com/photo-1495563923587-bdc4282494d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
        "categorieName": "Technology",
        "imageAssetUrl": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
    }
]

var NewsDemo = {
    "status": "ok",
    "totalResults": 2,
    "articles": [
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Anthony Ha",
            "title": "Daily Crunch: Twitter vs. Trump",
            "description": "Tensions escalate between President Trump and his favorite social media platform, Google and Microsoft considering investing in the Indian telecom market and the Raspberry Pi foundation announces a new Raspberry Pi. Here’s your Daily Crunch for May 28, 2020. …",
            "url": "https://techcrunch.com/2020/05/28/daily-crunch-twitter-vs-trump/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/01/GettyImages-1027291750.jpg?w=600",
            "publishedAt": "2020-05-28T17:04:53Z",
            "content": "Tensions escalate between President Trump and his favorite social media platform, Google and Microsoft considering investing in the Indian telecom market and the Raspberry Pi foundation announces a n… [+3155 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sarah Perez",
            "title": "YouTube introduces Video Chapters to make it easier to navigate through longer videos",
            "description": "If you’ve ever found yourself scrubbing your way through a long YouTube video to get to the “good” part, you’ll appreciate the new feature YouTube is launching today: Video Chapters. The feature uses timestamps that creators apply to their videos, allowing vi…",
            "url": "https://techcrunch.com/2020/05/28/youtube-introduces-video-chapters-to-make-it-easier-to-navigate-through-longer-videos/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/10/youtube-ios-app.jpg?w=712",
            "publishedAt": "2020-05-28T17:00:27Z",
            "content": "If you’ve ever found yourself scrubbing your way through a long YouTube video to get to the “good” part, you’ll appreciate the new feature YouTube is launching today: Video Chapters. The feature uses… [+3228 chars]"
        }
    ]
}