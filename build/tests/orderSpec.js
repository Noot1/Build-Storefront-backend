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
Object.defineProperty(exports, "__esModule", { value: true });
var order_1 = require("../models/order");
var store = new order_1.OrderStore();
//Testing if order methods are defined
it("order index method defined", function () {
    expect(store.index).toBeDefined();
});
it("order show by id method defined", function () {
    expect(store.showByOrderID).toBeDefined();
});
it("order show by user id method defined", function () {
    expect(store.showByUserID).toBeDefined();
});
it("order create method defined", function () {
    expect(store.createOrder).toBeDefined();
});
it("order delete method defined", function () {
    expect(store.deleteOrder).toBeDefined();
});
it("product order create method defined", function () {
    expect(store.createProductOrder).toBeDefined();
});
it("product order delete method defined", function () {
    expect(store.deleteProductOrder).toBeDefined();
});
//
//testing if order methods works as intended
it("order created as intended", function () { return __awaiter(void 0, void 0, void 0, function () {
    var orderCreated;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.createOrder({
                    user_id: "1",
                    status: "pending",
                })];
            case 1:
                orderCreated = _a.sent();
                expect(orderCreated).toEqual({
                    id: 1,
                    user_id: "1",
                    status: "pending",
                });
                return [2 /*return*/];
        }
    });
}); });
it("show order by order id method returned the correct order", function () { return __awaiter(void 0, void 0, void 0, function () {
    var order;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.showByOrderID("1")];
            case 1:
                order = _a.sent();
                expect(order.id).toEqual(1);
                return [2 /*return*/];
        }
    });
}); });
it("order index method resturns a list of products", function () { return __awaiter(void 0, void 0, void 0, function () {
    var orderIndexList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.index()];
            case 1:
                orderIndexList = _a.sent();
                expect(orderIndexList.length).toEqual(1);
                return [2 /*return*/];
        }
    });
}); });
it("order delete method works as intented", function () { return __awaiter(void 0, void 0, void 0, function () {
    var deletedOrder;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.deleteOrder("1")];
            case 1:
                deletedOrder = _a.sent();
                expect(deletedOrder.id).toEqual(1);
                return [2 /*return*/];
        }
    });
}); });
it("order created as intended", function () { return __awaiter(void 0, void 0, void 0, function () {
    var orderCreated;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.createOrder({
                    user_id: "1",
                    status: "pending",
                })];
            case 1:
                orderCreated = _a.sent();
                expect(orderCreated).toEqual({
                    id: 2,
                    user_id: "1",
                    status: "pending",
                });
                return [2 /*return*/];
        }
    });
}); });
it("product order created as intended", function () { return __awaiter(void 0, void 0, void 0, function () {
    var productOrderCreated;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.createProductOrder({
                    product_id: "1",
                    order_id: "2",
                    quantity: 10,
                })];
            case 1:
                productOrderCreated = _a.sent();
                expect(productOrderCreated).toEqual({
                    id: 1,
                    product_id: "1",
                    order_id: "2",
                    quantity: 10,
                });
                return [2 /*return*/];
        }
    });
}); });
it("product order delete method works as intented", function () { return __awaiter(void 0, void 0, void 0, function () {
    var deletedProductOrder;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, store.deleteProductOrder("1")];
            case 1:
                deletedProductOrder = _a.sent();
                expect(deletedProductOrder.id).toEqual(1);
                return [2 /*return*/];
        }
    });
}); });
