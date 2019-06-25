"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _Meal = _interopRequireDefault(require("./usingJsobject/controllers/Meal"));

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
var port = process.env.PORT || 3000;
app.get('/', function (req, res) {
  return res.status(200).send({
    'message': 'Book Meal API running'
  });
});
app.post('/api/v1/meal', _Meal["default"].create);
app.get('/api/v1/meals', _Meal["default"].viewMeals);
app.get('/api/v1/meals/:name', _Meal["default"].viewOne);
app.put('/api/v1/meals/:name', _Meal["default"].updateMeal);
app["delete"]('/api/v1/meals/:name', _Meal["default"].deleteMeal);
app.listen(port, function () {
  console.log("BookaMeal API running on port ".concat(port));
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=index.js.map