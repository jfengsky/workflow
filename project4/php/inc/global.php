<?PHP
/**
 * 全局基本配置
 * @author: jfeng <jfengsky@gmail.com>
 * @time  : 2012-07-16 16:33
 * @return: 
 */
?>
<?php
	function css($_el){
		for($i = 0 ; $i <func_num_args($_el); $i++ ){
			echo '<link rel="stylesheet" type="text/css" href="../'.func_get_arg($i).'.css">'."\n";
		}
	}
?>