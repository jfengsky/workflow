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
        css('assets/step/step','assets/pay/succ');
    }else if($_SERVER['HTTP_HOST'] == 'fed.ued.taobao.net'){
      fedcss($fed_url.'assets/step/step',$fed_url.'assets/pay/succ');
    }else{
        echo '<link rel="stylesheet" href="http://assets.daily.taobao.net/apps/c2bmarket/group/v1/assets/??step/step.css,pay/succ.css" />';  //UCool地址
    }
?>
<!-- 
  daily css地址
  <link rel="stylesheet" href="http://assets.daily.taobao.net/apps/c2bmarket/group/v1/assets/??step/step.css,pay/succ.css" />

  线上 css地址
  <link rel="stylesheet" href="http://assets.daily.taobao.net/apps/c2bmarket/group/v1/assets/??step/step-min.css,pay/succ-min.css" />
-->
<?php
  //吊顶
  require('inc/top_global.php');
?>

<?php
  require('step/step3.php');
  require('pay/succ2.php');
?>


<?php
  require('inc/footer.php');
?>