const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const formidable = require("formidable");
const app = express();
app.use(cors());

// Configurable paths — override via environment variables for portability
const UPLOADS_DIR = process.env.UPLOADS_DIR || path.join(__dirname, 'uploads');
const PUBLIC_DIR = process.env.PUBLIC_DIR || path.join(__dirname, 'public');
const port = process.env.PORT || 9090;

var filePath = path.join(__dirname, 'one.pdf');
const Razorpay = require('razorpay');
const razorpay = new Razorpay({
    key_id : process.env.RAZORPAY_KEY_ID || 'rzp_test_06I3Zl1gQohVlT',
    key_secret : process.env.RAZORPAY_KEY_SECRET || '2eOknd6qVk45Kv2hpvY2cwPO'
})
var src = fs.readdirSync(UPLOADS_DIR);
app.post("/src",(req,res) => {
    res.json(src);
})
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/", express.static(PUBLIC_DIR));
app.post('/download', (req, res) => {
    var str = req.body.message;
    res.set({
        'Content-Type': 'text/plain',
        'Content-Disposition': 'attachment;filename : "file.pdf"'
    })

    res.sendFile(path.join(__dirname, `${str}.pdf`))
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
        fs.rename(oldpath, path.join(UPLOADS_DIR, files.photo[0].originalFilename), (err) => {
            if(err){
                console.log(err);
            }
        })
     })
})

app.post('/pdf', (req, res) => {
    var str = req.body.msg;
     filePath = path.join(__dirname, `${str}.pdf`);
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
