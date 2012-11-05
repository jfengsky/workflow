<?php
/**
 * 有求必应合买版 支付确认页面
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
        css('assets/step/step','assets/pay/froze');
    }else if($_SERVER['HTTP_HOST'] == 'fed.ued.taobao.net'){
      fedcss($fed_url.'assets/step/step',$fed_url.'assets/pay/froze');
    }else{
        echo '<link rel="stylesheet" href="http://assets.daily.taobao.net/apps/c2bmarket/group/v1/assets/??step/step.css,pay/froze.css" />';  //UCool地址
    }
?>
<!-- 
  daily css地址
  <link rel="stylesheet" href="http://assets.daily.taobao.net/apps/c2bmarket/group/v1/assets/??step/step.css,pay/froze.css" />

  线上 css地址
  <link rel="stylesheet" href="http://assets.daily.taobao.net/apps/c2bmarket/group/v1/assets/??step/step-min.css,pay/froze-min.css" />
-->

<?php
  //吊顶
  require('inc/top_global.php');
?>

<?php
  require('step/step2.php');
  require('pay/froze.php');
?>


<script>
KISSY.config({
    packages:[
        {
            name:"assets",
            tag:"20120628",
            <?php
                if($_SERVER['HTTP_HOST'] == 'jfengsky.daily.taobao.net'){
                    echo 'path:"http://jfengsky.daily.taobao.net/c2bmarket/merger/"';
                }else{
                    echo 'path:"http://a.tbcdn.cn/apps/c2bmarket/group/v1/"';
                }

            ?>
        }
    ]
});
KISSY.use('assets/pay/mobilecheck');
</script>

<?php
  require('inc/footer.php');
?>