<?php
/**
 * 支付宝付款
 * Author: wb-jiangfeng
 * Time: 12-6-14 下午3:13
 */
?>

<div class="pay">
    <?php
    require('inc/step.php');
    ?>
    <div class="pay_li">
        <ul>
            <li>
                <label>付款金额:</label>
                <span class="h">&yen;3939</span>
            </li>
            <li class="method">
                <label>付款方式:</label>
                <div class="note">
                    <b>您正在使用支付宝担保交易：</b>付款后资金由支付宝保管
                </div>
            </li>
        </ul>
        <a href="" class="next">下一步</a>
    </div>
</div>
