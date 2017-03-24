export default class Log {

  private activated: boolean

  constructor(activated: boolean) {
    this.activated = activated
  }

  log(stuff: any) {
    if (!this.activated) return;
    console.log("%c [Histories]", stuff, "color: green")
  }

  error(stuff: any) {
    if (!this.activated) return;
    console.error("%c [Histories]", stuff, "color: red")
  }

  warn(stuff: any) {
    if (!this.activated) return;
    console.warn("%c [Histories]", stuff, "color: orange")
  }

  info(stuff: any) {
    if (!this.activated) return;
    console.info("%c [Histories]", stuff, "color: blue")
  }
}
