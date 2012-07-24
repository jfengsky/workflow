<?PHP
/**
 * 有求必应公益版 冻结支付页面
 * @author: jfeng <jfengsky@gmail.com>
 * @time  : 2012-07-18 14:49
 * @return: 
 */
?>
<?php
	require('inc/header.php');
?>

<?php
	//根据环境载入css
	if($_SERVER['HTTP_HOST'] == 'jfengsky.daily.taobao.net'){
        css('assets/mods/top/top','assets/mods/dpl/dpl','assets/mods/step/step','assets/mods/pay/pay','assets/mods/footer/footer');
    }else{
        echo '<link rel="stylesheet" href="http://a.tbcdn.cn/apps/c2bmarket/gongyi/v1/assets/pay-min.css" />';	//UCool地址
    }
?>
<?php
	//吊顶
	require('inc/top_global.php');
?>

<?php
	//公共顶部
    require('inc/top.php');
?>
<?php
	//拍卖步骤
    require('step/step2.php');
?>

<?php
	//支付宝
    require('pay/pay.php');
?>




















<script>
KISSY.config({packages:[{
	name:"assets",
	tag:"20120723",
    <?php
		//根据环境载入css
		if($_SERVER['HTTP_HOST'] == 'jfengsky.daily.taobao.net'){
	        echo 'path:"http://jfengsky.daily.taobao.net/gongyi/"';
	    }else{
	        echo 'path:"http://a.tbcdn.cn/apps/c2bmarket/gongyi/"';
	    }
	?>
	}]
});
KISSY.use('assets/pay');
</script>



<?php
	require('inc/footer.php');
?>