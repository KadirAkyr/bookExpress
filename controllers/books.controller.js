const Book = require("../models/books.model");

var controller = {
  getAll: async (req, res, next) => {
    try {
      let books = await Book.find({});
      res.json(books);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  addOne: async (req, res, next) => {
    try {
      let book = await Book.create(req.body);
      res.json(book);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  getOne: async (req, res, next) => {
    try {
      let book = await Book.findById(req.params.id);
      res.json(book);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  deleteAll: async (req, res, next) => {
    let resp = await Book.remove({});
    res.json(resp);
  },

  updateOne: async (req, res, next) => {
    try {
      let book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(book);
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  deleteOne: async (req, res, next) => {
    try {
      let resp = await Book.findByIdAndDelete(req.params.id);
      res.json(resp);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = controller;
