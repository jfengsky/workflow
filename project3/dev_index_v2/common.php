<?php

define('IS_PUBLISHED', 0);//strpos($_SERVER['HTTP_HOST'], 'taobao.net') === FALSE);
//define('ASSETS_HOST', IS_PUBLISHED?'a.tbcdn.cn' : 'assets.daily.taobao.net');
define('ASSETS_HOST', 'assets.daily.taobao.net');
define('SOURCE_PATH', 'http://'.ASSETS_HOST.'/apps/auctionplatform/src/home/2.0');
define('IS_TMS_MODE', $_SERVER['HTTP_HOST'] === '127.0.0.1');

function includeMod($mod, $tmsid=null){
  if(IS_TMS_MODE) echo '<div class="pai-editor-wrap"><a href="http://tms.taobao.com/page/maintain.htm?id='.$tmsid.'" target="_blank" class="pai-editor-link">±à¼­</a>';
  if(IS_PUBLISHED){
    @include("/home/admin/go/rgn/pai/2.0/$mod.php");
  }else{
    include_once("mods/$mod.php");
  }
  if(IS_TMS_MODE) echo '</div>';
}
function includeAssets($mods){
  global $sourcePath, $isPublished;
  if(IS_PUBLISHED){
    echo '    <link rel="stylesheet" href="'.SOURCE_PATH.'/index.css" />'.chr(10);
    echo '    <script src="'.SOURCE_PATH.'/index.js"></script>'.chr(10);
    return;
  }
  $count = func_num_args();
  if($count){
    $mods = func_get_args();
    $css = array();
    $js = array();
    while($count--){
      $css[$count] = '    <link rel="stylesheet" href="'.SOURCE_PATH.'/'.$mods[$count].'.css" />';
      $js[$count] = '    <script src="'.SOURCE_PATH.'/'.$mods[$count].'.js"></script>';
    }
    ksort($css);
    ksort($js);
    echo join(chr(10), $css).chr(10).join(chr(10), $js).chr(10);
  }
}

?>
