<?PHP
/**
 * �����Ӧ����� �����ɹ�
 * @author: jfeng <jfengsky@gmail.com>
 * @time  : 2012-07-17 07:17
 * @return: 
 */
?>
<?php
	require('inc/header.php');
?>

<?php
	//���ݻ�������css
	if($_SERVER['HTTP_HOST'] == 'jfengsky.daily.taobao.net'){
        css('assets/mods/top/top','assets/mods/dpl/dpl','assets/mods/step/step','assets/mods/publish/success','assets/mods/footer/footer');
    }else{
        echo '<link rel="stylesheet" href="http://a.tbcdn.cn/apps/c2bmarket/gongyi/v1/assets/publish-min.css" />';	//UCool��ַ
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
    require('step/step3.php');
?>
<?php
	//�����ɹ�����
	require('publish/success.php');
?>























<?php
	require('inc/footer.php');
?>