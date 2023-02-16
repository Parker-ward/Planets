import { galaxysService } from "../services/GalaxysService.js"
import BaseController from "../utils/BaseController.js"


export class GalaxysController extends BaseController {
  constructor() {
    super('/api/galaxys')
    this.router
      .get('', this.getGalaxys)
      .post('', this.createGalaxy)
  }
  async createGalaxy(req, res, next) {
    try {
      let galaxyData = req.body
      const galaxy = await galaxysService.createGalaxy(galaxyData)
      return res.send(galaxy)
    } catch (error) {
      next(error)

    }
  }
  async getGalaxys(req, res, next) {
    try {
      const galaxys = await galaxysService.getGalaxys()
      return res.send(galaxys)
    } catch (error) {
      next(error)
    }
  }
}