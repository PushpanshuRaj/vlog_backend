const Post =require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost= async (req,res)=> {
      try{
            const {post,user} = req.body;
            const like = new Like({
                  post, user,
            });
            const savedLike= await like.save();
            const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes:savedLike._id}}, {new:true})
            .populate("likes").exec();

            res.json({
                  post: updatedPost,
            });
      }
      catch (error){
            return res.status(400).json({
                  error: "Error while liking a post",
            });
      }
};

exports.unlikePost = async (req,res)=> {
      try{
            const {post,like} = req.body;
            const deleteLike= await Like.findOneAndDelete({post:post,_id:like});
            if (!deleteLike) {
                  return res.status(404).json({
                    error: "Like not found",
                  });
                }
            const updatedPost=await Post.findByIdAndUpdate(post,{$pull: {likes: deleteLike._id}},{new:true});

            res.json({
                  post:updatedPost,
            });
      }
      catch(error){
            return res.status(400).json({
                  error:"Error while Unliking Post",
            });
      }
};