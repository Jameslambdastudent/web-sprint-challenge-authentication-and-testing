const supertest = require("supertest")
const server = require("./server")
const db = require("../data/dbConfig")
const bcrypt = require("bcryptjs");

beforeEach(async () => {
  await db.seed.run()
})

afterAll(async () => {
  await db.destroy()
})

test('sanity', () => {
  expect(true).toBe(true)
})

describe("testing end points", () => {
  it("gets all users", async () => {
    const users = await supertest(server).get("/api/auth/users")
      expect(users.body.length).toBe(3)
      expect(users.body[0].username).toBe("hulk") 
  })
  it("creates a user", async () => {
    const res = await supertest(server)
      .post("/api/auth/register")
      .send({username: "hulk1", password: "hilh"})
        expect(res.statusCode).toBe(201)
        expect(res.body.username).toBe("saiya")
  })
  it("create user error", async () => {
    const res = await supertest(server)
      .post("/api/auth/register")
      .send({username: "", password: ""})
        expect(res.statusCode).toBe(401)
  })
})