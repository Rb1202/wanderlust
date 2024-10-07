const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

const mongo_url="mongodb://127.0.0.1:27017/wanderlust";

main().then(()=> {
    console.log("connected to db");
}).catch((err)=> {
    console.log(err);
});

async function main()
{
    await mongoose.connect(mongo_url);
};

const initDB = async() => {
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=> ({
        ...obj,
        owner:"66f0134e3871ba55a9ca8e2d",
    }));
    await Listing.insertMany(initData.data);
    console.log("data initialized");
};

initDB();