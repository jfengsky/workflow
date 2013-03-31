<?php
/**
 * 有求必应合买版 1212活动页面
 * @author : wb-jiangfeng@taobao.com 
 * @time: 2012-11-15 19:03
 * 
 */
?>
<?php
  require('inc/header.php');
?>
<?php
  if($_SERVER['HTTP_HOST'] == 'jfengsky.daily.taobao.net'){
        css('assets/dpl','assets/index/index','assets/index/share');
    }else if($_SERVER['HTTP_HOST'] == 'fed.ued.taobao.net'){
        fedcss($fed_url.'assets/dpl',
          $fed_url.'assets/index/index',
          $fed_url.'assets/index/share'
          );
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
  require('inc/global.php');
  require('index/index.php');
?>


<script>
KISSY.config({
    packages:[
        {
            name:"assets",
            tag:"20120628",
            <?php
                if($_SERVER['HTTP_HOST'] == 'jfengsky.daily.taobao.net'){
                    echo 'path:"http://jfengsky.daily.taobao.net/c2bmarket/1212/"';
                }else{
                    echo 'path:"http://a.tbcdn.cn/apps/c2bmarket/group/v1/"';
                }
            ?>
        }
    ]
});
KISSY.use('assets/index');
</script>
<?php
  require('inc/footer.php');
?>