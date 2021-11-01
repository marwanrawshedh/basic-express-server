
"use strict";
const { server } = require("../src/server");
const supertest = require("supertest");
const request = supertest(server);

describe('server test', () => {
    test("200 if the name is in the query string", async () => {
      const respons = await request.get("/person?name=marwan");
      expect(respons.status).toEqual(200);
    });
    test("404 on a bad route", async () => {
      const respons = await request.get("/person");
      expect(respons.status).toEqual(500);
    });
    test("given an name in the query string, the output object is correct", async () => {
        const respons = await request.get("/person?name=marwan");
        expect(typeof respons.body).toEqual('object');
      });
   
  
  });