export type CollaborationType =
  | "freelance"
  | "cto-cofounder"
  | "technical-partner"
  | "mobile-web-product"
  | "not-sure";

export type BudgetRange =
  | "under-1k"
  | "1k-3k"
  | "3k-8k"
  | "8k-plus"
  | "discuss";

export type TimelineRange =
  | "asap"
  | "2-4-weeks"
  | "1-2-months"
  | "3-months-plus"
  | "flexible";

export type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  collaborationType: CollaborationType;
  projectTitle: string;
  projectSummary: string;
  audience: string;
  currentStage: string;
  scope: string[];
  platforms: string[];
  stackPreferences: string;
  features: string;
  references: string;
  budget: BudgetRange;
  timeline: TimelineRange;
  ongoingSupport: string;
  decisionMaker: string;
  extraNotes: string;
};
