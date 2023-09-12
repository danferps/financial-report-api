import { Request, Response } from "express"
import RuleService from "../services/rule.service"

const {
  getRuleById,
  getAllRules,
  addNewRule,
  updateRule,
  deleteRule
} = RuleService

export default class RuleController {
  static handleGetRuleById = async (req: Request<{ ruleId: string }>, res: Response) => {
    try {
      const { ruleId } = req.params
      const rule = await getRuleById(ruleId)
      if (rule) {
        res.status(200).json(rule)
      } else {
        res.status(404).send("Rule not found")
      }
    } catch (error) {
      res.status(500).send("Internal server error")
    }
  }

  static handleGetAllRules = async (_: Request, res: Response) => {
    try {
      const rules = await getAllRules()
      res.status(200).json(rules)
    } catch (error) {
      res.status(500).send("Internal server error")
    }
  }

  static handleAddRule = async (req: Request, res: Response) => {
    try {
      const rule = req.body
      const ruleCreated = await addNewRule(rule)
      res.status(201).json(ruleCreated)
    } catch (error) {
      res.status(500).send("Internal server error")
    }
  }

  static handleUpdateRule = async (req: Request, res: Response) => {
    try {
      const rule = req.body
      const ruleUpdated = await updateRule(rule)
      res.status(200).json(ruleUpdated)
    } catch (error) {
      res.status(500).send("Internal server error")
    }
  }

  static handleDeleteRule = async (req: Request<{ ruleId: string }>, res: Response) => {
    try {
      const { ruleId } = req.params
      const ruleDeleted = await deleteRule(ruleId)
      res.status(200).json(ruleDeleted)
    } catch (error) {
      res.status(500).send("Internal server error")
    }
  }
}