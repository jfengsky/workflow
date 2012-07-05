<?php include("common.php"); ?>
<script src="http://a.tbcdn.cn/??s/kissy/1.2.0/kissy-min.js,p/global/1.0/global-min.js,p/global/1.0/header-min.js?t=20110908.js"></script>
<script src="<?=(SOURCE_PATH.'/countdown.js')?>"></script>



<div id="J_countdown_test"><var>0</var>:<var>0</var>:<var>0</var></div>
<script>
  KISSY.use('Countdown', function(S, cnd){
    new cnd({
      element: '#J_countdown_test',
      format: 'h,i,s',
      leftTime: 3600000,
      onProcess: function(n){
        console.log(n);
      }
    });
  });
</script>