<?PHP
/**
 * 有求必应公益版 设置采购需求
 * @author: jfeng <jfengsky@gmail.com>
 * @time  : 2012-07-17 19:55
 * @return: 
 */
?>
<?php
	require('inc/header.php');
?>

<?php
	//根据环境载入css
	if($_SERVER['HTTP_HOST'] == 'jfengsky.daily.taobao.net'){
        css('assets/mods/top/top','assets/mods/dpl/dpl','assets/mods/detail/top','assets/mods/detail/left','assets/mods/detail/right','assets/mods/footer/footer');
    }else{
        echo '<link rel="stylesheet" href="http://a.tbcdn.cn/apps/c2bmarket/gongyi/v1/assets/detail-min.css" />';	//UCool地址
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

<div class="detail">
	<?php
	//项目banner
    require('detail/top.php');
	?>
	<?php
	//左侧详情
    require('detail/left3.php');
	?>
	<?php
	//右侧进度条
    require('detail/right5.php');
	?>
</div>
























<?php
	require('inc/footer.php');
?>