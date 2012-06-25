<?php
/**
 * 需求列表页面
 * Author: wb-jiangfeng
 * Time: 12-6-12 下午12:29
 *
 */
?>
<?php
require('inc/header.php');
?>
<?php
    if($_SERVER['HTTP_HOST'] == 'jfeng.daily.taobao.net' || $_SERVER['HTTP_HOST'] == 'localhost'){
        echo '<link rel="stylesheet" href="http://jfeng.daily.taobao.net/combo/?p=http://jfeng.daily.taobao.net/ying/DEMO/assets/mods/&s=dpl.css,top.css,index_top.css,history.css,list_left.css,page.css,footer.css&t=css&compress" />';
    }else{
        echo '<link rel="stylesheet" href="http://fed.ued.taobao.net/u/jiangfeng/ying/v1/assets/list-min.css" />';
        //echo '<link rel="stylesheet" href="http://a.tbcdn.cn/apps/c2bmarket/ying/v1/index-min.css" />';
    }
?>

<?php
require('inc/top.php');
require('inc/history.php');
?>
<div class="main-list">
    <?php
    require('list/type_list.php');
    ?>
</div>



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
    KISSY.use('assets/list');
</script>





<?php
require('inc/footer.php');
?>