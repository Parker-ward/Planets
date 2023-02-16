import { Schema } from "mongoose";


export const GalaxySchema = new Schema({

  name: { type: String, required: true, minLength: 2, maxLength: 15 },
  stars: { type: String, required: true, }
})