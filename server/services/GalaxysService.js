import { dbContext } from "../db/DbContext.js";

class GalaxysService {
  async createGalaxy(galaxyData) {
    const galaxy = await dbContext.Galaxy.create(galaxyData)
    return galaxy
  }
  async getGalaxys() {
    const galaxys = await dbContext.Galaxy.find()
    return galaxys
  }
}

export const galaxysService = new GalaxysService()