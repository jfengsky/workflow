<?php
/**
 * 支付宝付款页面
 * Author: wb-jiangfeng
 * Time: 12-6-14 下午3:08
 *
 */
?>
<?php
require('inc/header.php');
?>
<?php
    if($_SERVER['HTTP_HOST'] == 'jfeng.daily.taobao.net' || $_SERVER['HTTP_HOST'] == 'localhost'){
        echo '<link rel="stylesheet" href="http://localhost/combo/?p=http://localhost/ying/DEMO/assets/mods/&s=dpl.css,top.css,index_top.css,step.css,pay_step.css,footer.css&t=css&compress" />';
    }else{
        echo '<link rel="stylesheet" href="http://fed.ued.taobao.net/u/jiangfeng/ying/v1/assets/pay-min.css" />';
        //echo '<link rel="stylesheet" href="http://a.tbcdn.cn/apps/c2bmarket/ying/v1/pay-min.css" />';
    }
?>
<?php
require('inc/top.php');
require('pay/pay1.php');
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
    KISSY.use('assets/pay');
</script>
<?php
    require('inc/footer.php');
?>