"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("../models/user");
var bcrypt_1 = __importDefault(require("bcrypt"));
var _a = process.env, BCRYPT_PASSWORD = _a.BCRYPT_PASSWORD, SALT_ROUNDS = _a.SALT_ROUNDS;
var store = new user_1.UserStore();
//Testing if user methods are defined
it("user index method defined", function () {
    expect(store.index).toBeDefined();
});
it("user show method defined", function () {
    expect(store.show).toBeDefined();
});
it("user create method defined", function () {
    expect(store.create).toBeDefined();
});
it("user update method defined", function () {
    expect(store.update).toBeDefined();
});
it("user delete method defined", function () {
    expect(store.delete).toBeDefined();
});
//
//testing if user methods works as intended
it("user firstname created", function () { return __awaiter(void 0, void 0, void 0, function () {
    var userCreated;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.create({
                    firstname: "User A",
                    lastname: "User A",
                    password: "User A",
                })];
            case 1:
                userCreated = _a.sent();
                expect(userCreated.firstname).toEqual("User A");
                return [2 /*return*/];
        }
    });
}); });
it("user lastname created", function () { return __awaiter(void 0, void 0, void 0, function () {
    var userCreated;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.create({
                    firstname: "User B",
                    lastname: "User B",
                    password: "User B",
                })];
            case 1:
                userCreated = _a.sent();
                expect(userCreated.firstname).toEqual("User B");
                return [2 /*return*/];
        }
    });
}); });
it("user hashed password is created as intended", function () { return __awaiter(void 0, void 0, void 0, function () {
    var UserCreated;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.create({
                    firstname: "User C",
                    lastname: "User C",
                    password: "User C",
                })];
            case 1:
                UserCreated = _a.sent();
                expect(bcrypt_1.default.compareSync("User C" + BCRYPT_PASSWORD, UserCreated.password)).toBeTrue();
                return [2 /*return*/];
        }
    });
}); });
it("user index method resturns a list of users", function () { return __awaiter(void 0, void 0, void 0, function () {
    var userIndexList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.index()];
            case 1:
                userIndexList = _a.sent();
                expect(userIndexList.length).toEqual(3);
                return [2 /*return*/];
        }
    });
}); });
it("show user by user id method returned the correct user", function () { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.show("1")];
            case 1:
                user = _a.sent();
                expect(user.id).toEqual(1);
                return [2 /*return*/];
        }
    });
}); });
it("user updated as intended", function () { return __awaiter(void 0, void 0, void 0, function () {
    var user, updatedUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user = {
                    firstname: "User D",
                    lastname: "User D",
                    password: "User D",
                };
                return [4 /*yield*/, store.update("1", user)];
            case 1:
                updatedUser = _a.sent();
                expect(bcrypt_1.default.compareSync("User D" + BCRYPT_PASSWORD, updatedUser.password)).toBeTrue();
                return [2 /*return*/];
        }
    });
}); });
it("user delete method works as intented", function () { return __awaiter(void 0, void 0, void 0, function () {
    var deletedUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.delete("3")];
            case 1:
                deletedUser = _a.sent();
                expect(deletedUser.id).toEqual(3);
                return [2 /*return*/];
        }
    });
}); });
