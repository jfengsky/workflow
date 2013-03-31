/**
 * 贪吃蛇脚本文件
 * @author: jfeng (jfengsky@gmail.com)
 * @Date: 13-3-2 08:45
 *
 */

window.onload = function(){
  var score = 0,    // 得分
      doc = document,
      $ = function(id){
        return doc.getElementById(id);
      },
      direct = head_direct = 'down',
      snake_size = 20,  // 蛇的大小 (像素)
      snake_food = {}, // 食物的坐标
      scene_area = 10, // 场景大小 默认为100像素
      /**
       * Snake 蛇实例对象
       */
      Snake = function(){
        var self = this;
        this._body = [0,1,2];  // 初始化蛇，默认3个长度
        this._bodylength = function(){
          return self._body.length;
        };
        for(var i = 0; i < this._bodylength(); i++){
          this._body[i] = {};
          this._body[i]._left =0;
          this._body[i]._top = i * snake_size;
          this._body[i]._direct = 'down'; // 蛇一开始默认向下移动
        }
        /*
        * 游戏场景
        */
        this._scene = function(){
          scene_area = $("J_area").value;
          $('J_scene').setAttribute('style','width:' + (scene_area * snake_size) + 'px;height:' + (scene_area * snake_size) + 'px;border:1px solid #666');
        };
        /*
         * 游戏难度 难度越大蛇速度越快
         */
        this._speed = function(){
          var speed = $('J_level').value;
          return Math.ceil(300/(speed * 0.8));
        };
        /**
         * 键盘控制
         */
        this._control = function(){
          doc.onkeyup = function(event){
            var ev=window.event || event,
            keycode = ev.keyCode || ev.which || ev.charCode;
            switch(keycode){  // 蛇不能反方向运动
              case 37:
                return direct = (head_direct == 'right') ? 'right' : 'left';
              break;
              case 38:
                return direct = (head_direct == 'down') ? 'down' : 'up';
              break;
              case 39:
                return direct = (head_direct == 'left') ? 'left' : 'right';
              break;
              case 40:
                return direct = (head_direct == 'up') ? 'up' : 'down';
              break;
              default: // 空格暂停 开始游戏
              break;
            }
          };
        };
        /**
         * 食物
         */
        this._food = function(){
          // 生成食物
          var food = doc.createElement("b"),
              food_node = $('J_food').getElementsByTagName('b'),
              create_food = function(){
                snake_food._left = (Math.ceil(Math.random() * 10) - 1) * snake_size;
                snake_food._top = (Math.ceil(Math.random() * 10) - 1) * snake_size;
                food.setAttribute('style','left:' + snake_food._left +'px;top:'+ snake_food._top +'px');
                $('J_food').appendChild(food);
              };

          if(food_node.length <= 0){
            create_food()
          }else{
            // 删除食物
            $('J_food').removeChild(food_node[0]);
            create_food()
          }
          for(var i = 0; i < self._bodylength(); i++){  // 食物不能创建在蛇身上
            if(self._body[i]._left == snake_food._left && self._body[i]._top == snake_food._top){
              self._food();
            }
          }
        };
        /*
         *  蛇移动
         */
        this._move = function(){
          setInterval(function(){
            // 获得蛇头的坐标 + 移动方向 0
            var snake_head = {
                  _left: self._body[self._bodylength() - 1]._left,
                  _top: self._body[self._bodylength() - 1]._top,
                  _direct: self._body[self._bodylength() - 1]._direct
                };
            switch(direct){
              case 'left':
                snake_head._left = snake_head._left - snake_size;
                snake_head._direct = head_direct = 'left';
              break;
              case 'right':
                snake_head._left = snake_head._left + snake_size;
                snake_head._direct = head_direct = 'right';
              break;
              case 'up':
                snake_head._top = snake_head._top - snake_size;
                snake_head._direct = head_direct = 'up';
              break;
              default:
                snake_head._top = snake_head._top + snake_size;
                snake_head._direct = head_direct = 'down';
              break;
            }
            /**
             * 检测游戏是否结束
             */
            if(snake_head._left < 0 || snake_head._left > (scene_area * (snake_size - 1)) || snake_head._top < 0 || snake_head._top > (scene_area * (snake_size - 1))){
              self._over(1);
            }
            for(var k = 0; k < self._bodylength(); k++){
              if(snake_head._left == self._body[k]._left &&  snake_head._top == self._body[k]._top){
                self._over(2);
              }
            }
            /**
             * 吃食物
             */
            var snake_body = doc.createElement("span"),
                addhead = function(){
                  snake_body.setAttribute('style','left:' + snake_head._left +'px;top:'+ snake_head._top +'px');
                  $('J_scene').appendChild(snake_body);
                  self._body.push(snake_head);
                };

            if(snake_head._left == snake_food._left && snake_head._top == snake_food._top){
              addhead();
              // 创建新食物
              self._food();
              // 分数加一
              score++;
              $('J_score').innerHTML = score;

              // 判断游戏是否通关
              if(score >= scene_area * 4){
                self._succ();
              }

            }else{
              // 删除蛇尾
              var body_node = $('J_scene').getElementsByTagName('span');
              $('J_scene').removeChild(body_node[0]);
              self._body.shift();

              // 添加蛇头
              addhead();
            }

          },self._speed());

        };
        /**
         * 蛇身长度超过场景的周长，游戏成功
         */
        this._succ = function(){
          alert('你太厉害了!! \n 请挑战下一难度吧~~');
          doc.location.reload();
        };
        /**
         * 游戏 碰到边缘或者自己 游戏结束
         */
        this._over = function(el){
          if(el == 1){
            alert('Game Over! \n 撞到墙壁啦!');
          }else if(el == 2){
            alert('Game Over! \n 咬到自己啦!');
          }
          // 刷新页面
          doc.location.reload();
        };
        this.init = function(){
          // 初始化游戏场景
          self._scene();
          // 场景中放入蛇
          var snake_body;
          for(var i = 0; i < this._bodylength(); i++){
            snake_body = doc.createElement("span");
            snake_body.setAttribute('style','left:' + self._body[i]._left +'px;top:'+ self._body[i]._top +'px');
            $('J_scene').appendChild(snake_body);
          }
          self._food();
          self._move();
          self._control();
        };


      };
  // 开始游戏
  doc.getElementById('J_start').onclick = function(){
    var snake = new Snake();
    snake.init();
  }
};



