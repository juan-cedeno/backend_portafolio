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
exports.getCourses = exports.createCourses = void 0;
const Course_1 = __importDefault(require("../model/Course"));
const createCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const courses = new Course_1.default(req.body);
    try {
        const courseSave = yield courses.save();
        res.status(201).json({
            ok: true,
            name: courseSave.name,
            teacher: courseSave.teacher,
            time: courseSave.time
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: 'Comunicarse con el administrador'
        });
    }
});
exports.createCourses = createCourses;
const getCourses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield Course_1.default.find();
        res.status(200).json({
            ok: true,
            courses
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: 'Comunicarse con el administrador'
        });
    }
});
exports.getCourses = getCourses;
