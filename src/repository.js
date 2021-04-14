let { writeFileSync } = require("fs");

class FileRepository {

  /**
   * @param path string 
   * @param formatter Formatter 
   */
  constructor(path, formatter) {
    this.path = path;
    this.formatter = formatter;
  }

  /**
   * @param todos { title: string, status: string }[]
   */
  store(todos) {
    let formatted = this.formatter(todos);
    writeFileSync(this.path, formatted);
  }

}

module.exports = FileRepository;