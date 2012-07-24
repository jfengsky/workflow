<?PHP
/**
 * 有求必应公益版 首页
 * @author: jfeng <jfengsky@gmail.com>
 * @time  : 2012-07-16 16:33
 * @return: 
 */
?>
<?php
	require('inc/header.php');
?>

<?php
	if($_SERVER['HTTP_HOST'] == 'jfengsky.daily.taobao.net'){
        css('assets/mods/top/top','assets/mods/dpl/dpl','assets/mods/footer/footer');
    }else{
        echo '<link rel="stylesheet" href="http://a.tbcdn.cn/apps/c2bmarket/gongyi/v1/assets/index-min.css" />';	//UCool地址
    }
?>
<?php
	require('inc/top_global.php');
?>

<?php
    require('inc/top.php');
?>

























<?php
	require('inc/footer.php');
?>