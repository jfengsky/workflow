<?php
/**
 * 发布需求页面
 * Author: wb-jiangfeng
 * Time: 12-6-11 下午4:02
 *
 */
?>
<?php
require('inc/header.php');
?>
<?php
    if($_SERVER['HTTP_HOST'] == 'jfeng.daily.taobao.net' || $_SERVER['HTTP_HOST'] == 'localhost'){
        echo '<link rel="stylesheet" href="http://jfeng.daily.taobao.net/combo/?p=http://jfeng.daily.taobao.net/ying/DEMO/assets/mods/&s=dpl.css,top.css,index_top.css,publish_type.css,step.css,publish_overlay_type.css,publish_model.css,footer.css&t=css&compress" />';
    }else{
        echo '<link rel="stylesheet" href="http://fed.ued.taobao.net/u/jiangfeng/ying/v1/assets/publish-min.css" />';
        //echo '<link rel="stylesheet" href="http://a.tbcdn.cn/apps/c2bmarket/ying/v1/index-min.css" />';
    }
?>
<script src="http://a.tbcdn.cn/tbra/1.0/tbra-aio.js?t=201003241751.js"></script>
<!--[if lt IE 8]>
<link href="http://a.tbcdn.cn/s/kissy/1.2.0/editor/theme/cool/editor-pkg-sprite-min.css" rel="stylesheet"/>
<![endif]-->
<!--[if gte IE 8]><!-->
<link href="http://a.tbcdn.cn/s/kissy/1.2.0/editor/theme/cool/editor-pkg-min-datauri.css" rel="stylesheet"/>
<!--<![endif]-->
<?php
require('inc/top.php');
?>

<?php
require('publish/type.php');
?>


<script type="text/template" id="J_model">
    <div class="tender">
        <div class="title title_bgfa7725">
            <b>需求模板选择</b>
            <a href="javascript:void(0)" class="close" id="J_model_close">关闭</a>
        </div>
        <div class="pub-models" id="J_models">
            <ul class="ks-switchable-nav">
                <li class="ks-active">设计</li>
                <li>文案</li>
                <li>网站开发</li>
                <li>设计任务</li>
            </ul>
            <div class="pm-comtent ks-switchable-content">
                <div class="" style="display: block">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td style="padding-bottom: 10px"><b>标题：</b></td>
                            <td style="padding-bottom: 10px">珠宝公司logo设计</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>公司名称：</b></td>
                            <td style="padding-bottom: 10px">xxx珠光宝气</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>经营范围：</b></td>
                            <td style="padding-bottom: 10px">黄金、白银、钻石、翡翠</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>参考样本：</b></td>
                            <td style="padding-bottom: 10px">周大福（根据自身情况而定）</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>主要用途：</b></td>
                            <td style="padding-bottom: 10px">设计logo引用到实体店、网店、柜台、名片和产品包装中。（根据自身情况而定）</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>具体要求：</b></td>
                            <td style="padding-bottom: 10px">&nbsp;</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-bottom: 10px"><p><b>一、设计要求：</b></p>
                                <p>1、设计要求主题突出、寓意深刻。</p>
                                <p>2、表现要简约大方、突出雍容华贵。</p>
                                <p>3、表现要简约大方、突出雍容华贵。</p>
                                <p>4、表现要简约大方、突出雍容华贵。</p>
                                <p style="padding-bottom: 10px">5、表现要简约大方、突出雍容华贵。</p>
                                <p style="padding-bottom: 10px"><b>二、投稿要求：</b></p>
                                <p>1、投稿人应提供设计的JPG或PSD格式电子文档，应注明标准比例、标准色、字体尺寸。</p>
                                <p>2、设计稿件应该附带100-200字左右的文字说明。说明设计意图、创作理念。</p>
                                <p>3、设计稿件应该附带100-200字左右的文字说明。说明设计意图、创作理念。</p>
                                <p>4、设计稿件应该附带100-200字左右的文字说明。说明设计意图、创作理念。</p>
                                <p>5、设计稿件应该附带100-200字左右的文字说明。说明设计意图、创作理念。</p>
                                <p>6、设计稿件应该附带100-200字左右的文字说明。说明设计意图、创作理念。</p></td>
                        </tr>
                    </table>
                </div>
                <div class="" style="display: none">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td style="padding-bottom: 10px"><b>标题：</b></td>
                            <td style="padding-bottom: 10px">珠宝公司logo设计</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>公司名称：</b></td>
                            <td style="padding-bottom: 10px">xxx珠光宝气</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>经营范围：</b></td>
                            <td style="padding-bottom: 10px">黄金、白银、钻石、翡翠</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>参考样本：</b></td>
                            <td style="padding-bottom: 10px">周大福（根据自身情况而定）</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>主要用途：</b></td>
                            <td style="padding-bottom: 10px">设计logo引用到实体店、网店、柜台、名片和产品包装中。（根据自身情况而定）</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>具体要求：</b></td>
                            <td style="padding-bottom: 10px">&nbsp;</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-bottom: 10px"><p><b>一、设计要求：</b></p>
                                <p>1、设计要求主题突出、寓意深刻。</p>
                                <p>2、表现要简约大方、突出雍容华贵。</p>
                                <p>3、表现要简约大方、突出雍容华贵。</p>
                                <p>4、表现要简约大方、突出雍容华贵。</p>
                                <p style="padding-bottom: 10px">5、表现要简约大方、突出雍容华贵。</p>
                        </tr>
                    </table>
                </div>
                <div class="" style="display: none">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td style="padding-bottom: 10px"><b>标题：</b></td>
                            <td style="padding-bottom: 10px">珠宝公司logo设计</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>公司名称：</b></td>
                            <td style="padding-bottom: 10px">xxx珠光宝气</td>
                        </tr>

                        <tr>
                            <td colspan="2" style="padding-bottom: 10px"><p><b>一、设计要求：</b></p>
                                <p>1、设计要求主题突出、寓意深刻。</p>
                                <p>2、表现要简约大方、突出雍容华贵。</p>
                                <p>3、表现要简约大方、突出雍容华贵。</p>
                                <p>4、表现要简约大方、突出雍容华贵。</p>
                                <p style="padding-bottom: 10px">5、表现要简约大方、突出雍容华贵。</p>
                                <p style="padding-bottom: 10px"><b>二、投稿要求：</b></p>
                                <p>1、投稿人应提供设计的JPG或PSD格式电子文档，应注明标准比例、标准色、字体尺寸。</p>
                                <p>2、设计稿件应该附带100-200字左右的文字说明。说明设计意图、创作理念。</p>
                                <p>3、设计稿件应该附带100-200字左右的文字说明。说明设计意图、创作理念。</p>
                                <p>4、设计稿件应该附带100-200字左右的文字说明。说明设计意图、创作理念。</p>
                                <p>5、设计稿件应该附带100-200字左右的文字说明。说明设计意图、创作理念。</p>
                                <p>6、设计稿件应该附带100-200字左右的文字说明。说明设计意图、创作理念。</p></td>
                        </tr>
                    </table>
                </div>
                <div class="" style="display: none">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td style="padding-bottom: 10px"><b>标题：</b></td>
                            <td style="padding-bottom: 10px">珠宝公司logo设计</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>公司名称：</b></td>
                            <td style="padding-bottom: 10px">xxx珠光宝气</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>经营范围：</b></td>
                            <td style="padding-bottom: 10px">黄金、白银、钻石、翡翠</td>
                        </tr>

                        <tr>
                            <td style="padding-bottom: 10px"><b>主要用途：</b></td>
                            <td style="padding-bottom: 10px">设计logo引用到实体店、网店、柜台、名片和产品包装中。（根据自身情况而定）</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>具体要求：</b></td>
                            <td style="padding-bottom: 10px">&nbsp;</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-bottom: 10px"><p><b>一、设计要求：</b></p>

                                <p style="padding-bottom: 10px"><b>二、投稿要求：</b></p>
                                <p>1、投稿人应提供设计的JPG或PSD格式电子文档，应注明标准比例、标准色、字体尺寸。</p>
                                <p>2、设计稿件应该附带100-200字左右的文字说明。说明设计意图、创作理念。</p>
                                <p>3、设计稿件应该附带100-200字左右的文字说明。说明设计意图、创作理念。</p>
                                <p>4、设计稿件应该附带100-200字左右的文字说明。说明设计意图、创作理念。</p>
                                <p>5、设计稿件应该附带100-200字左右的文字说明。说明设计意图、创作理念。</p>
                                <p>6、设计稿件应该附带100-200字左右的文字说明。说明设计意图、创作理念。</p></td>
                        </tr>
                    </table>

                </div>
            </div>
        </div>
        <div class="model-btn"><a href="#">使用模板</a></div>
    </div>
</script>







<script>
    KISSY.config({
        packages:[
            {
                name:"assets",
                tag:"20120615",
                <?php
                    if($_SERVER['HTTP_HOST'] == 'jfeng.daily.taobao.net' || $_SERVER['HTTP_HOST'] == 'localhost'){
                        echo 'path:"http://localhost/ying/DEMO/"';
                    }else{
                        echo 'path:"http://fed.ued.taobao.net/u/jiangfeng/ying/v1/"';
                        //echo 'http://a.tbcdn.cn/apps/c2bmarket/ying/v1/"';
                    }
                ?>
            }
        ]
    });
    KISSY.use('assets/publish');
</script>









<?php
//require('publish/overlay_type.php');
?>








<?php
require('inc/footer.php');
?>