<?PHP
/**
 * 有求必应公益版 卖家竞标页面
 * @author: jfeng <jfengsky@gmail.com>
 * @time  : 2012-07-20 18:55
 * @return: 
 */
?>
<?php
	require('inc/header.php');
?>
<?php
	//根据环境载入css
	if($_SERVER['HTTP_HOST'] == 'jfengsky.daily.taobao.net'){
        css('assets/mods/top/top','assets/mods/dpl/dpl','assets/mods/detail/top','assets/mods/bid/bid','assets/mods/footer/footer');
    }else{
        echo '<link rel="stylesheet" href="http://a.tbcdn.cn/apps/c2bmarket/gongyi/v1/assets/bid-min.css" />';	//UCool地址
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
<div class="bid">
	<?php
	//项目banner
    require('detail/top.php');
	?>
	<?php
	//采购产品
    require('bid/left1.php');
	?>
	<?php
	//右侧进度条
    require('bid/right1.php');
	?>
</div>
























<?php
	require('inc/footer.php');
?>