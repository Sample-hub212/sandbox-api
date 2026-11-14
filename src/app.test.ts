import { AddressInfo } from "node:net";
import { server } from "./app";

beforeAll((done) => {
  server.listen(0, done);
});

afterAll((done) => {
  server.close(done);
});

function url(path: string): string {
  const { port } = server.address() as AddressInfo;
  return `http://127.0.0.1:${port}${path}`;
}

test("GET /health returns ok", async () => {
  const res = await fetch(url("/health"));
  expect(res.status).toBe(200);
  expect(await res.json()).toEqual({ status: "ok" });
});

test("unknown path returns 404", async () => {
  const res = await fetch(url("/nope"));
  expect(res.status).toBe(404);
});