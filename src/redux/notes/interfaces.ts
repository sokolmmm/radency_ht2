export enum EnumTabs {
  ACTIVE = 'active',
  ARCHIVED = 'archived',
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
}
