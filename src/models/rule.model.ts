import { Market } from "@prisma/client";

export type RuleModel = {
  id: number;
  name: string;
  description: string;
  type: string;
  markets: Market[];
}
