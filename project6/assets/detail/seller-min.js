KISSY.add(function(e,a,d){var b=false,c={_show:function(){a.show("#J_bidbtn");a.show("#J_bidtips");a.removeClass(".c2b-seller-bid",".c2b-bid-up");b=true},_hide:function(){a.hide("#J_bidbtn");a.hide("#J_bidtips");a.addClass(".c2b-seller-bid",".c2b-bid-up");b=false}};a.val("#J_isSeller")=="true"&&c._show();d.on("#J_bidshow","click",function(){b?c._hide():c._show()})},{requires:["dom","event","ua","overlay","ajax","assets/login/login","sizzle"]});
