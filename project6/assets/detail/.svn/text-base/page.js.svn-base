/**
 * 合买版detail页面 竞标商品分页
 * @Author: wb-jiangfeng
 * @Time: 2012-10-27 16:25
 * @Param:
 */

KISSY.add(function(S, D, P) {



function getCurrentPage() {
    return S.unparam(window.location.search.substring(1)).page || 1;
}
var total_page = D.val('#J_tPage');
if(total_page <= 1){
    D.html('#J_page','');
    D.css('#J_page','padding',0);
    return;
}
if(S.one('#default-pagination-tpl') == null) return;
pagination = new P({
    container: '#J_page',
    totalPage: total_page,
    template: S.one('#default-pagination-tpl').html(),
    currentPage: getCurrentPage(),
    loadCurrentPage: false,
    callback: function(idx, pg, ready) {
// 同步刷新方式, 注意 loadCurrentPage 必须设为 false
var url = window.location.href,
anchor = '',
anchorIndex = url.indexOf('#');

if (anchorIndex > -1) {
    anchor = url.substring(anchorIndex);
    url = url.substring(0, anchorIndex);
}

if (url.indexOf('?') === -1) url += '?';
else url += '&';

url = url.replace(/page=\-?\d+&*/ig, "");

// 加载完内容后, 通知下分页器更新加载状态
ready(idx);

// 页面跳转
window.location.href = url + 'page=' + idx + anchor;
    }
});
    



}, {
    requires: ['dom','assets/detail/pagination']
});