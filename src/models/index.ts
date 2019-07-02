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
  getItem: (key: string) => string | null;
  setItem: (key: string, value: string) => void;
}