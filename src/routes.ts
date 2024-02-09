import { Router } from "express";
import { Report } from "@controllers/Report";
import checkReport from "@middlewares/checkReport";
import gameReportErrorHandler from "./middlewares/reportErrorHandler";

const router = Router();

router.get("/report", checkReport, gameReportErrorHandler, new Report().getGameReport);

export default router;
