<?php
/**
 * 选择类目
 * Author: wb-jiangfeng
 * Time: 12-6-11 下午4:10
 */
?>
<div class="publish">
    <?php
        require('inc/step.php');
    ?>
    <div class="sel-type">
        <label>选择类目</label>
        <b id="J_typesel">网店装修</b><a href="javascript:void(0)" class="blue" id="J_resel">重新选择</a>
        <input type="hidden" id="J_usertype" value="">
    </div>
    <div class="pub-title">
        <label>一句话描述你的需求</label>
        <input type="text" id="J_pubtitle"/> <b><span id="J_wordnum">0</span>/30</b> <span class="red" id="J_titlerr"></span>
    </div>
    <div class="pub-editor">
        <label>填写详细需求</label>
        <div class="editmore">
            <a href="javascript:void(0)" class="showedit" id="J_showedit"><em>展开编辑选项</em><span></span></a>
            <a href="javascript:void(0)" class="blue" id="J_editmodel">看看别人怎么写</a>
        </div>
        <textarea id="editor" name='editor' tabindex="0" style="width:540px;height:400px;margin:0 auto;"></textarea>
        <span class="red">需求内容不能少于20个字</span>
        <div class="pub-upload">
            <a class="blue upico" href="">添加附件</a>
            <span id="J_SelectFiles" class="up-swf"></span>
            <span>最多可添加五个附件，每个大小不超过3MB。</span>
            <a href="" class="blue">无法正常上传？</a>
            <ul id="J_FileList" class="file-list">
            </ul>
        </div>

    </div>

    <div class="pub-pay">
        <label>您的预算</label>
        <input type="text" value="" data-value="最低20元">
        <span class="pay-ico">￥</span>
        <em>需要 <b class="h">￥10</b> 元作为诚意金</em>
        <p>说明：需冻结20%作为诚意金，交易付款后自动解冻诚意金</p>
        <span class="red">请填写预算金额</span>
    </div>
    <div class="pub-time">
        <label>投标时间</label>
        <div style="width:248px;height: 197px;border:1px solid #ccc;">KISSY 日历组件</div>
        <p>说明：投标时间为7天，鼠标直接点击日期选择，到期如无人投标，需求自动取消并解冻诚意金</p>
        <span class="red">请选择投标时间</span>
    </div>
    <div class="pub-age">
        <input type="checkbox"> 我已经阅读并同意《淘宝网有求必应服务协议》
        <span class="red">请确认阅读并同意《淘宝网有求必应服务协议》</span>
    </div>
    <button></button>
</div>
