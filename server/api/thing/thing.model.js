import mongoose from 'mongoose'

let ThingSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
})

export default mongoose.model('Thing', ThingSchema)
