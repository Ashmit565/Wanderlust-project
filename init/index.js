const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl =
"mongodb+srv://yadavashmit591_db_user:zN4rBOE1EtXUnZDX@cluster0.fyxeb2s.mongodb.net/wanderlust?retryWrites=true&w=majority&appName=Cluster0";

main()
.then(() => {
    console.log("Connected to Atlas DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(dbUrl);
}

const initDB = async () => {
    await Listing.deleteMany({});

    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner: "6a248176256d9c7901030fc6"
    }));

    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
};

initDB();