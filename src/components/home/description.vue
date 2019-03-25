<template>
  <section :class="$style.des">
    <div>
      <p>
        阅文集团旗下囊括 QQ 阅读、起点中文网等业界知名品牌，
        <br>拥有上千万部作品储备、730 万名创作者，覆盖 200 多种内容品类，
        <br>占据国内 IP 改编市场优势份额，成功输出《鬼吹灯》、《盗墓笔记》、
        <br>《琅琊榜》、《择天记》等大量优秀改编作品。
        <i></i>
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style module lang="scss">
.des {
  width: 1220px;
  margin: 0 auto;
  > div {
    width: 688px;
    margin: 0 auto;
    p {
      text-align: center;
      color: #3e4652;
      margin: 60px auto 40px;
      font-size: 18px;
      text-shadow: 0 1px #fff;
      line-height: 1.8;
      position: relative;
      font-weight: 300;
      &::before {
        content: url(//qidian.gtimg.com/yuewen/v1/css/images/yw-db-arr.png);
        width: 52px;
        height: 44px;
        position: absolute;
        overflow: hidden;
        left: -100px;
        top: 20px;
      }
      &::after {
        background: url(//qidian.gtimg.com/yuewen/v1/css/images/yw-db-arr.png);
        width: 52px;
        height: 44px;
        position: absolute;
        overflow: hidden;
        content: "";
        right: -100px;
        top: 20px;
        background-position: -52px 0;
      }
      i {
        width: 128px;
        height: 1px;
        background: #d3dce0;
        position: absolute;
        bottom: -40px;
        left: 50%;
        margin-left: -64px;
      }
    }
  }
}
</style>