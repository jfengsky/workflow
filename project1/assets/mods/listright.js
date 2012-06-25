/**
 * 列表页右侧交互
 * @Author: wb-jiangfeng
 * @Time: 12-6-20 下午7:18
 * @Param:
 *  -
 *  -
 * @Return:
 *
 */

KISSY.add(function(S, D, E, P){
    //鼠标滑过高亮
    E.on('#J_listneed tr','mouseenter mouseleave',function(ev){
        if(ev.type == 'mouseenter'){
            D.addClass(D.parent(ev.target,'tr'),'on');
        }
        if(ev.type == 'mouseleave'){
            D.removeClass(D.parent(ev.target,'tr'),'on');
        }
    })
    //KISSY 翻页组件
    function getCurrentPage() {
        return S.unparam(window.location.search.substring(1)).page || 1;
    }

    var content = S.one('#page-content-2'),
        pagination = new P({
            container: '#page2',
            totalPage: 10,
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
},{requires:['dom','event','assets/mods/pagination']});


