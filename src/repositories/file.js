let { writeFileSync } = require("fs");

class FileRepository extends Repository {

  /**
   * @param path string 
   * @param formatter Formatter 
   */
  constructor(path, formatter) {
    super();
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