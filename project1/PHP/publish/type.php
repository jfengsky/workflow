<?php
/**
 * ѡ����Ŀ
 * Author: wb-jiangfeng
 * Time: 12-6-11 ����4:10
 */
?>
<div class="publish">
    <?php
        require('inc/step.php');
    ?>
    <div class="sel-type">
        <label>ѡ����Ŀ</label>
        <b id="J_typesel">����װ��</b><a href="javascript:void(0)" class="blue" id="J_resel">����ѡ��</a>
        <input type="hidden" id="J_usertype" value="">
    </div>
    <div class="pub-title">
        <label>һ�仰�����������</label>
        <input type="text" id="J_pubtitle"/> <b><span id="J_wordnum">0</span>/30</b> <span class="red" id="J_titlerr"></span>
    </div>
    <div class="pub-editor">
        <label>��д��ϸ����</label>
        <div class="editmore">
            <a href="javascript:void(0)" class="showedit" id="J_showedit"><em>չ���༭ѡ��</em><span></span></a>
            <a href="javascript:void(0)" class="blue" id="J_editmodel">����������ôд</a>
        </div>
        <textarea id="editor" name='editor' tabindex="0" style="width:540px;height:400px;margin:0 auto;"></textarea>
        <span class="red">�������ݲ�������20����</span>
        <div class="pub-upload">
            <a class="blue upico" href="">��Ӹ���</a>
            <span id="J_SelectFiles" class="up-swf"></span>
            <span>����������������ÿ����С������3MB��</span>
            <a href="" class="blue">�޷������ϴ���</a>
            <ul id="J_FileList" class="file-list">
            </ul>
        </div>

    </div>

    <div class="pub-pay">
        <label>����Ԥ��</label>
        <input type="text" value="" data-value="���20Ԫ">
        <span class="pay-ico">��</span>
        <em>��Ҫ <b class="h">��10</b> Ԫ��Ϊ�����</em>
        <p>˵�����足��20%��Ϊ����𣬽��׸�����Զ��ⶳ�����</p>
        <span class="red">����дԤ����</span>
    </div>
    <div class="pub-time">
        <label>Ͷ��ʱ��</label>
        <div style="width:248px;height: 197px;border:1px solid #ccc;">KISSY �������</div>
        <p>˵����Ͷ��ʱ��Ϊ7�죬���ֱ�ӵ������ѡ�񣬵���������Ͷ�꣬�����Զ�ȡ�����ⶳ�����</p>
        <span class="red">��ѡ��Ͷ��ʱ��</span>
    </div>
    <div class="pub-age">
        <input type="checkbox"> ���Ѿ��Ķ���ͬ�⡶�Ա��������Ӧ����Э�顷
        <span class="red">��ȷ���Ķ���ͬ�⡶�Ա��������Ӧ����Э�顷</span>
    </div>
    <button></button>
</div>
