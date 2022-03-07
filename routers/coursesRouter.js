"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const coursesController_1 = require("../controllers/coursesController");
const coursesRouter = (0, express_1.Router)();
coursesRouter.post('/', coursesController_1.createCourses);
coursesRouter.get('/', coursesController_1.getCourses);
exports.default = coursesRouter;
