import mongoose from "mongoose";

//const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_URI = "mongodb+srv://caesardrive:<password>@cluster0.fsws2.mongodb.net/?retryWrites=true&w=majority"

const connect = async () => {
    const connectionState = mongoose.connection.readyState;
    
    if (connectionState === 1) {
        console.log("Already connected");
        return;
    }

    if (connectionState === 2) {
        console.log("Connecting...");
        return;
    }

    try {
        mongoose.connect(MONGODB_URI!, {
            dbName: "nextjsrestapi",
            bufferCommands: true,
        });
        console.log("Connected");
    } catch (err:any) {
        console.log("Error: ", err);
        throw new Error("Error: ", err);
    }
};

export default connect;