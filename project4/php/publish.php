<?PHP
/**
 * �����Ӧ����� ��Ŀ����ҳ
 * @author: jfeng <jfengsky@gmail.com>
 * @time  : 2012-07-17 15:18
 * @return: 
 */
?>
<?php
	require('inc/header.php');
?>

<?php
	//���ݻ�������css
	if($_SERVER['HTTP_HOST'] == 'jfengsky.daily.taobao.net'){
        css('assets/mods/top/top','assets/mods/dpl/dpl','assets/mods/step/step','assets/mods/publish/publish_main','assets/mods/footer/footer');
    }else{
        echo '<link rel="stylesheet" href="http://a.tbcdn.cn/apps/c2bmarket/gongyi/v1/assets/publish-min.css" />';	//UCool��ַ
    }
?>
<!--[if lt IE 8]>
<link href="http://a.tbcdn.cn/s/kissy/1.2.0/editor/theme/cool/editor-pkg-sprite-min.css" rel="stylesheet"/>
<![endif]-->
<!--[if gte IE 8]><!-->
<link href="http://a.tbcdn.cn/s/kissy/1.2.0/editor/theme/cool/editor-pkg-min-datauri.css" rel="stylesheet"/>
<!--<![endif]-->
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
    require('step/step.php');
?>

<?php
	//��Ŀ����
    require('publish/publish_main.php');
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
KISSY.config({packages:[{
    name:"gallery",
    path:"http://a.tbcdn.cn/s/kissy/",
    charset:"utf-8"}]
});
KISSY.use('assets/publish');
</script>

<?php
	require('inc/footer.php');
?>