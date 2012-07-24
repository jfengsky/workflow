<?PHP
/**
 * 有求必应公益版 DPL
 * @author: jfeng <jfengsky@gmail.com>
 * @time  : 2012-07-17 15:18
 * @return: 
 */
?>
<?php
	require('inc/header.php');
?>

<?php
	//根据环境载入css
	if($_SERVER['HTTP_HOST'] == 'jfengsky.daily.taobao.net'){
        css('assets/mods/top/top','assets/mods/dpl/dpl','assets/mods/overlay/overlay','assets/mods/overlay/transport','assets/mods/footer/footer');
    }else{
        echo '<link rel="stylesheet" href="http://a.tbcdn.cn/apps/c2bmarket/gongyi/v1/assets/dpl-min.css" />';	//UCool地址
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



<div style="position:absolute;z-index:10010;left:50%;top:10%;margin-left:-219px;">
<?php
	//吊顶
	require('overlay/overlay1.php');
?>
</div>

<div style="position:absolute;z-index:10010;left:50%;top:50%;margin-left:-219px;">
<?php
	//吊顶
	require('overlay/overlay2.php');
?>
</div>

<div style="position:absolute;z-index:10010;left:50%;top:100%;margin-left:-219px;">
<?php
	//吊顶
	require('overlay/overlay3.php');
?>
</div>






















<div class="mask" style="width:100%;height:2000px;background-color:#000;opacity:0.4;position:absolute;left:0;top:0;z-index:10000;_filter:alpha(opacity=40);"></div>
<?php
	require('inc/footer.php');
?>