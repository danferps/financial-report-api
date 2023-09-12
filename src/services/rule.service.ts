import { PrismaClient, Rule } from "@prisma/client";
import { RuleWithValidations } from "../models/rule.model";

const prisma = new PrismaClient()

export default class RuleService {
  static getRuleById = async (ruleId: string) => {
    const rule = await prisma.rule.findFirst({
      where: { id: ruleId },
      include: {
        validation: true
      }
    })
    await prisma.$disconnect()
    return rule
  }

  static getAllRules = async (): Promise<Rule[]> => {
    const rules = await prisma.rule.findMany({
      include: {
        validation: true
      }
    })
    await prisma.$disconnect()
    return rules
  }

  static addNewRule = async (rule: RuleWithValidations) => {
    const createdRule = await prisma.rule.create({
      data: {
        ...rule,
        validation: {
          create: rule.validation
        }
      },
      include: {
        validation: true
      }
    })
    await prisma.$disconnect()
    return createdRule
  }

  static updateRule = async (rule: RuleWithValidations) => {
    const updatedRule = await prisma.rule.update({
      where: {
        id: rule.id
      },
      data: {
        ...rule,
        validation: {
          update: rule.validation
        }
      },
      include: {
        validation: true
      }
    })
    await prisma.$disconnect()
    return updatedRule
  }

  static deleteRule = async (ruleId: string) => {
    const deletedRule = await prisma.rule.delete({
      where: {
        id: ruleId
      },
      include: {
        validation: true
      }
    })
    await prisma.$disconnect()
    return deletedRule
  }
}
