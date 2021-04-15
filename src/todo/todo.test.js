const TodoStatus = Object.freeze({
  Incomplete: 'incomplete',
  Complete: 'complete'
})

class Todo {

  constructor(title, status) {
    this.setTitle(title);
    this.setStatus(status);
  }

  setTitle(title) {
    this.title = title;
  }

  setStatus(status) {
    if (!Object.values(TodoStatus).includes(status)) {
      throw Error("Invalid status")
    }
    this.status = status;
  }

  getTitle() {

  }

  getStatus() {

  }

}