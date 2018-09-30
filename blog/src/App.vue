<template>
  <div id="app">

    <Tab></Tab>
    <router-view></router-view>
  </div>
</template>

<script>
  import Tab from "./base/Tab";
  import Top from "./base/Top";
export default {
  name: 'App',
  data(){
    return{}
  },
  methods:{

  },
  components:{
    Tab,
    Top,
  }
}
</script>

<style>
#app {
  min-width: 1350px;
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  color: #333;
}
</style>
