"use strict";
const { server } = require("../src/server");
const supertest = require("supertest");
const request = supertest(server);


describe('server test', () => {
  // xtest("is there home path", async () => {
  //   const respons = await request.get("/");
  //   expect(respons.status).toEqual(200);
  // });
  test("404 on a bad route", async () => {
    const respons = await request.get("/hi");
    expect(respons.status).toEqual(404);
  });
  test("error ", async () => {
    const respons = await request.get("/error");
    expect(respons.status).toEqual(500);
    expect(typeof respons.body).toEqual('object');
  });
 

});