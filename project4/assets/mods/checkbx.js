/**
 * 有求必应公益版 复选框显示隐藏功能
 * @Author: jiangfeng
 * @Time: 12-7-24 14:23
 * @Return:
 *
 */
KISSY.add(function(S, D, E){
	function Checkbx(id, fn1, fn2){
		var self = this;
		this.init = function(){
			if(D.prop(id,'checked')){
				fn1();
			}else{
				fn2();
			}
		};
		this._click = function(){
			self.init();
			E.on(id,'click',self.init);
		};
	}
	return Checkbx;
},{requires:['dom','event']});