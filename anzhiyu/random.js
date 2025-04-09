var posts=["2025/03/30/哲风壁纸/","2025/04/05/Hexo博客部署/","2025/04/04/番剧网站/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };