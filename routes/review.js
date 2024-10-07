const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapasync.js");
const { validateReview, isLoggedIn, isAuthor } = require("../middleware.js");
const reviewController=require("../controllers/review.js");

//reviews post route
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

//delete review route
router.delete("/:reviewId",isLoggedIn,isAuthor,wrapAsync(reviewController.destroyReview));

module.exports=router;