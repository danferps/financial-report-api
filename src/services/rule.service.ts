import { PrismaClient, Rule } from "@prisma/client";

const prisma = new PrismaClient()

export default class RuleService {
  static getAllRules = async (): Promise<Rule[]> => {
    const rules = await prisma.rule.findMany({
      include: {
        validation: true
      }
    })
    return rules
  }

  static addNewRule = async (rule: Rule) => {
   
  }

  static updateRule = async (rule: Rule) => {
   
  }

  static deleteRule = async (ruleId: number) => {
  
  }
}