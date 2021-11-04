(function () {
  // 游戏介绍页面轮播图数据
  var carouselData = [
    {
      image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic3.zhimg.com%2Fv2-573fbfa31d6f0b1d801f53b7ffad257e_b.jpg&refer=http%3A%2F%2Fpic3.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638552014&t=0fe6ea28a7892562e5ca6b384216f757",
    },
    {
      image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp1.itc.cn%2Fimages01%2F20210402%2Fb44bd5f151f948af933b85c4a4fc2e7a.jpeg&refer=http%3A%2F%2Fp1.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638552014&t=db8751963455c3f50cba22a4e37d6491",
    },
    {
      image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fci.xiaohongshu.com%2Feab92586-038c-77cd-9630-2a013634f825%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fci.xiaohongshu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638552133&t=343367920aa251516aaadbe4fadeaa4d",
    },
    {
      image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ncjmcc.com%2Fuploads%2F210302%2F1-210302140325344.jpg&refer=http%3A%2F%2Fwww.ncjmcc.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638552228&t=e43d50f42258a2e551ab47f5504f4be3",
    },
    {
      image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fci.xiaohongshu.com%2F07577a60-260d-e011-0f70-4307aef65f46%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fci.xiaohongshu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638552270&t=2a8277e38f7f08a88f43dd2895f25b42",
    },
    {
      image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fci.xiaohongshu.com%2F28bfe131-5b51-da91-24af-54e9a1b7c068%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fci.xiaohongshu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638552295&t=3ed9fe8c6c648ce8561b4cd42d62e531",
    },
  ];
  createCarousel("gameCarousel", carouselData);

  var container = $(".game_container");

  container.ontouchstart = function (e) {
    if (container.scrollTop >= 10) {
      // 滑动的位置已经不在顶部了
      e.stopPropagation(); // 阻止事件冒泡
    }
  };
})();
