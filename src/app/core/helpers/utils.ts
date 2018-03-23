export default class Utils {

  static dateOnlyStr(dt: string) {
    const d: Date = new Date(dt);
    const mm = d.getMonth()+1;
    const dd = d.getDate();

    return [(dd>9 ? '' : '0') + dd,(mm>9 ? '' : '0') + mm,d.getFullYear()].join('-');
  }
}
