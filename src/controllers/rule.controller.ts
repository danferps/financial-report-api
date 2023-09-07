import { Request, Response } from "express"
import RuleService from "../services/rule.service"

const {
  getAllRules,
  addNewRule,
  updateRule,
  deleteRule
} = RuleService

export default class RuleController {
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
      console.log(error)
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

  static handleDeleteRule = async (req: Request<{ ruleId: number }>, res: Response) => {
    try {
      const ruleId = Number(req.params.ruleId)
      const ruleDeleted = await deleteRule(ruleId)
      res.status(200).json(ruleDeleted)
    } catch (error) {
      console.log(error)
      res.status(500).send("Internal server error")
    }
  }
}