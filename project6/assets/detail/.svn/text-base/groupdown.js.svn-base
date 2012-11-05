/**
 * detail页面 倒计时效果 跟拍百分比
 * @Author: wb-jiangfeng
 * @Time: 12-10-27 11:30
 */
KISSY.add(function(S, D, Countdown) {
  // 获取时间
  // var downtime = {};
  // // 结束时间
  // downtime.endTime = D.val('#J_endTime');
  // //服务器时间
  // downtime.sysTime = D.val('#J_systemTime');
  // //倒计时毫秒数
  // downtime.last = downtime.endTime - downtime.sysTime;
  // if(downtime.last > 0){
  //   var c = new cnd({
  //     element: '#c2b-cd',
  //     format: 'h,i,s',
  //     leftTime: downtime.last,
  //     onProcess: function(n){
  //       if(n <= 0){
  //         c.destroy();
  //         c = null;
  //       }
  //     }
  //   });
  // }

  // S.all('#demo7 .cd').each(function(node) {
  //     Countdown(node, {
  //         effect: 'slide',
  //         _clock: ['d', 100, 2, 'h', 100, 2, 'm', 60, 2, 's', 60, 2, 'u', 10, 1]
  //     });
  // });
  
  // 跟拍百分比
  var percent = D.val('#J_percent');
  D.style('#J_percentline','width',percent + '%');

}, {
  requires: ['dom']
});