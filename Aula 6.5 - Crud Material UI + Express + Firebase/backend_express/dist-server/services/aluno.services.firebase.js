"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _firebase = require("../db/firebase.connection");
var _firestore = require("firebase/firestore");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var AlunosService = /*#__PURE__*/function () {
  function AlunosService() {
    _classCallCheck(this, AlunosService);
  }
  _createClass(AlunosService, null, [{
    key: "list",
    value: function list(request, response) {
      var q = (0, _firestore.query)((0, _firestore.collection)(_firebase.db, "alunos"));
      (0, _firestore.getDocs)(q).then(function (querySnapshot) {
        var alunos = [];
        querySnapshot.forEach(function (doc) {
          var _id = doc.id;
          var _doc$data = doc.data(),
            nome = _doc$data.nome,
            curso = _doc$data.curso,
            ira = _doc$data.ira;
          alunos.push({
            _id: _id,
            nome: nome,
            curso: curso,
            ira: ira
          });
        }); //querySnapshot
        response.json(alunos);
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "register",
    value: function register(request, response) {
      //const docRef = await addDoc(collection(db,"alunos"))
      (0, _firestore.addDoc)((0, _firestore.collection)(_firebase.db, "alunos"), request.body).then(function (docRef) {
        response.json({
          _id: docRef.id
        });
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "retrieve",
    value: function retrieve(request, response) {
      var docRef = (0, _firestore.doc)(_firebase.db, "alunos", request.params.id);
      //const docSnap = await getDoc(docRef);
      (0, _firestore.getDoc)(docRef).then(function (docSnap) {
        var _id = docSnap.id;
        var _docSnap$data = docSnap.data(),
          nome = _docSnap$data.nome,
          curso = _docSnap$data.curso,
          ira = _docSnap$data.ira;
        response.json({
          _id: _id,
          nome: nome,
          curso: curso,
          ira: ira
        });
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "update",
    value: function update(request, response) {
      var docRef = (0, _firestore.doc)(_firebase.db, "alunos", request.params.id);
      (0, _firestore.updateDoc)(docRef, request.body).then(function () {
        response.json({
          _id: request.params.id
        });
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "delete",
    value: function _delete(request, response) {
      var docRef = (0, _firestore.doc)(_firebase.db, "alunos", request.params.id);
      (0, _firestore.deleteDoc)(docRef).then(function () {
        return response.json({
          res: true
        });
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  }, {
    key: "listOnSnapshot",
    value: function listOnSnapshot(request, response) {
      var q = (0, _firestore.query)((0, _firestore.collection)(_firebase.db, "alunos"));
      (0, _firestore.onSnapshot)(q, function (querySnapshot) {
        var alunos = [];
        querySnapshot.forEach(function (aluno) {
          var _id = aluno.id;
          var _aluno$data = aluno.data(),
            nome = _aluno$data.nome,
            curso = _aluno$data.curso,
            ira = _aluno$data.ira;
          alunos.push({
            _id: _id,
            nome: nome,
            curso: curso,
            ira: ira
          });
        }); //forEach
        response.json(alunos);
      } //querySnapshot
      ); //onSnapshot
    }
  }]);
  return AlunosService;
}();
var _default = AlunosService;
exports["default"] = _default;