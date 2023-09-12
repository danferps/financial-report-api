import { Router } from "express";
import { Routes } from "./models";
import RuleController from "../controllers/rule.controller";

const ruleRoute = Router()
const {
  handleGetRuleById,
  handleGetAllRules,
  handleAddRule,
  handleUpdateRule,
  handleDeleteRule
} = RuleController

ruleRoute.get(`${Routes.RULES}/:ruleId`, handleGetRuleById)
ruleRoute.get(`${Routes.RULES}`, handleGetAllRules)
ruleRoute.post(`${Routes.RULES}`, handleAddRule)
ruleRoute.patch(`${Routes.RULES}`, handleUpdateRule)
ruleRoute.delete(`${Routes.RULES}/:ruleId`, handleDeleteRule)

export default ruleRoute
