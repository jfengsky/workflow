/**
 * 有求必应公益版 根据捐款份数计算支付金额
 * @Author: jiangfeng
 * @Time: 12-7-24 10:58
 * @Return:
 *
 */

KISSY.add(function(S, D, E, UA){
	function InputListen(id, fn){
		this.listen = function(){
			if(UA.shell == 'ie'){  // 如果ie
                E.on(id,'propertychange',function(){
                    fn();
                });
            }else{
                E.on(id,'input',function(){
                    fn();
                });
            }
		};
	}
	function numchange(){
		//TODO只能输入数字

		var pay_init = 1;	//默认每份捐款金额为1;
		var temp_numbers = D.val('#J_number'); //获取捐款份数 整数
		var total_show = pay_init * temp_numbers; //支付总额
		D.html('#J_payshow', total_show);
		//支付金额写入隐藏域 以分为单位
		D.val('#J_amount', total_show * 100);
	}
	var payinput = new InputListen('#J_number', numchange);
	payinput.listen();
},{requires:['dom','event','ua']});