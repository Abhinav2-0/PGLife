"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.storage = exports.provider = exports.auth = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyBOFjh8hWbmminijw_2_WyRB5QtQ7khtdQ",
  authDomain: "disneyhotstar-8394d.firebaseapp.com",
  projectId: "disneyhotstar-8394d",
  storageBucket: "disneyhotstar-8394d.appspot.com",
  messagingSenderId: "972237205300",
  appId: "1:972237205300:web:25342691fad3a02a67ff61"
};

var firebaseApp = _firebase["default"].initializeApp(firebaseConfig);

var db = firebaseApp.firestore();

var auth = _firebase["default"].auth();

exports.auth = auth;
var provider = new _firebase["default"].auth.GoogleAuthProvider();
exports.provider = provider;

var storage = _firebase["default"].storage();

exports.storage = storage;
var _default = db;
exports["default"] = _default;