"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var pg_1 = require("pg");
dotenv_1.default.config();
var _a = process.env, DB_HOST = _a.DB_HOST, DB_DATABASE = _a.DB_DATABASE, DB_USER = _a.DB_USER, DB_PASSWORD = _a.DB_PASSWORD, DB_DATABASE_TEST = _a.DB_DATABASE_TEST, NODE_ENV = _a.NODE_ENV;
var options;
if (NODE_ENV === "test") {
    options = {
        host: DB_HOST,
        database: DB_DATABASE_TEST,
        user: DB_USER,
        password: DB_PASSWORD,
    };
}
if (NODE_ENV === "dev") {
    options = {
        host: DB_HOST,
        database: DB_DATABASE,
        user: DB_USER,
        password: DB_PASSWORD,
    };
}
var client = new pg_1.Pool(options);
exports.default = client;
