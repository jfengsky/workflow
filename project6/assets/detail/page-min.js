KISSY.add(function(b,c,h){function i(){return b.unparam(window.location.search.substring(1)).page||1}var e=c.val("#J_tPage");if(e<=1){c.html("#J_page","");c.css("#J_page","padding",0)}else if(b.one("#default-pagination-tpl")!=null)pagination=new h({container:"#J_page",totalPage:e,template:b.one("#default-pagination-tpl").html(),currentPage:i(),loadCurrentPage:false,callback:function(f,a,j){a=window.location.href;var g="",d=a.indexOf("#");if(d>-1){g=a.substring(d);a=a.substring(0,d)}a+=a.indexOf("?")===
-1?"?":"&";a=a.replace(/page=\-?\d+&*/ig,"");j(f);window.location.href=a+"page="+f+g}})},{requires:["dom","assets/detail/pagination"]});