/**
 * @fileoverview Pagination
 * @desc ��ҳ���
 * @author �ǻ�<shengyan1985@gmail.com>
 * @date 20110918
 * @version 1.0
 * @depends kissy, template
 */
KISSY.add(function(S, Template, undefined) {
    var EVENT_PAGE_BEFORE = 'beforePageChange',
        EVENT_PAGE_AFTER = 'afterPageChange',  // ��ʵ�Ǻ� afterCurrentPageChange �ȼ۵�
        ENTER = 13,

        DEFAULT_TPL = '';

    // ���for���
    Template.addStatement('for', {
        start: 'for(KS_TEMPL_STAT_PARAM){',
        end: '}'
    });
    /**
	 * ������
	 * @param {Object} cfg ���ò���
	 * @return
	 */
    function Pagination(cfg) {
        Pagination.superclass.constructor.apply(this, arguments);
        this._init();
    }
	
	//������
    Pagination.ATTRS = {
        /**
         * ��ҳ�� DOM ����
         * @type String|HTMLElement|KISSY.Node
         */
        container: {
            setter: function(v) {
                if (S.isString(v)) {
                    return S.one(v);
                }
                if (v.offset) return v;
                return new S.Node(v);
            }
        },
        /**
         * �����ҳ��ʱ, ���õĺ���
         * @type Function
         * ����������:
         *  - idx: ��ҳ��
         *  - pg obj: ��ǰ��ҳ����
         *  - ready: fn ���ⲿ������, ���л���ҳʱ, ���·�ҳHTML�Ⱥ�������
         */
        callback: {
            value: function(idx, pg, ready) {
                ready(idx);
            }
        },
        /**
         * ��ǰҳ���
         * @type Number
         */
        currentPage: {
            value: 1,
            setter: function(v) {
                return parseInt(v);
            }
        },
        /**
         * ���ҳ��ʱ, url �仯, ��ʱ��ʵ��
         */
        linkTo: {
            value: '#'
        },
        /**
         * ��ʾ����ҳ.
         * - ��Ϊ0ʱ, ��ʾֻ��ʾ��һҳ/��һҳ
         * - ... prev1 prev2 current next1 next2 ...
         * @type Number
         */
        displayPageCount: {
            value: 2,
            setter: function(v) {
                return parseInt(v);
            }
        },
        /**
         * ������ʾǰxҳ���xҳ.
         * @type Number
         */
        alwaysDisplayCount: {
            value: 1,
            setter: function(v) {
                return parseInt(v);
            }
        },
        /**
         * �ܹ�����ҳ, ������ֵ��ֵʱ, ���ܼ���ҳ��, ֻ����ʾ��һҳ����һҳ
         * @type Number
         */
        totalPage: {
            value: 0,
            setter: function(v) {
                if (v) this.set('endPage', v + this.get('firstPage') - 1);
            }
        },
        /**
         * ��ҳ���, ��ҳ��Ŵ��ı߿�ʼ��
         * @type Number
         */
        firstPage: {
            value: 1,
            setter: function(v) {
                return parseInt(v);
            }
        },
        /**
         * ĩҳ���
         * @private
         * @type Number
         */
        endPage: {
            value: 0
        },
        /**
         * �Ƿ�����һҳ, ����Щ����ȷҳ�������ʹ��, ��Ҫ��̨�ӿڸ���
         * @type Boolean
         */
        hasNext: {
            value: true
        },
        /**
         * �Ƿ�ʡ�Զ�ҳ
         * @type Boolean
         */
        ellipseText: {
            value: true
        },
        /**
         * �Ƿ��ʼ���ص�һҳ
         * @type Boolean
         */
        loadCurrentPage: {
            value: true
        },
        /**
         * ��ҳģ��
         * @type String
         */
        template: {
            value: DEFAULT_TPL
        },
        /**
         * ���ӱ�־, ���Ԫ��������иñ�־, ��Ҫ��ת���ض�ҳ
         * @type String
         */
        pageRedirectHook: {
            value: 'data-page'
        },
        /**
         * ��ҳ����������״̬��־
         * @type Boolean
         * @private
         */
        isLoading: {
            value: false
        },
        /**
         * �����¼�֧��
         * @type Object  such as:
         * {
         *     'J_className1': {
         *         click: function(e) {
         *              // do sth
         *         }
         *     }
         *     'J_className2': {
         *         click: "page"
         *     }
         * }
         */
        events: {
            value: {}
        }
    };
    S.extend(Pagination, S.Base, {
        _init: function() {
            var self = this;

            // �����һҳ
            if (self.get('loadCurrentPage')) {
                self.page(self.get('currentPage'));
            } else {
                self.update();
            }
            self._bind();
        },
        /**
         * ���ݵ�ǰ״̬, ����HTML
         */
        update: function() {
            var self = this,
                currentPage = self.get('currentPage'),
                // �����ʾ���ٸ�ҳ��
                displayPageCount = self.get('displayPageCount'),
                // ��ʼҳ/ĩҳ���
                firstPage = self.get('firstPage'), endPage = self.get('endPage'),
                // ǰ��������ʾ����ҳ
                alwaysDisplayCount = self.get('alwaysDisplayCount'),
                // ��ʼҳ��
                startIndex, endIndex,
                // �Ƿ�Ҫ������ʾҳ��
                ellipseText = self.get('ellipseText');

            // ��Ҫ��ʾʡ�Ժ�ʱ, ��Ҫȷ����ʾҳ������
            if (endPage && ellipseText) {
                startIndex = Math.min(Math.max(firstPage, parseInt(currentPage - displayPageCount)), endPage - displayPageCount * 2);
                endIndex = Math.min(endPage, startIndex + displayPageCount * 2);
            }
            // �������ȫ����ʾҳ��, �Ҵ�ʱ alwaysDisplayCount ��Ч,
            // displayPageCount ֻȡ 0 ��� 0. falsy ����ʾҳ��, truth ��ʾҳ��
            else if (endPage) {
                startIndex = firstPage;
                endIndex = endPage;
            }

            S.log([currentPage, ellipseText, firstPage, endPage, alwaysDisplayCount, !!displayPageCount, Math.max(startIndex, firstPage), Math.min(endIndex, endPage), self.get('hasNext')]);
            self.get('container').html(Template(self.get('template')).render({
                currentPage: currentPage,
                ellipseText: ellipseText,
                startPage: firstPage,
                endPage: endPage,
                alwaysDisplayCount: alwaysDisplayCount,
                showPageNum: !!displayPageCount,
                startIndex: Math.max(startIndex, firstPage),
                endIndex: Math.min(endIndex, endPage),
                hasNext: self.get('hasNext')
            }));

            self.fire(EVENT_PAGE_AFTER, {idx: currentPage});
        },
        /**
         * �󶨵���¼�, ��ҳ���л�
         */
        _bind: function() {
            var self = this,
                container = self.get('container'),
                pageTo = function(e) {
                    var target = new S.Node(e.target),
                        hook = parseInt(target.attr(self.get('pageRedirectHook')));
                    if (isNaN(hook)) return;

                    e.preventDefault();
                    if (self.get('isLoading')) return;

                    self.page(hook);
                };

            container.on('click', pageTo)/*.on('keyup', function(e) {
                if (e.keyCode === ENTER) {
                    pageTo(e);
                }
            })*/;


            // �û������¼�
            var eventsCfg = self.get('events'),
                eventsList = [];
            // �����ҵ������¼�����
            S.each(eventsCfg, function(eventsObj) {
                S.each(eventsObj, function(fn, events) {
                    eventsList.push(events);
                });
            });
            S.each(eventsList, function(events) {
                // ���¼�����
                container.on(events, function(e) {
                    var target = new S.Node(e.target),
                        runList = [];
                    while(target && target[0] !== container[0]) {
                        // �����ض������ϵ��ض��¼�
                        S.each(eventsCfg, function(eventsObj, cls) {
                            if (target.hasClass(cls)) {
                                S.isFunction(eventsObj[events]) && runList.push(eventsObj[events]);
                            }
                        });
                        // ���ϱ���, ��ʱ target �ᱻɾ����
                        target = target.parent();
                    }

                    // ����ִ��
                    S.each(runList, function(fn) {
                        fn.call(self, e);
                    });
                });
            });
        },
        /**
         * ��ת���ڼ�ҳ
         * @param idx
         */
        page: function(idx) {
            idx = parseInt(idx);
            if (isNaN(idx)) return;

            var self = this,
                endPage = self.get('endPage');

            if (self.fire(EVENT_PAGE_BEFORE, {idx: idx}) === false) return;

            // ��ֹ�ظ��л�
            self.set('isLoading', true);

            // ��ҳ���л����ض�ҳʱ��״̬
            self.set('currentPage', idx);

            // �����Կ���, ����ȡ�� endPage ʱ, Ҳȥ������ hasNext ֵ
            // ��û��ȡ�� endPage ʱ, ֻ��������̨���ⲿ�趨 hasNext ֵ����ܸ��·�ҳ��, ���뼴 ready �е� ����
            if (endPage)  {
                self.set('hasNext', idx < endPage);
                self.update();
            }

            // ������ĳҳ��������
            function ready() {
                if (!endPage) {
                    self.update();
                }
                self.set('isLoading', false);
            }
            var cb = self.get('callback');
            S.isFunction(cb) && cb(idx, self, ready);
        },
        destroy: function() {
            var self = this;
            // ɾ�������¼�!!
            self.get('container').detach();
            self.get('container').remove();
        }
    });

    return Pagination;
}, {
    requires: ["template"]
});
/**
 * - �����ҳHTMLģ��, ���Ӷ��� --- 20111108 Done;
 * - ��ʼҳ/����ҳ --- 20111109 Done;
 * - ��תҳ�� --- 20111110 Done;
 * - aria/tabindex --- �ο����������, ò��û�ж�û�п���, ��ʱȥ�� tabElem[0].focus()
 */