<?PHP
/**
 * �����Ӧ����� ����֧��ҳ��
 * @author: jfeng <jfengsky@gmail.com>
 * @time  : 2012-07-18 14:49
 * @return: 
 */
?>
<?php
	require('inc/header.php');
?>

<?php
	//���ݻ�������css
	if($_SERVER['HTTP_HOST'] == 'jfengsky.daily.taobao.net'){
        css('assets/mods/top/top','assets/mods/dpl/dpl','assets/mods/step/step','assets/mods/pay/pay','assets/mods/footer/footer');
    }else{
        echo '<link rel="stylesheet" href="http://a.tbcdn.cn/apps/c2bmarket/gongyi/v1/assets/pay-min.css" />';	//UCool��ַ
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

<?php
	//֧����
    require('pay/pay.php');
?>




















<script>
KISSY.config({packages:[{
	name:"assets",
	tag:"20120723",
    <?php
		//���ݻ�������css
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