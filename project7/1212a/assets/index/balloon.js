/**
 * 气球动画效果
 * @author: jfeng (wb-jiangfeng@taobao.com)
 * @time: 12-11-14 下午3:31
 *
 */
KISSY.add(function(S, D, Anim){
  /**
   * 气球实例
   * @param {string} id         [气球]
   * @param {number} scope      [移动振幅]
   * @param {number} x_position [横向偏移距离]
   * @param {number} y_position [纵向偏移距离]
   */
  var Balloon = function(id, scope, x_position, y_position){
    var self = this,
        isback = false, // 是否是返回原来位置状态
        tween = ['elasticBoth', 'elasticIn', 'elasticOut','easeInStrong','easeOutStrong','easeBothStrong']; // 缓动方法
        /**
         * 气球动画
         * @param  {boolean}   isback [是否是返回原来位置状态]
         * @param  {Function} fn     [动画结束后回调函数]
         * @return {[type]}          [description]
         */
        this._tween = function(fn){
          // var _self = this,
          var equa = tween[Math.floor(Math.random() * 6)], //随机选取一个缓动方法
              x_change = 0,
              y_change = 0, //此次移动的距离
              direction = Math.random() > 0.5 ? true : false;   //移动方向
              periodis = 8 + Math.floor(Math.random() * 10);  // 动画周期性执行时间15~25s
          if(!isback){
              x_change = x_position + Math.floor(Math.random() * scope);
              y_change = y_position + Math.floor(Math.random() * scope);
              if(direction){
                x_change = 0 - x_change;
                y_change = 0 - y_change;
              }
              isback = true;
          }else{
              isback = false;
          }
          //S.log('x:' + x_change + ' | y:' + y_change + ' | equa:' + equa + ' | time:' + periodis + ' | direct:' + direction);
          var anim = Anim(id,{
            'left': x_change,
            'top' : y_change
          }, periodis, equa, fn);
          anim.stop();
          return anim;
        };
        this.moving = function(){
          // console.log(isback);
          self._tween(self.moving).run();
        };
  };

  // var ball = new Balloon('#J_ball', 20, 60, 20);
  // ball.moving();
  return Balloon;
},{
  requires:['dom','anim']
});