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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSkill = exports.createSkill = void 0;
const Skill_1 = __importDefault(require("../model/Skill"));
const createSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const skills = new Skill_1.default(req.body);
    try {
        const { name, image } = yield skills.save();
        res.status(201).json({
            ok: true,
            name,
            image
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false,
            message: 'Comunicarse con soporte'
        });
    }
});
exports.createSkill = createSkill;
const getSkill = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skills = yield Skill_1.default.find();
        res.status(200).json({
            ok: true,
            skills
        });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({
            ok: false,
            message: 'Comunicarse con soporte'
        });
    }
});
exports.getSkill = getSkill;
