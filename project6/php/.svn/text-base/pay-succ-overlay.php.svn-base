<?php
/**
 * 有求必应合买版 支付成功页面
 * @author : wb-jiangfeng@taobao.com 
 * @time: 2012-10-23 10:36
 * 
 */
?>
<?php
  require('inc/header.php');
?>
<?php
  if($_SERVER['HTTP_HOST'] == 'jfengsky.daily.taobao.net'){
        css('assets/step/step','assets/pay/succ','assets/pay/overlay-bag');
    }else if($_SERVER['HTTP_HOST'] == 'fed.ued.taobao.net'){
      fedcss($fed_url.'assets/step/step',
        $fed_url.'assets/pay/succ',
        $fed_url.'assets/pay/overlay-bag');
    }else{
        echo '<link rel="stylesheet" href="http://assets.daily.taobao.net/apps/c2bmarket/group/v1/assets/??step/step.css,pay/succ.css,pay/overlay-bag.css" />';  //UCool地址
    }
?>
<!-- 
  daily css地址
  <link rel="stylesheet" href="http://assets.daily.taobao.net/apps/c2bmarket/group/v1/assets/??step/step.css,pay/succ.css,pay/overlay-bag.css" />

  线上 css地址
  <link rel="stylesheet" href="http://assets.daily.taobao.net/apps/c2bmarket/group/v1/assets/??step/step-min.css,pay/succ-min.css,pay/overlay-bag-min.css" />
-->

<?php
  //吊顶
  require('inc/top_global.php');
?>

<?php
  require('step/step3.php');
  require('pay/succ3.php');
?>

<div class="" style="position:absolute;background-color:#000;opacity:0.4;width:100%;height:1000px;;left:0;top:26px;z-index:10001"></div>
<div class="" style="position:absolute;top:10%;left:50%;width:550px;height:320px;margin-left:-225px;z-index:10002">
  <?php
  require('pay/overlay.php');
?>
</div>
<div class="" style="position:absolute;top:70%;left:50%;width:550px;height:320px;margin-left:-225px;z-index:10002">
  <?php
  require('pay/overlay2.php');
?>
</div>
<?php
  require('inc/footer.php');
?>