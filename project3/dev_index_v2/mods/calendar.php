<div class="pai-calendar">
  <div id="J_pai_calendar" class="pai-calendar-days">
    <h3>
      <strong><b class="pointer prev"></b><span>0</span>��<i class="pointer">0��</i><b class="pointer next"></b></strong>
      <a href="#">��ʷ�ع�</a>
    </h3>
    <div></div>
    <ul class="pai-calendar-month"><li>1</li><li>2</li><li>3</li><li>4</li><li>5</li><li>6</li><li>7</li><li>8</li><li>9</li><li>10</li><li>11</li><li>12</li></ul>
  </div>
  <div class="pai-calendar-detail">
    <p class="empty">����û������ר��</p>
    <ol class="J_pai_indate"></ol>
  </div>
  <div class="pai-calendar-week">
    <h3 class="pai-title"><b class="pointer prev"></b><b class="pointer next"></b></h3>
    <p class="empty">����û������ר��</p>
    <div class="J_pai_inweek"><ul></ul></div>
  </div>
</div>
<script type="text/javascript">
var dateAuctionItems = [
  { name: 'a������ר��', desc: '����������ר������������ר��', ym: '2012-02', dates: [3,4], time: '12:00,12:00', url: 'taobao.com' },
  { name: '����������ר��', desc: 'abdf', ym: '2012-02', dates: [27,28], time: '10:00,18:00', url: 'http://taobao.com' },
  { name: 'XXX����ר��', desc: 'XXX����ר��dsa', ym: '2012-02', dates: [28,29], time: '01:00,19:00', url: 'taobao.com' },
  { name: 'ȫ�ֹ���ɰ����Ʒר��', desc: '111ȫ�ֹ���ɰ����Ʒר��', ym: '2012-03', dates: [1,2,3], time: '12:00,12:00', url: 'taobao.com' },
  { name: '���ʦ��������ר��1', desc: 'ȫ�ֹ���fdsɰ����Ʒר��', ym: '2012-03', dates: [2,3,4], time: '12:00,12:00', url: 'taobao.com' },
  { name: '���ʦ��������ר��2', desc: 'ɰ����Ʒר��', ym: '2012-03', dates: [3,4], time: '12:00,12:00', url: 'taobao.com' },
  { name: '���ʦ��������ר��3', desc: 'ɰ����Ʒר��', ym: '2012-03', dates: [3,4], time: '12:00,12:00', url: 'taobao.com' },
  { name: '���ʦ��������ר��4', desc: 'ɰ����Ʒר��', ym: '2012-03', dates: [3,4], time: '12:00,12:00', url: 'taobao.com' }
];
KISSY.use('PaiCalendar', function(S, Calendar){
  var c = new Calendar('#J_pai_calendar',dateAuctionItems);
});
</script>
