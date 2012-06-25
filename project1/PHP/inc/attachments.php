<?php
/**
 * 卖家投标
 * Author: wb-gaozhan
 * Time: 12-6-8 14:22
 */
?>
<link rel="stylesheet" href="http://localhost/ying/v1/assets/mods/attachments.css" />
<div class="tender upload_tender">
    <div class="title title_bg0b7eb5">
        <b>卖家投标</b>
        <a href="" class="close">关闭</a>
    </div>
    <div class="tender-info">
        <ul style="width:460px; float:left;display:inline;overflow:hidden;">
             <li>
                    <label>店铺宝贝链接:</label>
                    <div style="float:left;">
                        <input type="text" class="url">
                        <p class="red">地址不正确</p>
                    </div>
             </li>
             <li>
                    <label>竞标价格:</label>
                    <div style="float:left;">
                    <input type="text" class="price"> 元
                    <span class="red">请填写的数字</span>
                    </div>

             </li>
             <li>
                    <label>竞标说明:</label>
                    <div style="float:left;">
                        <textarea></textarea>
                        <p class="red">请填写合法的字符，不超过256个</p>
                    </div>
             </li>
             <li class="tender-updata"><div><a href="#" class="add_attach">添加附件</a></div></li>
             <li class="tender-updata">
                  <div><input type="checkbox">我已经阅读并同意《淘宝网有求必应服务协议》</div>
             </li>
             <li>
                    <div class="tender-btn">
                          <input class="btn_tender" type="submit" value="">
                     </div>
             </li>
        </ul>
        <div style="float:left; width:180px;display:inline; border-left:1px solid #eeeeee; padding-left:20px;">
            <p class="g2">预览：</p>
                    <div class="preview">
                          <div class="result_show">
                               <img src="http://img.f2e.taobao.net/img.png?x=169x150"/>
                               <div class="g2 instruct">说明：精修片修人物的皮肤类/调材拉高拉瘦</div>
                               <p class="g2 contact">旺旺<p>
                          </div>
                          <p class="bid"><span>竞标价：</span>￥500.00<p>
                    </div>
        </div>
    </div>
</div>