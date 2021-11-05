(function () {
  // 游戏介绍页面轮播图数据
  var carouselData = [
    {
      image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp3.itc.cn%2Fimages01%2F20210302%2F46c3acce6bc14953b615433749988947.jpeg&refer=http%3A%2F%2Fp3.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638718485&t=02b795f4c3b6775923575f7d0f320120",
    },
    {
      image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-1b6b8c6561699a75850917d3a04eebe3_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638717428&t=40e484198d6156b711644baee085d681",
    },
    {
      image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0813%2F8876b2ebp00qxr9qr007hc000go00p0m.png%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638717666&t=b04d58d4f841cf7dfc7644c77501d9b1https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F0813%2F8876b2ebp00qxr9qr007hc000go00p0m.png%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638717666&t=b04d58d4f841cf7dfc7644c77501d9b1",
    },
    {
      image: "https://pic2.zhimg.com/v2-2ba7215b79fda9c0a901373a1716b561_1440w.jpg?source=172ae18b",
    },
    {
      image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2FPgj2FOn7HwBtRklM__5Ljb6zYSDC-uoI3RqzlmooBQtoQV_tIe8ZeoH02UkpN9md0pWA5k_Rl4JOAjKzyGaYog.jpg&refer=http%3A%2F%2Fqcloud.dpfile.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638717428&t=7c5dd8896e5a99a75f02d3fd46f8b93d",
    },
    {
      image: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp7.itc.cn%2Fq_70%2Fimages01%2F20210104%2Fb8633f5f241a4a9f8d8698535832406d.jpeg&refer=http%3A%2F%2Fp7.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638717428&t=d7ddd8d9dc006060e4e1ffd5b3e8476e",
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
