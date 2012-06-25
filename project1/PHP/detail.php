<?php
/**
 * 需求详情页面
 * Author: wb-jiangfeng
 * Time: 12-6-13 下午1:05
 *
 */
?>

<?php
require('inc/header.php');
?>
<?php
if($_SERVER['HTTP_HOST'] == 'jfeng.daily.taobao.net' || $_SERVER['HTTP_HOST'] == 'localhost'){
    echo '<link rel="stylesheet" href="http://jfeng.daily.taobao.net/combo/?p=http://jfeng.daily.taobao.net/ying/DEMO/assets/mods/&s=dpl.css,top.css,index_top.css,history.css,detail_info.css,detail_product.css,dpl_toubiao.css,footer.css&t=css&compress" />';
}else{
    echo '<link rel="stylesheet" href="http://fed.ued.taobao.net/u/jiangfeng/ying/v1/assets/detail-min.css" />';
    //echo '<link rel="stylesheet" href="http://a.tbcdn.cn/apps/c2bmarket/ying/v1/detail-min.css" />';
}
?>
<?php
require('inc/top.php');
require('inc/history.php');
?>

<?php
require('detail/info.php');
require('detail/product_list.php');
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
    KISSY.use('assets/detail');
</script>



<?php
require('inc/footer.php');
?>