import { Schema } from "mongoose";


const ObjectId = Schema.Types.ObjectId
export const MoonSchema = new Schema({

  name: { type: String, required: true, minLength: 2, maxLength: 15 },
  planetid: { type: ObjectId, ref: 'planet', required: true }

})

MoonSchema.virtual('planet', {
  ref: 'Planet',
  justOne: true,
  localField: 'planetId',
  foreignField: '_id'
})