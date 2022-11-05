import express from "express";

const router = express.Router();

export default class TestRouter {
  constructor(testController) {
    this.controller = testController;
  }

  routes() {
    router.get("/endpoint", this.controller.getTest.bind(this.controller));

    return router;
  }
}
