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
exports.getProyects = exports.createProyect = void 0;
const Proyect_1 = __importDefault(require("../model/Proyect"));
const createProyect = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const proyect = new Proyect_1.default(req.body);
    try {
        const { name, image, languaje } = yield proyect.save();
        res.status(201).json({
            ok: true,
            name,
            image,
            languaje
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.createProyect = createProyect;
const getProyects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const proyects = yield Proyect_1.default.find();
        res.status(200).json({
            proyects
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getProyects = getProyects;
