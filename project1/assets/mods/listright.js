/**
 * �б�ҳ�Ҳཻ��
 * @Author: wb-jiangfeng
 * @Time: 12-6-20 ����7:18
 * @Param:
 *  -
 *  -
 * @Return:
 *
 */

KISSY.add(function(S, D, E, P){
    //��껬������
    E.on('#J_listneed tr','mouseenter mouseleave',function(ev){
        if(ev.type == 'mouseenter'){
            D.addClass(D.parent(ev.target,'tr'),'on');
        }
        if(ev.type == 'mouseleave'){
            D.removeClass(D.parent(ev.target,'tr'),'on');
        }
    })
    //KISSY ��ҳ���
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
                // ͬ��ˢ�·�ʽ, ע�� loadCurrentPage ������Ϊ false
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

                // ���������ݺ�, ֪ͨ�·�ҳ�����¼���״̬
                ready(idx);

                // ҳ����ת
                window.location.href = url + 'page=' + idx + anchor;
            }
        });
},{requires:['dom','event','assets/mods/pagination']});


