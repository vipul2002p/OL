const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const formidable = require("formidable");
const app = express();
app.use(cors());
var filePath = __dirname+`/one.pdf`; 
const port = 9090 ;
const Razorpay = require('razorpay');
const razorpay = new Razorpay({
    key_id : 'rzp_test_06I3Zl1gQohVlT',
    key_secret : '2eOknd6qVk45Kv2hpvY2cwPO'
})
var src = fs.readdirSync(__dirname+'/uploads/');
app.post("/src",(req,res) => {
    res.json(src);
})
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/", express.static(__dirname + '/public/'));
app.post('/download', (req, res) => {
    var str = req.body.message;
    res.set({
        'Content-Type': 'text/plain',
        'Content-Disposition': 'attachment;filename : "file.pdf"'
    })

    res.sendFile(__dirname + `/${str}.pdf`)
})

app.post("/uploads",(req,res) => {
    console.log("come in uploads post req");
     const form = new formidable.IncomingForm();
     form.parse(req,(err,fields,files) => {
        if(err){
            console.log("Error");
            return;
        }
          
        var oldpath = files.photo[0].filepath;
        fs.rename(oldpath,__dirname+'/uploads/'+`${files.photo[0].originalFilename}`,(err) => {
            if(err){
                console.log(err);
            }
        })
     })
})

app.post('/pdf', (req, res) => {
    var str = req.body.msg;
     filePath = __dirname+`/${str}.pdf`;
    res.send('done')
  });
app.get('/pdf',(req,res) => {
    console.log(filePath)
    const readableStream = fs.createReadStream(filePath);
    readableStream.pipe(res);
})
app.post("/pay",async (req,res) => {
    const options = {
        amount: req.body.amount,
        currency: req.body.currency,
        receipt: "receipt", //ny unique id
        payment_capture : 1 //optional
    }
    try {
        const response = await razorpay.orders.create(options)
        res.json({
            order_id: response.id,
            currency: response.currency,
            amount: response.amount
        })
    } catch (error) {
        console.log(error);
        res.status(400).send(JSON.stringify('Unable to create order'));
    }
})
app.listen(port,(err) => {
    if(err){
        console.log("Error : ",err)
    }else{
        console.log('server is running on port ',port);
    }
})
