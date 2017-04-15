import AppLogger from './AppLogger'


// TODO - save in localStorage ?
class PointsFactory {

  pointsCount: number

  constructor() {
    this.pointsCount = 0
  }

  getPoints() {
    return this.pointsCount
  }

  add(amount: number) {
    AppLogger.info(`Add ${amount} points`)
    this.pointsCount += amount
  }

  remove(amount: number) {
    AppLogger.info(`Remove ${amount} points`)
    this.pointsCount -= amount
  }
}

export default new PointsFactory()
