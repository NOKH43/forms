import express from "express"

const app = express();

const  port = 3000;


app.listen(port, ()=>{
  console.log(`listening to server at port ${port}`)
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));



app.get('/', (req, res)=>{
  res.render('forms')
})


app.post("/submit", (req, res)=>{
  console.log(req.body)
  setTimeout(()=>{
    res.render('forms', {result:"message sent successfully"})

  }, 3000)
  

});
