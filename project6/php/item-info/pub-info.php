<?php
/**
 * �����Ӧ����� ����������Ҫ��д�ı�
 * @author:wb-jiangfeng@taobao.com 
 * @time:2012-10-16 14:25
 * 
 */
?>
<div class="c2b-price">
  <dl>
    <dt>Ŀ��۸�</dt>
    <dd>
      <ul>
        <li><input type="radio"  /> ���ʾͿ�����</li>
        <li><input type="radio"  /> 8�� 280Ԫ</li>
        <li><input type="radio"  /> 7�� 220Ԫ</li>
        <li class="pub-other-price">
            <label>���������۸�</label>
            <span class="yuan-icon">��</span>
            <input type="text" />
            <span>��200</span>
            <span class="err-msg">��ѡ��۸�</span>
        </li>
      </ul>
    </dd>
  </dl>
  <dl>
    <dt>Ŀ������</dt>
    <dd>
      <ul>
        <li><input type="radio" name="" id=""> 100��</li>
        <li><input type="radio" name="" id=""> 80��</li>
        <li><input type="radio" name="" id=""> 50��</li>
        <li class="pub-other-num">
          <label>������������</label>
          <input type="text" />
          <span class="err-msg">��ѡ��������</span>
        </li>
      </ul>
    </dd>
  </dl>
</div>

<div class="pub-title">
  <label>�ҵĺ�������</label>
  <label id="J_titleRemind" for="J_pubtitle" style="">�ﶬ���ˣ�������Ů���ǸϽ��������ɣ��˶�۸����ѽ~</label>
  <input type="text" id="J_pubtitle" value="">
  <b><span id="J_wordnum">0</span>/30</b>
  <span id="J_titlerr" class="red errico" style="display: none; "></span>
</div>

<div class="pub-editor">
  <label>��д��ϸ����</label>
  <div class="pub-item-ctn">
      <?php
      /*
      <div class="editmore">
        <a id="J_showedit" class="showedit" href="javascript:void(0)">
          <em>չ���༭ѡ��</em>
          <span class=""></span>
        </a>
      </div>
       */
      ?>
      <textarea id="editor" tabindex="0" style="width:540px;height:200px;margin:0 auto;"></textarea>
  </div>
  <div class="c2b-c"></div>
</div>

<div class="pub-mobile">
  <label>�ҵ��ֻ�����</label>
  <input type="text" />
  <p>������Ч�ֻ����룬����ɹ����������յ�����֪ͨ�������ֻ��������ǽ��ᱣ�ܲ���й¶</p>
</div>

<div class="pub-button">
      <p>
      С��ʿ����������ʱ��ֻ��1�죬��ȫ���Ը�Ŷ��
      </p>
    <div class="pub-age">
      <input type="checkbox" id="J_pack" checked="true">
        ���Ѿ��Ķ���ͬ��<a class="h" href="http://service.taobao.com/support/knowledge-5123306.htm" target="_blank">���Ա��������Ӧ����Э�顷</a>
        <span class="red errico" style="display:none" id="J_checkerr">��ȷ���Ķ���ͬ��<a class="h" href="http://service.taobao.com/support/knowledge-5123306.htm" target="_blank">���Ա��������Ӧ����Э�顷</a></span>
    </div>
      <input id="J_pubsubmit" type="button" class="pubsubmit">
      <input id="J_pubsubmit" type="button" class="pubmodify">
      <span class="back"><a href="http://hm.daily.taobao.net/group/to_group_buy_page.htm">����</a></span>
    </div>