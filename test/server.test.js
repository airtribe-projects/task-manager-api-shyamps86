const tap = require("tap");
const supertest = require("supertest");
const app = require("../app");
const server = supertest(app);

let id; 

tap.test("POST /api/v1/tasks", async (t) => {
  const newTask = {
    title: "New Task",
    description: "New Task Description",
    completed: false,
  };
  const response = await server.post("/api/v1/tasks").send(newTask);
  t.equal(response.status, 201);

  const getResponse = await server.get("/api/v1/tasks");
  const tasks = getResponse.body.data;
  id = tasks[tasks.length - 1].id; 
  t.ok(id, "Captured task ID");
  t.end();
});

tap.test("POST /api/v1/tasks with invalid data", async (t) => {
  const newTask = { title: "New Task" };
  const response = await server.post("/api/v1/tasks").send(newTask);
  t.equal(response.status, 400);
  t.end();
});

tap.test("GET /api/v1/tasks", async (t) => {
  const response = await server.get("/api/v1/tasks");
  t.equal(response.status, 200);
  t.hasOwnProp(response.body.data[0], "id");
  t.hasOwnProp(response.body.data[0], "title");
  t.hasOwnProp(response.body.data[0], "description");
  t.hasOwnProp(response.body.data[0], "completed");
  t.type(response.body.data[0].id, "number");
  t.type(response.body.data[0].title, "string");
  t.type(response.body.data[0].description, "string");
  t.type(response.body.data[0].completed, "boolean");
  t.end();
});

tap.test("GET /api/v1/tasks/:id", async (t) => {
  const response = await server.get(`/api/v1/tasks/${id}`);
  t.equal(response.status, 200);
  t.equal(response.body.data[0].id, id);
  t.end();
});

tap.test("GET /api/v1/tasks/:id with invalid id", async (t) => {
  const response = await server.get("/api/v1/tasks/999");
  t.equal(response.status, 404);
  t.end();
});

tap.test("PUT /api/v1/tasks/:id", async (t) => {
  const updatedTask = {
    title: "Updated Task",
    description: "Updated Task Description",
    completed: true,
  };
  const response = await server.put(`/api/v1/tasks/${id}`).send(updatedTask);
  t.equal(response.status, 200);
  t.end();
});

tap.test("PUT /api/v1/tasks/:id with invalid id", async (t) => {
  const updatedTask = {
    title: "Updated Task",
    description: "Updated Task Description",
    completed: true,
  };
  const response = await server.put("/api/v1/tasks/999").send(updatedTask);
  t.equal(response.status, 404);
  t.end();
});

tap.test("PUT /api/v1/tasks/:id with invalid data", async (t) => {
  const updatedTask = {
    title: "Updated Task",
    description: "Updated Task Description",
    completed: "true", // invalid type
  };
  const response = await server.put(`/api/v1/tasks/${id}`).send(updatedTask);
  t.equal(response.status, 400);
  t.end();
});

tap.test("DELETE /api/v1/tasks/:id", async (t) => {
  const response = await server.delete(`/api/v1/tasks/${id}`);
  t.equal(response.status, 200);
  t.end();
});

tap.test("DELETE /api/v1/tasks/:id with invalid id", async (t) => {
  const response = await server.delete("/api/v1/tasks/999");
  t.equal(response.status, 404);
  t.end();
});

tap.teardown(() => {
  process.exit(0);
});
