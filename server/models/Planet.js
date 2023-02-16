import { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId

export const PlanetSchema = new Schema({

  name: { type: String, required: true, minLength: 2, maxLength: 15 },
  biome: { type: String, default: '', maxLength: 150 },
  atmosphere: { type: Boolean, default: false },
  galaxyId: { type: ObjectId, ref: 'galaxy', required: true }


}, { timestamps: true, toJSON: { virtuals: true } })