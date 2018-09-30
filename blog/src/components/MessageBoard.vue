<template>
    <div class="messageBoard_Box">
      <h1 class="title">留言板</h1>
      <div class="textarea_Div">
        <textarea name="" id="" cols="30" rows="10" class="class_textarea" v-model="param.messageTest"></textarea>
        <button class="submit_Btn" @click="addMessage">提交</button>
      </div>
      <div class="message_list_div">
        <ul>
          <li v-for="(item,index) in messageLits">
            <i>{{index+1}}</i>
            <span>{{item.message}}</span>
          </li>
        </ul>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[10, 15, 20]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalNum">
          </el-pagination>
        </div>
      </div>

    </div>

</template>

<script>
    import qs from 'qs'
    export default {
      name: "messageBoard",
      data(){
        return{
          messageLits:[],
          param:{
            messageTest:'',
          },
          currentPage4: 1,
          totalNum:0,
          pageSize:10,
          pageNum:1,
        }
      },
      created(){
        this.messageSubmit()
      },
      methods:{
        messageSubmit(){
          this.axios.post('api/get_message_list',qs.stringify({
            pageSize:this.pageSize,
            pageNum:this.pageNum
          })).then(res=> {
            this.messageLits=res.data.data;
            this.totalNum = res.data.total;
            console.log(res)
          })
        },
        addMessage(){
          this.axios.post('api/add_message',qs.stringify(this.param)).then(res=>{
          })
          this.messageSubmit()
        },
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
          this.pageSize = val
          console.log(this.pageSize)
          this.messageSubmit()
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          this.pageNum = val
          this.messageSubmit()
        }
      }

    }
</script>

<style scoped>
  .messageBoard_Box{
    width: 1350px;
    margin: 50px auto;
    background-color: #eee;
  }
  .title{
    text-align: center;
  }
  .textarea_Div{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .class_textarea{
    outline: none;
    border: 3px solid #b6b6b6;
    border-radius: 10px 10px 0 0;
    resize: none;
    color: #606266;
    font-size: 16px;
    line-height: 20px;
    height: 80px;
    width: 850px;
    padding: 10px;
    background-color: #eee;
    box-sizing: border-box;
    border-bottom: none;
  }
  .class_textarea:focus{
    border-color:#409EFF;
  }
  .submit_Btn{
    background-color: #409EFF;
    color: white;
    border: none;
    outline: none;
    width: 850px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    border-radius: 0 0 10px 10px;
  }
  .message_list_div{
    width: 850px;
    margin: 0 auto;

  }
  .message_list_div ul{
    width: 100%;
    height: 620px;
    margin-top: 30px;
  }
  .message_list_div ul li{
    width: 100%;
    min-height: 40px;
    border-bottom: 1px  dashed black;
    padding: 10px;
  }
</style>
