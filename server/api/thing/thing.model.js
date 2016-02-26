import mongoose from 'mongoose';

let ThingSchema = new mongoose.Schema({
  name: String
});

export default mongoose.model('Thing', ThingSchema);
