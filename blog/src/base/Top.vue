<template>
    <div class="topDiv">
      <!--<div>L</div>
      <div>i</div>
      <div>Y</div>
      <div>u</div>
      <div>S</div>
      <div>u</div>
      <div>o</div>-->
      <img src="../assets/banner2.jpg" alt="" class="imgSize" style="width: 100%">
      <img src="../assets/banner1.png" alt="" class="imgSize imgbanner1" style="width: 100%">
    </div>
</template>

<script>
    export default {
        name: "top"
    }
</script>

<style scoped>
  .topDiv{
    width: 100%;
    height: auto;
    position: relative;

  }
  .topDiv div{
    position: absolute;
    font-weight: 700;
    font-size: 100px;
    color: white;
  }
  .topDiv div:nth-child(1){
    position: absolute;
    left: 700px;
    animation: L 1s linear ;
  }
  .topDiv div:nth-child(2){
    position: absolute;
    left: 760px;
    animation: I 1s linear ;
  }
  .topDiv div:nth-child(3){
    position: absolute;
    left: 820px;
    animation: Y 1s linear ;
  }
  .topDiv div:nth-child(4){
    position: absolute;
    left: 880px;
    animation: U1 1s linear ;
  }
  .topDiv div:nth-child(5){
    position: absolute;
    left: 940px;
    animation: S 1s linear ;
  }
  .topDiv div:nth-child(6){
    position: absolute;
    left: 1000px;
    animation: U2 1s linear ;
  }
  .topDiv div:nth-child(7){
    position: absolute;
    left: 1060px;
    animation: O 1s linear ;
  }
  .imgbanner1{
    position: absolute;
    top: 0px;
    opacity: 0.2;
    animation: imgBanner1 2.5s  ease-out  infinite  alternate;

  }
  .imgSize{
    min-height: 560px;
    min-width: 1679px;
  }
  @keyframes imgBanner1 {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }

  }
  @keyframes L {
    0%{
      left: 0.2px;
    }
    100%{
      left: 700px;
    }
  }
  @keyframes I {
    0%{
      left: 0px;
    }
    100%{
      left: 760px;
    }
  }
  @keyframes Y {
    0%{
      left: 0px;
    }
    100%{
      left: 820px;
    }
  }
  @keyframes U1 {
    0%{
      left: 0px;
    }
    100%{
      left: 880px;
    }
  }
  @keyframes S {
    0%{
      left: 0px;
    }
    100%{
      left: 940px;
    }
  }
  @keyframes U2 {
    0%{
      left: 0px;
    }
    100%{
      left: 1000px;
    }
  }
  @keyframes O {
    0%{
      left: 0px;
    }
    100%{
      left: 1060px;
    }
  }
</style>
