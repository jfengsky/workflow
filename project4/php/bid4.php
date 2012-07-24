<?PHP
/**
 * 有求必应公益版 当前买家投票
 * @author: jfeng <jfengsky@gmail.com>
 * @time  : 2012-07-23 11:07
 * @return: 
 */
?>
<?php
	require('inc/header.php');
?>
<?php
	//根据环境载入css
	if($_SERVER['HTTP_HOST'] == 'jfengsky.daily.taobao.net'){
        css('assets/mods/top/top','assets/mods/dpl/dpl','assets/mods/detail/top','assets/mods/bid/bid','assets/mods/detail/vote','assets/mods/bid/bid-overlay','assets/mods/footer/footer');
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
    require('bid/right3.php');
	?>
	<?php
	//卖家投票
    require('detail/vote.php');
	?>
</div>

















<div style="position:absolute;z-index:10010;left:50%;top:100%;margin-left:-219px;">
<!-- overflow1 start -->
<?php
	require('bid/bid_overlay.php');
?>
<!-- overflow1 end -->
</div>

<div style="position:absolute;z-index:10010;left:50%;top:150%;margin-left:-219px;">
<!-- overflow1 start -->
<?php
	require('bid/sellser_bid_overlay.php');
?>
<!-- overflow1 end -->
</div>

<div class="mask" style="width:100%;height:2000px;background-color:#000;opacity:0.4;position:absolute;left:0;top:0;z-index:10000;_filter:alpha(opacity=40);"></div>
<?php
	require('inc/footer.php');
?>