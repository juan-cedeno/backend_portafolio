"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proyectController_1 = require("../controllers/proyectController");
const proyectRouter = (0, express_1.Router)();
proyectRouter.post('/', proyectController_1.createProyect);
proyectRouter.get('/', proyectController_1.getProyects);
exports.default = proyectRouter;
