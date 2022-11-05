export default class TestController {
  constructor(testModel) {
    this.testModel = testModel;
  }

  async getTest() {
    console.log("test endpoint success");
  }
}
