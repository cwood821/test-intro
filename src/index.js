const formatMarkdown = require("./formatters/markdown");
const FileRepository = require("./repositories/file");
const { Todo, TodoStatus } = require("./todo/todo");


const todos = [ 
  new Todo("Create FileRepository class", TodoStatus.Complete),
  new Todo("Add test coverage to formatters", TodoStatus.Incomplete),
];

let repo = new FileRepository("./todos.md", formatMarkdown);
repo.store(todos);