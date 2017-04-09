class Log {

  private activated: boolean

  constructor(activated: boolean) {
    this.activated = activated
  }

  log(stuff: any) {
    if (!this.activated) return;
    console.log("%c[Histories] => ", "color: white; background: green", stuff)
  }

  error(stuff: any) {
    if (!this.activated) return;
    console.error("%c[Histories] => ", "color: white; background: red", stuff)
  }

  warn(stuff: any) {
    if (!this.activated) return;
    console.warn("%c[Histories] => ", "color: white; background: orange", stuff)
  }

  info(stuff: any) {
    if (!this.activated) return;
    console.info("%c[Histories] => ", "color: white; background: blue", stuff)
  }
}

export default new Log(true)
