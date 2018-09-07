<template>
  <div id="app">
    <Top></Top>
    <Tab></Tab>
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
  *{
    padding: 0;
    margin: 0;
  }
}
</style>
