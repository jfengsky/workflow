<?php
/**
 * 有求必应合买版 发布页面
 * wb-jiangfeng 2012-10-15 14:46
 * 
 */
?>
<?php
  require('inc/header.php');
?>

<?php
  if($_SERVER['HTTP_HOST'] == 'jfengsky.daily.taobao.net'){
        css('assets/step/step','assets/item-info/item-info','assets/item-info/item-price');
    }else if($_SERVER['HTTP_HOST'] == 'fed.ued.taobao.net'){
      fedcss($fed_url.'assets/step/step',
        $fed_url.'assets/item-info/item-info',
        $fed_url.'assets/item-info/item-price');
    }else{
      echo '<link rel="stylesheet" href="http://assets.daily.taobao.net/apps/c2bmarket/group/v1/assets/??step/step.css,item-info/item-info.css,item-info/item-price.css" />';
    }
?>
<!-- 
  daily css地址
  <link rel="stylesheet" href="http://assets.daily.taobao.net/apps/c2bmarket/group/v1/assets/??step/step.css,item-info/item-info.css,item-info/item-price.css" />

  线上 css地址
  <link rel="stylesheet" href="http://assets.daily.taobao.net/apps/c2bmarket/group/v1/assets/??step/step-min.css,item-info/item-info-min.css,item-info/item-price-min.css" />
-->
<?php
  //吊顶
  require('inc/top_global.php');
?>
<?php
  //拍卖步骤
    require('step/step.php');
    require('item-info/item-info.php');
    require('item-info/pub-info.php');
?>



<?php
  require('inc/footer.php');
?>