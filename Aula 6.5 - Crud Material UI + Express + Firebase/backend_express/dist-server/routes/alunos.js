"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _alunoServices = _interopRequireDefault(require("../services/aluno.services.firebase"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
// GET users listing
router.get('/', function (req, res, next) {
  res.send("respond with a resource");
});
router.get('/listar', function (req, res, next) {
  _alunoServices["default"].list(req, res, next);
});
router.post('/cadastrar', function (req, res, next) {
  _alunoServices["default"].register(req, res);
});
router.put('/atualizar/:id', function (req, res, next) {
  _alunoServices["default"].update(req, res);
});
router["delete"]('/apagar/:id', function (req, res, next) {
  _alunoServices["default"]["delete"](req, res);
});
router.get('/ver/:id', function (req, res, next) {
  _alunoServices["default"].retrieve(req, res);
});
var _default = router;
exports["default"] = _default;