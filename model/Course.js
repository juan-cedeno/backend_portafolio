"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CoursesSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    teacher: {
        type: String
    },
    time: {
        type: Number
    }
});
exports.default = (0, mongoose_1.model)('Courses', CoursesSchema);
