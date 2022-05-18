"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = exports.Question = exports.Answer = void 0;
const typegoose_1 = require("@typegoose/typegoose");
class Answer {
  constructor() {
    Object.defineProperty(this, "text", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    });
    Object.defineProperty(this, "points", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    });
  }
}
exports.Answer = Answer;
class Question {
  constructor() {
    Object.defineProperty(this, "text", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    });
    Object.defineProperty(this, "answers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    });
  }
}
exports.Question = Question;
class Test {
  constructor() {
    Object.defineProperty(this, "title", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    });
    Object.defineProperty(this, "slug", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    });
    Object.defineProperty(this, "questions", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0,
    });
  }
}
__decorate(
  [
    (0, typegoose_1.prop)({ required: true }),
    __metadata("design:type", String),
  ],
  Test.prototype,
  "title",
  void 0
);
__decorate(
  [
    (0, typegoose_1.prop)({ required: true, unique: true }),
    __metadata("design:type", String),
  ],
  Test.prototype,
  "slug",
  void 0
);
__decorate(
  [
    (0, typegoose_1.prop)({ default: [], _id: false }),
    __metadata("design:type", Array),
  ],
  Test.prototype,
  "questions",
  void 0
);
exports.Test = Test;
const TestModel = (0, typegoose_1.getModelForClass)(Test);
exports.default = TestModel;
//# sourceMappingURL=test.js.map
