const express=require("express");
const router=express.Router();

const {createComment} = require("../controllers/commentController");
const {createPost, getAllPost} = require("../controllers/postController");
const {likePost, unlikePost} = require("../controllers/likeController");

router.post("/comment", createComment);
router.post("/post", createPost);
router.get("/allposts", getAllPost);
router.post("/likes", likePost);
router.post("/unlike", unlikePost);

module.exports= router;