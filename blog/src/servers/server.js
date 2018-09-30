const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database: 'test',
});
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.post('/add_message', function (req, res) {
  console.log(req.body.messageTest)
  // 输出 JSON 格式
  let response = {
    "message":req.body.messageTest,

  };
  console.log(response)
  const sql = 'insert into `liuyan`  (`message`) values (?);';
  pool.getConnection((err,conn)=>{
    if(err){
      console.error(err.message);
      res.json({code:1,data:err});
    }else{
      conn.query(sql,[response.message],(err,results) =>{
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          res.json({code:1,data:err});
        }else{
          res.json({code:0,data:results});
        }
        conn.release();
      });
    }

  });
})
app.post('/get_message_list',function (req,res) {
  console.log(req.body.pageNum,req.body.pageSize)
  let pageSize = req.body.pageSize
  let pageNum = (req.body.pageNum-1)*pageSize
  let sql = ''
  if(pageNum === undefined && pageSize === undefined){
     sql = 'select * from `liuyan`;';
  }else {
     sql = 'select * from `liuyan` limit'+' ' + pageNum +','+pageSize+';';
  }

  console.log(sql)
  pool.getConnection((err,conn)=>{
    if(err) {
      console.error(err.message);
      res.json({code: 1, data: err});
    }else{
      conn.query(sql,(err,results) =>{
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          res.json({code:1,data:err});
        }else{
          conn.query('select count(*) as total from `liuyan`',(err,result2) =>{
            if(err){
              console.log('[SELECT ERROR] - ',err.message);
              res.json({code:1,data:err});
            }else{
              res.json({data:results,total:result2[0].total});
              conn.release();
            }
          });
        }
      });
    }
  });

})

const server = app.listen(8083, function () {

})
