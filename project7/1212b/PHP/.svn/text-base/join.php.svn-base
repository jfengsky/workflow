<?php
/**
 * 1212活动页面 参与合买
 * @author: wb-jiangfeng <wb-jiangfeng@taobao.com>
 * @time  : 2012-11-26 10:42
 * @return: 
 */
?>
<?php
  require('inc/header.php');
?>
<link rel="stylesheet" type="text/css" href="../assets/step/step.css" />
<link rel="stylesheet" type="text/css" href="../assets/category/category.css" />
<link rel="stylesheet" type="text/css" href="../assets/category/countdown.css" />
<link rel="stylesheet" type="text/css" href="../assets/gongyi/gongyi.css" />
<link rel="stylesheet" type="text/css" href="../assets/sidebar/rightbar.css" />
<link rel="stylesheet" type="text/css" href="../assets/sidebar/bottombar.css" />
<?php
  require('step/step.php');
  require('category/category2.php');
  require('gongyi/gongyi.php');
  require('sidebar/rightbar.php');
  require('sidebar/bottombar.php');
?>
<script>
KISSY.config({
    packages:[
        {
            name:"assets",
            tag:"20120628",
            path:"http://jfengsky.daily.taobao.net/c2bmarket/1212b/"
        }
    ]
});
KISSY.use('assets/join');
KISSY.config({
  packages:[ {
      name:"gallery",
      path:"http://a.tbcdn.cn/s/kissy/",
      charset:"utf-8"
    } ]
});
KISSY.use("gallery/countdown/1.2/index",function(S, Countdown){
    S.all('#J_c2bcategory .cd').each(function(node) {
      Countdown(node, {
          effect: 'slide',
          _clock: ['d', 100, 2, 'h', 100, 2, 'm', 60, 2, 's', 60, 2, 'u', 10, 1]
      });
    });
});
</script>
<?php
  require('inc/footer.php');
?>