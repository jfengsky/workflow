<?PHP
/**
 * �����Ӧ����� ���òɹ�����
 * @author: jfeng <jfengsky@gmail.com>
 * @time  : 2012-07-17 19:55
 * @return: 
 */
?>
<?php
	require('inc/header.php');
?>

<?php
	//���ݻ�������css
	if($_SERVER['HTTP_HOST'] == 'jfengsky.daily.taobao.net'){
        css('assets/mods/top/top','assets/mods/dpl/dpl','assets/mods/step/step','assets/mods/purchase/list','assets/mods/purchase/edit','assets/mods/purchase/right','assets/mods/footer/footer');
    }else{
        echo '<link rel="stylesheet" href="http://a.tbcdn.cn/apps/c2bmarket/gongyi/v1/assets/purchase-min.css" />';	//UCool��ַ
    }
?>
<?php
	//����
	require('inc/top_global.php');
?>

<?php
	//��������
    require('inc/top.php');
?>
<?php
	//��������
    require('step/step2.php');
?>

<div class="purchase">
	<?php
		//��������
	    require('purchase/edit.php');
	?>
	<?php
		//��������
	    require('purchase/right.php');
	?>
	<div class="clear"></div>
</div>
























<?php
	require('inc/footer.php');
?>