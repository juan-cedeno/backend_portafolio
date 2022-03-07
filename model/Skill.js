"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const SkillSchema = new mongoose_1.Schema({
    image: {
        type: String
    },
    name: {
        type: String,
        required: true
    }
});
exports.default = (0, mongoose_1.model)('Skills', SkillSchema);
