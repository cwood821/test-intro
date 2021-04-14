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
    let formatted = formatter(todos);
    writeFileSync(path, formatted);
  }

}

module.exports = FileRepository;