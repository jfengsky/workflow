<?php
/**
 * 有求必应合买版 发布页面
 * wb-jiangfeng 2012-10-15 14:46
 * 
 */
?>
<?php
  require('inc/header.php');
?>

<?php
  if($_SERVER['HTTP_HOST'] == 'jfengsky.daily.taobao.net'){
        css('assets/detail/leader','assets/detail/item-pic','assets/detail/item-property','assets/detail/item-infos','assets/detail/bid','assets/detail/comment','assets/detail/progress','assets/detail/seller','assets/detail/other','assets/detail/countdown');
    }else if($_SERVER['HTTP_HOST'] == 'fed.ued.taobao.net'){
        fedcss($fed_url.'assets/detail/leader',
          $fed_url.'assets/detail/item-pic',
          $fed_url.'assets/detail/item-property',
          $fed_url.'assets/detail/item-infos',
          $fed_url.'assets/detail/bid',
          $fed_url.'assets/detail/comment',
          $fed_url.'assets/detail/progress',
          $fed_url.'assets/detail/seller',
          $fed_url.'assets/detail/other',
          $fed_url.'assets/detail/countdown'
          );
    }else{
        // ucool 地址
        echo '<link rel="stylesheet" href="http://assets.daily.taobao.net/apps/c2bmarket/group/v1/assets/??detail/leader.css,detail/item-pic.css,detail/item-property.css,detail/item-infos.css,detail/bid.css,detail/comment.css,detail/progress.css,detail/seller.css,detail/other.css,detail/countdown.css" />';
        // <link rel="stylesheet" href="http://a.tbcdn.cn/apps/c2bmarket/group/v1/assets/??detail/leader-min.css,detail/item-pic-min.css,detail/item-property-min.css,detail/item-infos-min.css,detail/bid-min.css,detail/comment-min.css,detail/progress-min.css,detail/seller-min.css,detail/other-min.css,,detail/countdown-min.css" />
    }
?>
<!-- 
  daily css地址
  <link rel="stylesheet" href="http://assets.daily.taobao.net/apps/c2bmarket/group/v1/assets/??detail/leader.css,detail/item-pic.css,detail/item-property.css,detail/item-infos.css,detail/bid.css,detail/comment.css,detail/progress.css,detail/seller.css,detail/other.css" />

  线上 css地址
  <link rel="stylesheet" href="http://a.tbcdn.cn/apps/c2bmarket/group/v1/assets/??detail/leader-min.css,detail/item-pic-min.css,detail/item-property-min.css,detail/item-infos-min.css,detail/bid-min.css,detail/comment-min.css,detail/progress-min.css,detail/seller-min.css,detail/other-min.css" />
-->
<?php
  //吊顶
  require('inc/top_global.php');
?>
<input type="hidden" id="J_isGotMedal" value="false" />
<input type="hidden" id="J_publisherId" value="183511405" />
<input type="hidden" id="J_groupId" value="1004" />

<input type="hidden" id="J_pSize" value="6" />
<input type="hidden" id="J_cPage" value="2" />
<input type="hidden" id="J_tPage" value="1" />
<input type="hidden" id="J_percent" value="90" />
<input type="hidden" id="J_desc" value="http://media.daily.taobao.net/s/3483/0/1000009116100.html" />
<input type="hidden" id="J_medalUrl" value="$!medal.jumpUrl" />

<input type="hidden" id="J_isFollow" value="false" />
<form id="J_cancelGroup" action="#getLocationHref()" method="post"></form>
<?php
  require('detail/leader.php');
?>

<div class="c2b-main">
  <div class="c2b-left">
    <?php
      require('detail/item-pic.php');
      require('detail/item-property.php');
      require('detail/item-infos.php');
      require('detail/bid.php');
      require('detail/comment.php');
    ?>
  </div>
  <div class="c2b-right">
    <?php
      require('detail/progress.php');
      require('detail/seller.php');
      require('detail/other.php');
      require('detail/pop.php');
    ?>
  </div>
</div>



<script id="J_winedibid" type="text/template">
<div class="tender upload_tender">
  <input type="hidden" id="J_material" value="" />
  <input type="hidden" id="J_outerkey" value="_fm.a._0.ou" />
  <input type="hidden" id="J_reqkey" value="_fm.a._0.r" />
    <input type="hidden" id="J_operation" value="" />
  <input type="hidden" id="J_delAttachUrl" value="http://ying.daily.taobao.net/json/upload_response.htm?action=uploadAction&amp;event_submit_do_delete_attach=1&amp;_tb_token_=1rYGwFal&amp;_fm.a._0.o=3&amp;_fm.a._0.a=" />
  <form id="J_bidPublish" name="J_bidPublish" action="http://ying.daily.taobao.net/json/bid.htm" method="post">
    <input name='_tb_token_' type='hidden' value='1rYGwFal'>
    <input type="hidden" name="action" value="sellerBidAction" />
    
                  <input type="hidden" name="event_submit_do_seller_bid" value="1" />
                <input type="hidden" name="from" value="bid" />
        <input type="hidden" id="J_attach" name="_fm.s._0.a" value="" />
        <input type="hidden" name="_fm.s._0.r" value="1004" />
        <input type="hidden" id="J_sku" name="_fm.s._0.s" value="" />
    
        <div class="title title_bg0b7eb5">
                    <b>卖家投标</b>
                  <a href="javascript:void(0)" class="close" id="J_wbclose">关闭</a>
      </div>
        <div class="tender-info">
            <ul>
                        <li>
                    <label>宝贝链接:</label>
                    <input type="text" class="url" id="J_itemUrl" name="_fm.s._0.i">
                    <span class="red" id="J_urlerr"></span>
                </li>
                        <li>
                    <label>竞标价格:</label>
                    <input type="text" class="price" id="J_price" name="_fm.s._0.b"> 元 <span class="g2">&nbsp;折扣越低越容易中标哦</span>
                    <span class="red" id="J_monerr"></span>
                </li>
                <li>
                    <label>竞标说明:</label>
                    <textarea id="J_bidArea" name="_fm.s._0.m"></textarea>
                    <span class="red" id="J_areaerr"></span>
                </li>
                        <li class="tender-updata">
                    <div class="pub-upload">
                      <a id="J_UploaderBtn" href="javascript:void(0)" data-config='{"type":"auto","autoUpload":"false",
                        "serverConfig":{
                        "action":"http://ying.daily.taobao.net/json/upload_response.htm?_input_charset=UTF-8",
                        "data":{
                        "_fm.a._0.o" :"3",
                        "_tb_token_":"1rYGwFal",
                        "action":"uploadAction",
                        "event_submit_do_upload_attach":"1"
                        }},
                        "name":"_fm.a._0.f",
                        "urlsInputName":"files"}',
            data-auth='{
            "max":[5, "最多上传{max}张图片！"],
            "maxSize":[3072, "图片大小为{size}，图片太大！"],
            "allowRepeat":[false, "该图片已经存在！"],
            "allowExts":[{"desc":"JPG,JPEG,PNG,GIF", "ext":"*.jpg;*.jpeg;*.png;*.gif"},
            "不支持{ext}格式的图片上传！"]}'
            > 选择要上传的文件 </a>
                        <ul id="J_UploaderQueue"></ul>
                        <span class="g2">最多可添加五个附件，每个大小不超过3MB。</span>
                    </div>
          <span class="red" id="J_attacherr"></span>
        </li>
                        <li class="tender-updata">
                    <div>
                                  <input type="checkbox" id="J_rule" checked="checked"> 我已经阅读并同意《<a href="http://service.taobao.com/support/knowledge-5123306.htm" target="_blank">淘宝网有求必应服务协议</a>》
            <span class="red" id="J_checkerr" style="display:none">请确认同意该服务条款</span>
                              </div>
                </li>
                <li>
                    <div class="tender-btn">
                        <input id="J_bidSubmit" type="button" class="btn_tender">
                        <span id="J_pubing" class="pubing" style="display:none"></span>
                    </div>
                </li>
            </ul>
        </div>
  </form>
</div>
</script>

<script type="text/template" id="default-pagination-tpl">
    {{#! 显示首页 }}
    {{#if currentPage === startPage }}
    <a class="pg-prev pg-first pg-disabled" href="demo.html#">首页</a>
    {{#else}}
    <a class="pg-prev pg-first" href="demo.html#" data-page="{{ startPage }}">首页</a>
    {{/if}}

    {{#! 显示上一页 }}
    {{#if currentPage === startPage }}
    <a class="pg-prev pg-disabled">上一页</a>
    {{#else}}
    <a class="pg-prev" href="demo.html#" data-page="{{ currentPage - 1 }}">上一页</a>
    {{/if}}

    {{#if showPageNum }}
    {{#! 左边固定显示几页, 如固定显示 1 和 2 }}
    {{#if currentPage > startPage + alwaysDisplayCount - 1}}
    {{#for var i = 0; i < alwaysDisplayCount; i++ }}
    {{#! 避免后面重复显示 }}
    {{#if i + startPage < startIndex }}
    <a class="pg-page pg-item" href="demo.html#" data-page="{{ i + startPage }}">{{ i + startPage }}</a>
    {{/if}}
    {{/for}}
    {{/if}}

    {{#! 是否显示省略号 }}
    {{#if ellipseText && startIndex > startPage + alwaysDisplayCount }}
    <span class="pg-item">…</span>
    {{/if}}

    {{#! 显示页数 }}
    {{#for var i = startIndex; i <= endIndex; i++ }}
    {{#if currentPage !== i }}
    <a class="pg-page pg-item" href="demo.html#" data-page="{{ i }}">{{ i }}</a>
    {{#else}}
    <span class="pg-current pg-item">{{ i }}</span>
    {{/if}}
    {{/for}}

    {{#! 是否显示省略号 }}
    {{#if ellipseText && endIndex < endPage - alwaysDisplayCount }}
    <span class="pg-item">…</span>
    {{/if}}

    {{#! 右边固定显示几页 }}
    {{#if currentPage < endPage - alwaysDisplayCount + 1 }}
    {{#for var i = endPage - alwaysDisplayCount + 1; i <= endPage; i++ }}
    {{#if i > endIndex }}
    <a class="pg-page pg-item" href="demo.html#" data-page="{{ i }}">{{ i }}</a>
    {{/if}}
    {{/for}}
    {{/if}}
    {{/if}}

    {{#! 显示下一页 }}
    {{#if currentPage === endPage }}
    <a class="pg-next pg-disabled">下一页</a>
    {{#else}}
    <a class="pg-next" href="demo.html#" data-page="{{ currentPage + 1 }}">下一页</a>
    {{/if}}

    {{#! 显示末页 }}
    {{#if currentPage === endPage }}
    <a class="pg-next pg-last pg-disabled" href="demo.html#">末页</a>
    {{#else}}
    <a class="pg-next pg-last" href="demo.html#" data-page="{{ endPage }}">末页</a>
    {{/if}}
</script>
<script>
KISSY.config({
    packages:[
        {
            name:"assets",
            tag:"20120628",
            <?php
                if($_SERVER['HTTP_HOST'] == 'jfengsky.daily.taobao.net'){
                    echo 'path:"http://jfengsky.daily.taobao.net/c2bmarket/merger/"';
                }else{
                    echo 'path:"http://a.tbcdn.cn/apps/c2bmarket/group/v1/"';
                }

            ?>
        }
    ]
});
KISSY.use('assets/detail');
KISSY.config({
  packages:[ {
      name:"gallery",
      path:"http://a.tbcdn.cn/s/kissy/",
      charset:"utf-8"
    } ]
});
</script>
<script src="http://a.tbcdn.cn/p/snsdk/core.js"></script>


<?php
  require('inc/footer.php');
?>