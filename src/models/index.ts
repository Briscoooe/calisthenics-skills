export type Skill = {
  id: string;
  icon: string;
  tooltipTitle?: string;
  tooltipDescription?: string;
  children: Skill[];
};
