<?php
/**
 * 1212活动页面 发起合买
 * @author: wb-jiangfeng <wb-jiangfeng@taobao.com>
 * @time  : 2012-11-26 10:42
 * @return: 
 */
?>
<?php
  require('inc/header.php');
?>
<link rel="stylesheet" type="text/css" href="../assets/step/step.css" />
<link rel="stylesheet" type="text/css" href="../assets/category/category.css" />
<link rel="stylesheet" type="text/css" href="../assets/gongyi/gongyi.css" />
<link rel="stylesheet" type="text/css" href="../assets/sidebar/rightbar.css" />
<link rel="stylesheet" type="text/css" href="../assets/sidebar/bottombar.css" />
<?php
  require('step/step3.php');
  require('category/category.php');
  require('gongyi/gongyi.php');
  require('sidebar/rightbar.php');
  require('sidebar/bottombar.php');
?>
<script>
KISSY.config({
    packages:[
        {
            name:"assets",
            tag:"20120628",
            path:"http://jfengsky.daily.taobao.net/c2bmarket/1212b/"
        }
    ]
});
KISSY.use('assets/pub');
</script>
<?php
  require('inc/footer.php');
?>