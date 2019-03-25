<template>
  <footer :class="$style.footer">
    <div :class="$style.companyinfo">
      <div>
        <p>© 2019 上海玄霆娱乐信息科技有限公司版权所有</p>
        <p>增值电信业务经营许可证：沪B2-20080046-23</p>
        <p>舞弊监督举报 | 舞弊举报电话：021-61870509 | 内容举报电话：13785633681；010-5935705</p>
        <div :class="$style.icon">
          <a href="javascript:"></a>
          <a href="javascript:"></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style module lang="scss">
.footer {
  .companyinfo {
    background: #191e22;
    > div {
      width: 1220px;
      margin: 0 auto;
      padding: 28px 0;
      position: relative;
      p {
        color: #d1d2d4;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
        &:nth-child(1) {
          color: #fff;
          font-size: 12px;
          font-weight: 500;
        }
      }
      .icon {
        position: absolute;
        right: 0;
        top: 40px;
        a {
          display: inline-block;
          width: 44px;
          height: 45px;
          background: url(//qidian.gtimg.com/yuewen/v1/css/images/icons-share.png)
            no-repeat;
          background-size: 44px 90px;
          &:nth-child(1) {
            background-position: 0 -45px;
            margin-right: 20px;
          }
          &:nth-child(2) {
            background-position: 0 0;
          }
        }
      }
    }
  }
}
</style>