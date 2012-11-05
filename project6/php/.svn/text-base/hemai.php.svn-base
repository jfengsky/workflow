<?php
/**
 * 有求必应合买版 首页
 * @author : wb-jiangfeng@taobao.com 
 * @time: 2012-10-22 9:59
 * 
 */
?>
<?php
  require('inc/header.php');
?>
<?php
  if($_SERVER['HTTP_HOST'] == 'jfengsky.daily.taobao.net'){
        css('assets/index/index');
    }else if($_SERVER['HTTP_HOST'] == 'fed.ued.taobao.net'){
      fedcss($fed_url.'assets/index/index');
    }else{
        echo '<link rel="stylesheet" href="http://assets.daily.taobao.net/apps/c2bmarket/group/v1/assets/??index/index.css" />';
    }
?>
<!-- 
  daily css地址
  <link rel="stylesheet" href="http://assets.daily.taobao.net/apps/c2bmarket/group/v1/assets/??index/index.css" />

  线上 css地址
  <link rel="stylesheet" href="http://a.tbcdn.cn/apps/c2bmarket/group/v1/assets/??index/index-min.css" />
-->
<?php
  //吊顶
  require('inc/top_global.php');
?>

<?php
  require('index/index.php');
?>


<?php
  require('inc/footer.php');
?>