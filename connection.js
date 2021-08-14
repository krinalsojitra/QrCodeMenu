const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/qrcode-api", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify : true
}).then(() => {
    console.log("conncetion Successful")
}).catch((e) =>
    console.log("No conncetion")
)