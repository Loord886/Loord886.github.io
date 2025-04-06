var posts=["2025/04/04/番剧网站/","2025/03/30/哲风壁纸/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };