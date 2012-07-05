<div class="pai-calendar">
  <div id="J_pai_calendar" class="pai-calendar-days">
    <h3>
      <strong><b class="pointer prev"></b><span>0</span>年<i class="pointer">0月</i><b class="pointer next"></b></strong>
      <a href="#">历史回顾</a>
    </h3>
    <div></div>
    <ul class="pai-calendar-month"><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li></ul>
  </div>
  <div class="pai-calendar-detail">
    <p class="empty">当日没有拍卖专场</p>
    <ol class="J_pai_indate"></ol>
  </div>
  <div class="pai-calendar-week">
    <h3 class="pai-title"><b class="pointer prev"></b><b class="pointer next"></b></h3>
    <p class="empty">本周没有拍卖专场</p>
    <div class="J_pai_inweek"><ul></ul></div>
  </div>
</div>
<script type="text/javascript">
var dateAuctionItems = [
  { name: 'a玉拍卖专场', desc: '和田玉拍卖专场和田玉拍卖专场', ym: '2012-02', dates: [3,4], time: '12:00,12:00', url: 'taobao.com' },
  { name: '和田玉拍卖专场', desc: 'abdf', ym: '2012-02', dates: [27,28], time: '10:00,18:00', url: 'http://taobao.com' },
  { name: 'XXX拍卖专场', desc: 'XXX拍卖专场dsa', ym: '2012-02', dates: [28,29], time: '01:00,19:00', url: 'taobao.com' },
  { name: '全手工紫砂壶作品专场', desc: '111全手工紫砂壶作品专场', ym: '2012-03', dates: [1,2,3], time: '12:00,12:00', url: 'taobao.com' },
  { name: '许大师瓷器拍卖专场1', desc: '全手工紫fds砂壶作品专场', ym: '2012-03', dates: [2,3,4], time: '12:00,12:00', url: 'taobao.com' },
  { name: '许大师瓷器拍卖专场2', desc: '砂壶作品专场', ym: '2012-03', dates: [3,4], time: '12:00,12:00', url: 'taobao.com' },
  { name: '许大师瓷器拍卖专场3', desc: '砂壶作品专场', ym: '2012-03', dates: [3,4], time: '12:00,12:00', url: 'taobao.com' },
  { name: '许大师瓷器拍卖专场4', desc: '砂壶作品专场', ym: '2012-03', dates: [3,4], time: '12:00,12:00', url: 'taobao.com' }
];
KISSY.use('PaiCalendar', function(S, Calendar){
  var c = new Calendar('#J_pai_calendar',dateAuctionItems);
});
</script>
