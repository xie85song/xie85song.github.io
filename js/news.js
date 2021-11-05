(function () {
  // 搞定轮播图
  // 轮播图的数据
  var carouselDatas = [
    {
      link:
        "https://haokan.baidu.com/v?vid=12863856496937173792&pd=pcshare",
      image:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp7.itc.cn%2Fq_70%2Fimages01%2F20210305%2Faf459735b04a4fa880218045bd684952.png&refer=http%3A%2F%2Fp7.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638538066&t=f97cf52a80d77d38ee3da97a6d8ecb0f",
    },
    {
      link:
        "https://haokan.baidu.com/v?vid=12863856496937173792&pd=pcshare",
      image:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp9.itc.cn%2Fq_70%2Fimages01%2F20210623%2F5214dcc6eaca4f10bdc92fcda5c40c78.png&refer=http%3A%2F%2Fp9.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638720858&t=b3f209ff9370ff6847296bdf66852935",
    },
    {
      link:
        "https://haokan.baidu.com/v?vid=12863856496937173792&pd=pcshare",
      image:
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp3.itc.cn%2Fq_70%2Fimages01%2F20210628%2F47370e850ef149e18e78c5c7730a2692.png&refer=http%3A%2F%2Fp3.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1638537820&t=16b987874d42e99e7a9ead8466a862da",
    },
  ];
  createCarousel("newsCarousel", carouselDatas);
})();
