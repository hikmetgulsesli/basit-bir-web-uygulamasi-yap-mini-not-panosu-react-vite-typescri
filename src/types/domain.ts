export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

export type NoteCategory = 'work' | 'personal' | 'ideas' | (string & {});

export interface Note {
  id: string;
  title: string;
  content: string;
  category: NoteCategory;
  todos: TodoItem[];
  createdAt: string;
  updatedAt: string;
  important: boolean;
}

export type View =
  | 'dashboard'
  | 'add'
  | 'edit'
  | 'detail'
  | 'settings'
  | 'stats'
  | 'profile'
  | 'error';

export type FilterTab = 'all' | 'completed' | 'pending';

export interface AppPreferences {
  theme: 'dark' | 'light' | 'system';
  compactView: boolean;
}

export interface AppState {
  notes: Note[];
  view: View;
  selectedNoteId: string | null;
  searchQuery: string;
  filterTab: FilterTab;
  preferences: AppPreferences;
}
