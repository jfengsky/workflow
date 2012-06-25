<?php
/**
 * Ê×Ò³
 * Author: wb-jiangfeng
 * Time: 12-6-11 ÏÂÎç4:02
 *
 */
?>
<?php
    require('inc/header.php');
?>
<?php
    if($_SERVER['HTTP_HOST'] == 'jfeng.daily.taobao.net' || $_SERVER['HTTP_HOST'] == 'localhost'){
        echo '<link rel="stylesheet" href="http://localhost/combo/?p=http://localhost/ying/DEMO/assets/mods/&s=dpl.css,top.css,index_top.css,index_count.css,index_hot.css,index_main.css,sidetop.css,footer.css&t=css&compress" />';
    }else{
        echo '<link rel="stylesheet" href="http://fed.ued.taobao.net/u/jiangfeng/ying/v1/assets/index-min.css" />';
        //echo '<link rel="stylesheet" href="http://a.tbcdn.cn/apps/c2bmarket/ying/v1/index-min.css" />';
    }
?>

<?php
    require('inc/top.php');
?>
<div class="index_top">
<div class="wide">
        <?php
        require('index/switchable.php');
        require('index/count.php');
        ?>
    </div>
</div>
<?php
require('index/hot.php');
?>
<div class="index_main">
    <div class="l">
        <?php
        require('index/publish.php');
        ?>
    </div>
    <div class="r">
        <?php
        require('index/type.php');
        ?>
    </div>
</div>
<?php
require('inc/backtop.php');
?>
<script>
KISSY.config({
    packages:[
        {
            name:"assets",
            tag:"20120615",
            <?php
                if($_SERVER['HTTP_HOST'] == 'jfeng.daily.taobao.net' || $_SERVER['HTTP_HOST'] == 'localhost'){
                    echo 'path:"http://localhost/ying/DEMO/"';
                }else{
                    echo 'path:"http://fed.ued.taobao.net/u/jiangfeng/ying/v1/"';
                    //echo 'http://a.tbcdn.cn/apps/c2bmarket/ying/v1/"';
                }
            ?>
        }
    ]
});
KISSY.use('assets/index');
</script>

<!-- <script src="http://jfeng.daily.taobao.net/combo/?p=http://jfeng.daily.taobao.net/ying/DEMO/assets/mods/&s=index.js,login.js&t=js&compress"></script> -->
<?php
    require('inc/footer.php');
?>