<?php
/**
 * ��������ҳ��
 * Author: wb-jiangfeng
 * Time: 12-6-11 ����4:02
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
            <b>����ģ��ѡ��</b>
            <a href="javascript:void(0)" class="close" id="J_model_close">�ر�</a>
        </div>
        <div class="pub-models" id="J_models">
            <ul class="ks-switchable-nav">
                <li class="ks-active">���</li>
                <li>�İ�</li>
                <li>��վ����</li>
                <li>�������</li>
            </ul>
            <div class="pm-comtent ks-switchable-content">
                <div class="" style="display: block">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td style="padding-bottom: 10px"><b>���⣺</b></td>
                            <td style="padding-bottom: 10px">�鱦��˾logo���</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>��˾���ƣ�</b></td>
                            <td style="padding-bottom: 10px">xxx��ⱦ��</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>��Ӫ��Χ��</b></td>
                            <td style="padding-bottom: 10px">�ƽ𡢰�������ʯ�����</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>�ο�������</b></td>
                            <td style="padding-bottom: 10px">�ܴ󸣣������������������</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>��Ҫ��;��</b></td>
                            <td style="padding-bottom: 10px">���logo���õ�ʵ��ꡢ���ꡢ��̨����Ƭ�Ͳ�Ʒ��װ�С��������������������</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>����Ҫ��</b></td>
                            <td style="padding-bottom: 10px">&nbsp;</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-bottom: 10px"><p><b>һ�����Ҫ��</b></p>
                                <p>1�����Ҫ������ͻ����Ԣ����̡�</p>
                                <p>2������Ҫ��Լ�󷽡�ͻ��Ӻ�ݻ���</p>
                                <p>3������Ҫ��Լ�󷽡�ͻ��Ӻ�ݻ���</p>
                                <p>4������Ҫ��Լ�󷽡�ͻ��Ӻ�ݻ���</p>
                                <p style="padding-bottom: 10px">5������Ҫ��Լ�󷽡�ͻ��Ӻ�ݻ���</p>
                                <p style="padding-bottom: 10px"><b>����Ͷ��Ҫ��</b></p>
                                <p>1��Ͷ����Ӧ�ṩ��Ƶ�JPG��PSD��ʽ�����ĵ���Ӧע����׼��������׼ɫ������ߴ硣</p>
                                <p>2����Ƹ��Ӧ�ø���100-200�����ҵ�����˵����˵�������ͼ���������</p>
                                <p>3����Ƹ��Ӧ�ø���100-200�����ҵ�����˵����˵�������ͼ���������</p>
                                <p>4����Ƹ��Ӧ�ø���100-200�����ҵ�����˵����˵�������ͼ���������</p>
                                <p>5����Ƹ��Ӧ�ø���100-200�����ҵ�����˵����˵�������ͼ���������</p>
                                <p>6����Ƹ��Ӧ�ø���100-200�����ҵ�����˵����˵�������ͼ���������</p></td>
                        </tr>
                    </table>
                </div>
                <div class="" style="display: none">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td style="padding-bottom: 10px"><b>���⣺</b></td>
                            <td style="padding-bottom: 10px">�鱦��˾logo���</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>��˾���ƣ�</b></td>
                            <td style="padding-bottom: 10px">xxx��ⱦ��</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>��Ӫ��Χ��</b></td>
                            <td style="padding-bottom: 10px">�ƽ𡢰�������ʯ�����</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>�ο�������</b></td>
                            <td style="padding-bottom: 10px">�ܴ󸣣������������������</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>��Ҫ��;��</b></td>
                            <td style="padding-bottom: 10px">���logo���õ�ʵ��ꡢ���ꡢ��̨����Ƭ�Ͳ�Ʒ��װ�С��������������������</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>����Ҫ��</b></td>
                            <td style="padding-bottom: 10px">&nbsp;</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-bottom: 10px"><p><b>һ�����Ҫ��</b></p>
                                <p>1�����Ҫ������ͻ����Ԣ����̡�</p>
                                <p>2������Ҫ��Լ�󷽡�ͻ��Ӻ�ݻ���</p>
                                <p>3������Ҫ��Լ�󷽡�ͻ��Ӻ�ݻ���</p>
                                <p>4������Ҫ��Լ�󷽡�ͻ��Ӻ�ݻ���</p>
                                <p style="padding-bottom: 10px">5������Ҫ��Լ�󷽡�ͻ��Ӻ�ݻ���</p>
                        </tr>
                    </table>
                </div>
                <div class="" style="display: none">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td style="padding-bottom: 10px"><b>���⣺</b></td>
                            <td style="padding-bottom: 10px">�鱦��˾logo���</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>��˾���ƣ�</b></td>
                            <td style="padding-bottom: 10px">xxx��ⱦ��</td>
                        </tr>

                        <tr>
                            <td colspan="2" style="padding-bottom: 10px"><p><b>һ�����Ҫ��</b></p>
                                <p>1�����Ҫ������ͻ����Ԣ����̡�</p>
                                <p>2������Ҫ��Լ�󷽡�ͻ��Ӻ�ݻ���</p>
                                <p>3������Ҫ��Լ�󷽡�ͻ��Ӻ�ݻ���</p>
                                <p>4������Ҫ��Լ�󷽡�ͻ��Ӻ�ݻ���</p>
                                <p style="padding-bottom: 10px">5������Ҫ��Լ�󷽡�ͻ��Ӻ�ݻ���</p>
                                <p style="padding-bottom: 10px"><b>����Ͷ��Ҫ��</b></p>
                                <p>1��Ͷ����Ӧ�ṩ��Ƶ�JPG��PSD��ʽ�����ĵ���Ӧע����׼��������׼ɫ������ߴ硣</p>
                                <p>2����Ƹ��Ӧ�ø���100-200�����ҵ�����˵����˵�������ͼ���������</p>
                                <p>3����Ƹ��Ӧ�ø���100-200�����ҵ�����˵����˵�������ͼ���������</p>
                                <p>4����Ƹ��Ӧ�ø���100-200�����ҵ�����˵����˵�������ͼ���������</p>
                                <p>5����Ƹ��Ӧ�ø���100-200�����ҵ�����˵����˵�������ͼ���������</p>
                                <p>6����Ƹ��Ӧ�ø���100-200�����ҵ�����˵����˵�������ͼ���������</p></td>
                        </tr>
                    </table>
                </div>
                <div class="" style="display: none">
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                            <td style="padding-bottom: 10px"><b>���⣺</b></td>
                            <td style="padding-bottom: 10px">�鱦��˾logo���</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>��˾���ƣ�</b></td>
                            <td style="padding-bottom: 10px">xxx��ⱦ��</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>��Ӫ��Χ��</b></td>
                            <td style="padding-bottom: 10px">�ƽ𡢰�������ʯ�����</td>
                        </tr>

                        <tr>
                            <td style="padding-bottom: 10px"><b>��Ҫ��;��</b></td>
                            <td style="padding-bottom: 10px">���logo���õ�ʵ��ꡢ���ꡢ��̨����Ƭ�Ͳ�Ʒ��װ�С��������������������</td>
                        </tr>
                        <tr>
                            <td style="padding-bottom: 10px"><b>����Ҫ��</b></td>
                            <td style="padding-bottom: 10px">&nbsp;</td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-bottom: 10px"><p><b>һ�����Ҫ��</b></p>

                                <p style="padding-bottom: 10px"><b>����Ͷ��Ҫ��</b></p>
                                <p>1��Ͷ����Ӧ�ṩ��Ƶ�JPG��PSD��ʽ�����ĵ���Ӧע����׼��������׼ɫ������ߴ硣</p>
                                <p>2����Ƹ��Ӧ�ø���100-200�����ҵ�����˵����˵�������ͼ���������</p>
                                <p>3����Ƹ��Ӧ�ø���100-200�����ҵ�����˵����˵�������ͼ���������</p>
                                <p>4����Ƹ��Ӧ�ø���100-200�����ҵ�����˵����˵�������ͼ���������</p>
                                <p>5����Ƹ��Ӧ�ø���100-200�����ҵ�����˵����˵�������ͼ���������</p>
                                <p>6����Ƹ��Ӧ�ø���100-200�����ҵ�����˵����˵�������ͼ���������</p></td>
                        </tr>
                    </table>

                </div>
            </div>
        </div>
        <div class="model-btn"><a href="#">ʹ��ģ��</a></div>
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