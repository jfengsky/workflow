<?php
/**
 * 样式 覆层等模板文件
 * Author: wb-jiangfeng
 * Time: 12-6-14 上午10:50
 *
 */
?>
<?php
require('inc/header.php');
?>
<?php
    if($_SERVER['HTTP_HOST'] == 'jfeng.daily.taobao.net' || $_SERVER['HTTP_HOST'] == 'localhost'){
        echo '<link rel="stylesheet" href="http://jfeng.daily.taobao.net/combo/?p=http://jfeng.daily.taobao.net/ying/DEMO/assets/mods/&s=dpl.css,top.css,index_top.css,dpl_toubiao.css,bindalipay.css,attachments.css,publish_model.css,footer.css&t=css&compress" />';
    }else{
        echo '<link rel="stylesheet" href="http://fed.ued.taobao.net/u/jiangfeng/ying/v1/assets/publish-min.css" />';
        //echo '<link rel="stylesheet" href="http://a.tbcdn.cn/apps/c2bmarket/ying/v1/index-min.css" />';
    }
?>
<style>
    body{
        height: 4000px;
    }
</style>
<?php
require('inc/top.php');
?>
<div style="height: 4000px;width:100%;background-color: #333;position: absolute;left:0;top:0;z-index: 10001;filter:alpha(opacity=50);opacity:0.5;"></div>
<br />

<div style="position:absolute;top:10%;left:50%;margin-left:-300px;z-index: 10002">
    <?php
        require('inc/toubiao.php');
    ?>
</div>

<div style="position:absolute;top:110%;left:50%;margin-left:-300px;z-index: 10002">
    <?php
    require('inc/success.php');
    ?>
</div>
<div style="position:absolute;top:173%;left:50%;margin-left:-300px;z-index: 10002">
    <?php
    require('inc/bindalipay_poplayer1.php');
    ?>
    <?php
        require('inc/bindalipay_poplayer2.php');
     ?>
</div>
<div style="position:absolute;top:303%;left:50%;margin-left:-300px;z-index: 10002">
    <?php
    require('inc/attachments.php');
    ?>
</div>

<div style="position:absolute;top:400%;left:50%;margin-left:-300px;z-index: 10002">
    <?php
        require('publish/overlay_model.php');
    ?>
</div>
<?php
require('inc/footer.php');
?>