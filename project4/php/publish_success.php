<?PHP
/**
 * 有求必应公益版 发布成功
 * @author: jfeng <jfengsky@gmail.com>
 * @time  : 2012-07-17 07:17
 * @return: 
 */
?>
<?php
	require('inc/header.php');
?>

<?php
	//根据环境载入css
	if($_SERVER['HTTP_HOST'] == 'jfengsky.daily.taobao.net'){
        css('assets/mods/top/top','assets/mods/dpl/dpl','assets/mods/step/step','assets/mods/publish/success','assets/mods/footer/footer');
    }else{
        echo '<link rel="stylesheet" href="http://a.tbcdn.cn/apps/c2bmarket/gongyi/v1/assets/publish-min.css" />';	//UCool地址
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
    require('step/step3.php');
?>
<?php
	//发布成功区块
	require('publish/success.php');
?>























<?php
	require('inc/footer.php');
?>