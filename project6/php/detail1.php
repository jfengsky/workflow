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
        css('assets/detail/leader','assets/detail/item-pic','assets/detail/item-property','assets/detail/item-infos','assets/detail/bid','assets/detail/comment','assets/detail/progress','assets/detail/seller','assets/detail/other');
    }else if($_SERVER['HTTP_HOST'] == 'fed.ued.taobao.net'){
        fedcss($fed_url.'assets/detail/leader',
          $fed_url.'assets/detail/item-pic',
          $fed_url.'assets/detail/item-property',
          $fed_url.'assets/detail/item-infos',
          $fed_url.'assets/detail/bid',
          $fed_url.'assets/detail/comment',
          $fed_url.'assets/detail/progress',
          $fed_url.'assets/detail/seller',
          $fed_url.'assets/detail/other'
          );
    }else{
        // ucool 地址
        echo '<link rel="stylesheet" href="http://assets.daily.taobao.net/apps/c2bmarket/group/v1/assets/??detail/leader.css,detail/item-pic.css,detail/item-property.css,detail/item-infos.css,detail/bid.css,detail/comment.css,detail/progress.css,detail/seller.css,detail/other.css" />';
        // <link rel="stylesheet" href="http://a.tbcdn.cn/apps/c2bmarket/group/v1/assets/??detail/leader-min.css,detail/item-pic-min.css,detail/item-property-min.css,detail/item-infos-min.css,detail/bid-min.css,detail/comment-min.css,detail/progress-min.css,detail/seller-min.css,detail/other-min.css" />
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
      require('detail/progress1.php');
      require('detail/seller2.php');
      require('detail/other.php');
      require('detail/pop.php');
    ?>
  </div>
</div>





<?php
  require('inc/footer.php');
?>