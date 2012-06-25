/**
 * 首页js配置文件
 * @Author: wb-jiangfeng
 * @Time: 12-6-15 上午11:20
 * @Param:
 *  - assets/mods/login 登录判断
 *  - assets/mods/text_scrolling 顶部右侧滚动文本
 *  - assets/mods/topflash 顶部什么是有求必应弹出层
 *  - assets/mods/topback 右侧在线咨询 回到顶部按钮
 * @Return:
 *
 */
KISSY.add(function(S, Login,Text_Scrolling){
    Text_Scrolling.scrolling();
},{requires:['assets/mods/login','assets/mods/text_scrolling','assets/mods/pubscroll','assets/mods/topflash','assets/mods/topback']});
