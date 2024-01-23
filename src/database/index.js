import mongoose from "mongoose";

// const configOptions = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }

const connectToDb = async () => {
    const connectionUrl = 'mongodb+srv://MTayyab:tayyab101010@cluster0.c4til.mongodb.net/';

    mongoose.connect(connectionUrl).then(() => console.log("Ecommmerce Database connected Successfully!")).catch((err) => console.log(`Getting error from Db Connection ${err.message}`))
}

export default connectToDb;