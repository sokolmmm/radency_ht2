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
  id: number;
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
  currentNoteId: number;
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

export interface IEditTaskPayload {
  id: number;
  name: string;
  category: string;
  content: string;
  dates: string,
}
