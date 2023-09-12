import { Rule, Validation } from "@prisma/client"

export type RuleWithValidations = Rule & {
    validation: Validation
}
