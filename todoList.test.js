/**
 * @jest-environment jsdom
 */

const request = require("supertest");
const index = require("./index.js");

const myTest = async () => {

  const response = await request(index).get("/");
  document.body.innerHTML = response.text;
  require("./script.js");
  const newTodoInput = await document.getElementById('newTodoInput');
  const addTodoBtn = await document.getElementById('addTodoBtn');
  const todolist = await document.getElementById('todoList');
  newTodoInput.value = 'New todolist!';
  addTodoBtn.click();
  expect(todolist.innerHTML).toBe('<li>New todolist!</li>');
};
test("some test", async () => await myTest());

// module.exports = myTest;