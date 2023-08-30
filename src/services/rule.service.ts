import { PrismaClient } from "@prisma/client";
import { RuleModel } from "../models/rule.model";

const prisma = new PrismaClient()

export default class RuleService {
  static getAllRules = async (): Promise<RuleModel[]> => {
    const rules = await prisma.rule.findMany({
      include: {
        markets: true
      }
    })
    return rules
  }

  static addNewRule = async (rule: RuleModel) => {
    const ruleCreated = await prisma.rule.create({
      data: {
        name: rule.name,
        description: rule.description,
        type: rule.type,
        markets: {
          create: rule.markets
        }
      },
      include: {
        markets: true
      }
    })
    return ruleCreated
  }

  static updateRule = async (rule: RuleModel) => {
    const markets = rule.markets.map((market) => ({
      where: { id: market.id },
      data: market
    }))
    const ruleUpdated = await prisma.rule.update({
      where: { id: rule.id },
      data: {
        name: rule.name,
        description: rule.description,
        type: rule.type,
        markets: {
          update: markets
        }
      }
    })
    return ruleUpdated
  }

  static deleteRule = async (ruleId: number) => {
    const deletedRule = await prisma.rule.delete({
      where: { id: ruleId },
    })
    return deletedRule
  }
}
