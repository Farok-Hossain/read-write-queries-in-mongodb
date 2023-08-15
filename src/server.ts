// const express = require("express");
// const mongoose = require("mongoose");

import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

// database connection
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose-m6");
    console.log(`Database connection successful`);

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (err) {
    console.log(`Failed to connet database`, err);
  }
}

main();
