export default class PointsFactory {

  private pointsCount: number

  constructor(userID: string) {
    this.pointsCount = 0
  }

  getPoints() {
    return this.pointsCount
  }

  add(points: number) {
    this.pointsCount += points
  }

  remove(points: number) {
    this.pointsCount -= points
  }
}

export default new PointsConteur()
