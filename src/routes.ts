import { Router } from "express";
import { swaggerConfig } from '@config/swagger';
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { Report } from "@controllers/Report";
import checkReport from "@middlewares/checkReport";
import gameReportErrorHandler from "./middlewares/reportErrorHandler";

const swaggerSpec = swaggerJSDoc(swaggerConfig);

const router = Router();

router.get('/', (_req, res) => res.send(swaggerSpec));
router.get("/report", checkReport, gameReportErrorHandler, new Report().getGameReport);

router.use('/swagger', swaggerUI.serve);
router.get('/swagger', swaggerUI.setup(swaggerSpec));

export default router;
