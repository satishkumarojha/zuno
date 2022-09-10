const mongoose = require("mongoose");


const bookSchema = new mongoose.Schema(
    {
		title: { type: String, required:[true,"Please Enter title"]},
		author:{type:String, required:[true,"Please Enter author"]},
		image:{type:String,require:[true,"Plese provide image url"]},
        category:{type:String, required:[true,"Please Enter category"]},
        publication:{type:String, required:[true,"Please Enter publication"]},
        price:{type:String, required:[true,"Please Enter price"]}
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

module.exports = mongoose.model("book",bookSchema);