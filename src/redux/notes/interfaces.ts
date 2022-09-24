export enum EnumTabs {
  ACTIVE = 'active',
  ARCHIVED = 'archived',
}

export enum EnumCategories {
  TASK = 'Task',
  RANDOM_THOUGHT = 'Random thought',
  IDEA = 'Idea',
}

export interface INote {
  id: string;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
  isActive: boolean;
}

export interface INotesState {
  notes: INote[];
  activeTab: EnumTabs;
  categories: EnumCategories[];
}

export interface ICategories {
  notes: INote[];
  activeTab: EnumTabs;
}

export interface ISummaryByCategories {
  category: string;
  active: string;
  archived: string;
}
