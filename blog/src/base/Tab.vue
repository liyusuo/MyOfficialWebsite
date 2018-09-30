<template>
  <div class="navBox">
    <div class="Logo">
      Liysuo's BLOG
    </div>
    <div class="nav">
      <ul class="nav_ul">
        <li>
          <router-link to="home"><i class="iconfont icon-zhuye"></i><span>主页</span></router-link>
        </li>
        <li>
          <router-link to="web"><i  class="iconfont icon-web"></i><span>web前端</span></router-link>
        </li>
        <li>
          <router-link to="personCenter"><i class="iconfont icon-user"></i><span>个人中心</span></router-link>
        </li>
        <li>
          <router-link to="messageBoard"><i class="iconfont icon-liuyan"></i><span>留言板</span></router-link>
        </li>
        <li>
          <router-link to="about"><i class="iconfont icon-guanyuwo"></i><span>关于本站</span></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tab"
  }
</script>
<style scoped>
  ul{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: #fff;
  }
  .navBox{
    width: 100%;
    height: 50px;
    min-width: 1000px;
    position: absolute;
    top: 0;
    z-index: 1000;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    border-bottom: 1px solid hsla(0,0%,100%,.15);
    transition: all 0.5s;
  }
  .navBox:hover{
    background-color: rgba(28,35,39,1);
  }
  .Logo{
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    color: #fff;
    padding: 0 30px;
  }
  .nav_ul{
    display: flex;

  }
  .nav_ul li a{
    display: inline-block;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    font-size: 14px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

  }
  .nav_ul li a span{
    padding-left: 5px;
  }
  .nav_ul li a:hover{
    color: #00a2ca;
  }


</style>
