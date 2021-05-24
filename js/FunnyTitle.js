<!--浏览器搞笑标题-->
  var OriginTitle = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      $('[rel="icon"]').attr('href', "/img/failure.ico");
        document.title = 'ヽ(●-`Д´-)ノ你丑你就走！';
        clearTimeout(titleTime);
      }
    else {
      $('[rel="icon"]').attr('href', "/img/favicon.png");
      document.title = '(/≧▽≦/)咦！又好了 ' + OriginTitle;
      titleTime = setTimeout(function () {
          document.title = OriginTitle;
      }, 2000);
    }
 });