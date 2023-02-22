const { default: mongoose } = require("mongoose");
require("dotenv").config();

const mongoDbUser = process.env.mongoDbUser;
const mongoDbPassword = process.env.mongoDbPassword;
mongoose.set("strictQuery", true);
// mongoose
//   .connect(
//     `mongodb+srv://${mongoDbUser}:${mongoDbPassword}@cluster0.oxil0us.mongodb.net/medium`
//   )
//   .then((res) => {
//     console.log("Connected!");
//   })
//   .catch((err) => {
//     console.log("Connection error!");
//   });

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Connected!");
  })
  .catch((err) => {
    console.log("Connection error!");
  });
