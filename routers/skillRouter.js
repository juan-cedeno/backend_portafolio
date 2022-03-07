"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const skillController_1 = require("../controllers/skillController");
const skillRouter = (0, express_1.Router)();
skillRouter.post('/', skillController_1.createSkill);
skillRouter.get('/', skillController_1.getSkill);
exports.default = skillRouter;
