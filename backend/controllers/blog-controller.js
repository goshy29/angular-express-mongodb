const Blog = require("../models/blog-model");

const HttpError = require("../models/http-error");

async function getAllBlogs(req, res, next) {
    let blogs;
    try {
      blogs = await Blog.find();
    } catch (err) {
      const error = new HttpError("Fetching all blogs failed.", 500);
      return next(error);
    }
  
    res.json({ blogs });
}

async function getBlogById(req, res, next) {
    const blogId = req.params.blogId;
    let blog;
    try {
      blog = await Blog.findById(blogId);
    } catch (err) {
      const error = new HttpError("Fetching blog failed.", 500);
      return next(error);
    }
  
    if (!blog) {
      const error = new HttpError("Blog not found.", 404);
      return next(error);
    }
  
    res.json({ blog });
}

async function createBlog(req, res, next) {
    const { title, username, email, date, recipe } = req.body;
  
    const createdBlog = new Blog({
      title,
      username,
      email,
      date,
      recipe
    });
  
    try {
      await createdBlog.save();
    } catch (err) {
      const error = new HttpError("Creating blog failed!.", 500);
      return next(error);
    }
  
    res.status(201).json({ blog: createdBlog });
}

async function deleteBlog(req, res, next) {
    const blogId = req.params.blogId;
  
    let blog;
    try {
      blog = await Blog.findById(blogId);
    } catch (err) {
      const error = new HttpError("Fetching blog failed!", 500);
      return next(error);
    }
  
    if (!blog) {
      const error = new HttpError("Blog not found.", 404);
      return next(error);
    }
  
    try {
      await blog.deleteOne({ _id: blogId });
    } catch (err) {
      const error = new HttpError("Deleting blog failed!", 500);
      return next(error);
    }
  
    res.status(200).json({ message: "Blog deleted." });
}

  exports.getAllBlogs = getAllBlogs;
  exports.getBlogById = getBlogById;
  exports.createBlog = createBlog;
  exports.deleteBlog = deleteBlog;