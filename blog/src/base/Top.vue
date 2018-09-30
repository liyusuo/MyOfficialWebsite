<template>
    <div class="topDiv">
      <div class="Box">
        <div class="imgDiv">
          <img src="../assets/banner1_1.jpg" alt="" :style="{marginLeft:screenWidth}">
          <img src="../assets/banner1_2.png" alt="" :style="{left:screenWidth}">
        </div>
        <div class="title_box">
          <div class="title_test">
            <span>想法与技术</span><br>
            <span>改变世界</span>
          </div>
        </div>
        <div class="listBox">
          <ul class="listBox_ul">
            <li>
              <h2>vue.js</h2>
            </li>
            <li>
              <h2>react.js</h2>
            </li>
            <li>
              <h2>node.js</h2>
            </li>
            <li>
              <h2>javascript</h2>
            </li>
            <li>
              <h2 style="font-size: 20px">弹性盒模型</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
      name: "top",
      data(){
          return{
            screenWidth: -(1920-document.body.clientWidth)/2+'px',
          }
      },
      mounted(){
        const that = this
        window.onresize = () => {
          return (() => {
            window.screenWidth = document.body.clientWidth
            that.screenWidth = -(1920 -window.screenWidth)/2+'px'
          })()
        }
      },
      watch: {
        screenWidth (val) {
          if (!this.timer) {
            this.screenWidth = val
            this.timer = true
            let that = this
            setTimeout(function () {
              that.timer = false
            }, 400)
          }
        }
      },
      methods:{

      }
    }
</script>
<style scoped>
  img{
    width: 100%;
  }
  .topDiv{
    width: 100%;
  }
  .Box{
    width: 100%;
    position: relative;
  }
  .imgDiv{
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
  }
  .imgDiv img{
    width: 1920px;
    height: 640px;
  }
  .imgDiv img:nth-child(2){
    position: absolute;
    top: 0;
    left: 0px;
    opacity: 0.1;
    animation: img_opacity 1.5s ease-out infinite  alternate ;
  }

  @keyframes img_opacity {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  .title_box{
    width: 1350px;
    position: absolute;
    color: #fff;
    font-size: 40px;
    top: 230px;
    margin-left: -675px;
    left: 50%;
    z-index: 200;
  }
  .title_box .title_test span:nth-of-type(2){
    display: inline-block;
    padding-left: 150px;
  }
  .listBox{
    width: 100%;
    background-color: #393B43;
    position: absolute;
    bottom: 4px;
  }
  .listBox_ul{
    width: 1350px;
    display: flex;
    flex-wrap: nowrap;
    margin: 0 auto;
    color: #fff;
  }
  .listBox_ul li{
    width: 230px;
    padding: 30px 20px 30px 20px;
    height: 70px;
    border-left: 1px solid #727577;
    border-color: hsla(0,0%,100%,.06);
  }
  .listBox_ul li:nth-of-type(5){
    border-right: 1px solid #727577;
    border-color: hsla(0,0%,100%,.06);
  }




</style>
