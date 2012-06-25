<?php
/**
 * 卖家投标浮层
 * Author: wb-jiangfeng
 * Time: 12-6-14 上午10:53
 *
 */
?>

<div class="tender upload_tender">
    <div class="title title_bg0b7eb5">
        <b>卖家投标</b>
        <a href="" class="close">关闭</a>
    </div>
    <div class="tender-info">
        <ul>
            <li>
                <label>店铺宝贝链接:</label>
                <input type="text" class="url">
                <span class="red">地址不正确</span>
            </li>
            <li>
                <label>竞标价格:</label>
                <input type="text" class="price"> 元
                <span class="red">请填写的数字</span>
            </li>
            <li>
                <label>竞标说明:</label>
                <textarea></textarea>
                <span class="textnum"><span>0</span>/256</span>
                <span class="red">请填写合法的字符，不超过256个</span>
            </li>
            <li class="tender-updata"><div><a href="#" class="add_attach">添加附件</a></div></li>
            <li class="tender-updata">
                <div>
                <input type="checkbox"> 我已经阅读并同意《淘宝网有求必应服务协议》
                <span class="red">请确认同意</span>
                </div>
            </li>
            <li>
                <div class="tender-btn">
                    <input class="btn_tender" type="submit" value="">
                </div>
            </li>
        </ul>
    </div>
</div>