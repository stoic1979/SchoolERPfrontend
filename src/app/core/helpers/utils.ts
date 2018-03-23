export default class Utils {

  static dateOnlyStr(dt: string) {
    const d: Date = new Date(dt);
    return d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
  }
}
