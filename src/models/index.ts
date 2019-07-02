import { Nullable } from "./utils";

export type Skill = {
  id: string;
  icon: string;
  tooltipTitle?: string;
  tooltipDescription?: string;
  children: Skill[];
};

export type ParentPosition = {
  bottom: number;
  center: number;
};

export type ChildPosition = {
  top: number;
  center: number;
};

export interface ContextStorage {
  getItem: (key: string) => Nullable<string>;
  setItem: (key: string, value: string) => void;
}