const Books = require("../models/books.model");
const catchAsyncError = require('../middlewares/catchAsyncErrors');
const ApiFeatures = require("../utils/apiFeatures");
exports.getAllBooks = catchAsyncError(async(req,res,next)=>{
    const resultPerPage = 12;
    const booksCount = await Books.countDocuments();
    const apiFeature = new ApiFeatures(Books.find(), req.query)
    .search()
    .filter()
    .category()
    .pagination(resultPerPage).sorting();
    const books = await apiFeature.query;
    res.status(201).send({success:true,books,booksCount});
});
exports.createBooks =catchAsyncError( async(req,res,next)=>{

    const book = await Books.create(req.body);
    res.status(201).send({success:true,book});

});
exports.updateBooks = catchAsyncError(async(req,res,next)=>{
    const books = await Books.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    res.status(201).send({success:true,books});
});
exports.deleteBooks = catchAsyncError(async(req,res,next)=>{
    const books = await Books.findByIdAndDelete(req.params.id)
    res.status(201).send({success:true,message:"Book deleted successfully"});
});
exports.singleBook = catchAsyncError(async(req,res,next)=>{
    const book = await Books.findById(req.params.id)
    res.status(201).send({success:true,book});
});