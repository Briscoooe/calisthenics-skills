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
