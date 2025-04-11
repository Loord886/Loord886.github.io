var posts=["2025/04/11/Hexo博客优化：如何优化Hexo的网站性能？/","2025/04/09/Hexo博客部署/","2025/04/10/Hexo搭建进阶：Vercel部署、主题安装、基础用法/","2025/03/30/哲风壁纸/","2025/04/04/番剧网站/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };