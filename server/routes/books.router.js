const express = require("express");
const { getAllBooks, createBooks, updateBooks, deleteBooks, singleBook } = require("../controllers/books.controller");
const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.route("").get(getAllBooks).post(authenticate,createBooks);
router.route("/:id").patch(updateBooks).delete(deleteBooks).get(singleBook);


module.exports=router;