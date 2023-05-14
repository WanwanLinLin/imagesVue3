<template>
    <nav class="app-topnav">
    <div class="container">
      <ul>
        <li><a href="javascript:;"><i class="iconfont icon-user"></i>胡汉三</a></li>
        <li><a href="javascript:;">退出登录</a></li>
        <li><a href="javascript:;">登录战斗系统</a></li>
        <li><a href="javascript:;">战斗成员注册</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>

</script>

<style lang="less" scoped>
@import '@/assets/styles/variables.less';
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
        &:hover {
          color: @xtxColor;
        }
      }
      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>