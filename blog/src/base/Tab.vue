<template>
  <div class="navBox">
    <div class="logo">
      Liysuo's BLOG
    </div>
    <div id="nav">
      <ul class="nav-menu clearfix unstyled">
        <li>
          <a href="#" class="three-d active">
            主页
            <span class="three-d-box">
              <span class="front">主页</span>
              <span class="back">主页</span>
            </span>
          </a>
        </li>
        <li>
          <a href="#" class="three-d">
            个人中心
            <span class="three-d-box">
              <span class="front">个人中心</span>
              <span class="back">个人中心</span>
            </span>
        </a>
        </li>
        <li>
          <a href="#" class="three-d">
            web前端
            <span class="three-d-box">
              <span class="front">web前端</span>
              <span class="back">web前端</span>
            </span>
          </a>
          <ul class="clearfix unstyled drop-menu">
            <li>
              <a href="#" class="three-d">
                Html5
                <span class="three-d-box">
                  <span class="front">Html5</span>
                  <span class="back">Html5</span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" class="three-d">
                Css3
                <span class="three-d-box">
                  <span class="front">Css3</span>
                  <span class="back">Css3</span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" class="three-d">
                JavaScript
                <span class="three-d-box">
                  <span class="front">JavaScript</span>
                  <span class="back">JavaScript</span>
                </span>
             </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" class="three-d">
            留言板
            <span class="three-d-box">
              <span class="front">留言板</span>
              <span class="back">留言板</span>
            </span>
          </a>
        </li>
        <li>
          <a href="#" class="three-d">
            关于本站
            <span class="three-d-box">
              <span class="front">关于本站</span>
              <span class="back">关于本站</span>
            </span>
          </a>
        </li>
        <p style="clear: both"></p>
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
  .navBox{
    width: 100%;
    min-width: 1000px;
    background: linear-gradient(to right,rgba(255,255,255,0.05) ,rgba(255,255,255,0.2) );
    background-size: 200%;
    background-position:-200% 0%;
    animation:gradient 15s cubic-bezier(0.5,0.5,1,0.3) infinite;
    position: fixed;
    top: 0;
    z-index: 100;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  .logo{
    width: 300px;
    height: 50px;


    font-size: 30px;
    text-align: center;
    line-height: 50px;
    color: whitesmoke;
  }
  #nav{
    background-color: rgba(32,35,44,0);
  }
  @keyframes gradient{
    0% {
      background-position: 200% 0%;
    }
    100% {
      background-position: -200% 0%;
    }
  }
  .nav-menu {
    display: block;
    width: 652px;
    padding: 0;
    margin: 0 auto;
  }
  .nav-menu > li {
    display: inline;
    float: left;
    border-right: 1px solid rgba(32,35,44,0.6);
  }
  .nav-menu > li:last-child {
    border-right: none;
  }
  .nav-menu li a {
    color: rgba(255,255,255,0.5);
    display: block;
    text-decoration: none;
    /*调用本地字体*/
    font-family: sansationregular;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    font-smoothing: antialiased;
    text-transform: capitalize;
    overflow: visible;
    line-height: 20px;
    font-size: 20px;
    padding: 15px 30px 15px 31px;
  }
  .three-d {
    /* 任务三、设置3D舞台布景 */
    perspective: 200px;
    /*任务四、设置3D舞台布景过渡效果*/
    transition: all .7s linear;
    position: relative;
  }
  .three-d:not(.active):hover {
    cursor: pointer;
  }
  /*任务五、给不是当前状态的3D舞台的悬浮与聚焦状态设置变形效果*/
  .three-d:not(.active):hover .three-d-box,
  .three-d:not(.active):focus .three-d-box {
    transform: translateZ(-25px) rotateX(90deg);
    /*    -webkit-transform:rotateX(90deg) translatez(-25px);*/
    /*   -webkit-transform:rotatex(90deg);*/
  }
  .three-d-box {
    /*任务六、给3D舞台中“.three-d-box”设置过渡与变形效果*/
    transition: all .3s ease-out;
    transform: translatez(-25px);
    transform-style: preserve-3d;
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
  }
  /*任务七、给导航设置3D前，与3D后变形效果*/
  .front {
    transform: rotatex(0deg) translatez(25px);
  }
  .back {
    transform: rotatex(-90deg) translatez(25px);
    color: #FFE7C4;
  }
  .front, .back {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,255,255,0.2);
    padding: 15px 30px 15px 31px;
    color: white;
    pointer-events: none;
    box-sizing: border-box;
  }
  /*任务八、设置导航当前状态与悬浮状态下的背景效果*/
  .nav-menu li .active .front,
  .nav-menu li .active .back,
  .nav-menu li a:hover .front,
  .nav-menu li a:hover .back {
    background-color: rgba(0,255,255,0.6);
    background-size: 5px 5px;
    background-position: 0 0, 30px 30px;
  }
  .nav-menu ul {
    position: absolute;
    text-align: left;
    line-height: 40px;
    font-size: 14px;
    width: 200px;
    transition: all 0.3s ease-in;
    transform-origin: 0px 0px;
    transform: rotateX(-90deg);
    backface-visibility: hidden;
  }
  /*任务九、显示下拉导航菜单，并其设置一个变形效果*/
  .nav-menu > li:hover ul {
    /*          display: block;*/
    transform: rotateX(0deg);
  }
</style>
