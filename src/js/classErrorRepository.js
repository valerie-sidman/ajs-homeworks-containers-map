export default class ErrorRepository {
  constructor() {
    this.errors = new Map([[404, 'Not found'], [400, 'Invalid data']]);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}
