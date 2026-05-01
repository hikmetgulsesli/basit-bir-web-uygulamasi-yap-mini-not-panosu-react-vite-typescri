import { useReducer, useEffect, useCallback } from 'react';
import type { Note, TodoItem, AppState, View, FilterTab, AppPreferences } from '../types/domain';
import { loadState, saveState } from '../utils/storage';

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

const now = () => new Date().toISOString();

const initialPreferences: AppPreferences = {
  theme: 'dark',
  compactView: false,
};

const initialState: AppState = {
  notes: [],
  view: 'dashboard',
  selectedNoteId: null,
  searchQuery: '',
  filterTab: 'all',
  preferences: initialPreferences,
};

export type Action =
  | { type: 'HYDRATE'; payload: Partial<AppState> }
  | { type: 'ADD_NOTE'; payload: Omit<Note, 'id' | 'createdAt' | 'updatedAt'> }
  | { type: 'UPDATE_NOTE'; payload: { id: string; changes: Partial<Omit<Note, 'id' | 'createdAt'>> } }
  | { type: 'DELETE_NOTE'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: { noteId: string; todoId: string } }
  | { type: 'SET_VIEW'; payload: View }
  | { type: 'SELECT_NOTE'; payload: string | null }
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'SET_FILTER'; payload: FilterTab }
  | { type: 'SET_PREFERENCES'; payload: Partial<AppPreferences> }
  | { type: 'CLEAR_ALL' };

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'HYDRATE': {
      return { ...state, ...action.payload, view: action.payload.view ?? state.view };
    }
    case 'ADD_NOTE': {
      const note: Note = {
        ...action.payload,
        id: generateId(),
        createdAt: now(),
        updatedAt: now(),
      };
      return { ...state, notes: [note, ...state.notes], view: 'dashboard', selectedNoteId: null };
    }
    case 'UPDATE_NOTE': {
      const notes = state.notes.map((n) =>
        n.id === action.payload.id
          ? { ...n, ...action.payload.changes, updatedAt: now() }
          : n
      );
      return { ...state, notes, view: 'dashboard', selectedNoteId: null };
    }
    case 'DELETE_NOTE': {
      const notes = state.notes.filter((n) => n.id !== action.payload);
      return { ...state, notes, view: 'dashboard', selectedNoteId: null };
    }
    case 'TOGGLE_TODO': {
      const notes = state.notes.map((n) => {
        if (n.id !== action.payload.noteId) return n;
        const todos = n.todos.map((t) =>
          t.id === action.payload.todoId ? { ...t, completed: !t.completed } : t
        );
        return { ...n, todos, updatedAt: now() };
      });
      return { ...state, notes };
    }
    case 'SET_VIEW': {
      return { ...state, view: action.payload };
    }
    case 'SELECT_NOTE': {
      return { ...state, selectedNoteId: action.payload };
    }
    case 'SET_SEARCH': {
      return { ...state, searchQuery: action.payload };
    }
    case 'SET_FILTER': {
      return { ...state, filterTab: action.payload };
    }
    case 'SET_PREFERENCES': {
      const preferences = { ...state.preferences, ...action.payload };
      return { ...state, preferences };
    }
    case 'CLEAR_ALL': {
      return { ...initialState, preferences: state.preferences };
    }
    default:
      return state;
  }
}

export interface UseAppStateReturn {
  state: AppState;
  dispatch: React.Dispatch<Action>;
  addNote: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateNote: (id: string, changes: Partial<Omit<Note, 'id' | 'createdAt'>>) => void;
  deleteNote: (id: string) => void;
  toggleTodo: (noteId: string, todoId: string) => void;
  setView: (view: View) => void;
  selectNote: (id: string | null) => void;
  setSearch: (query: string) => void;
  setFilter: (tab: FilterTab) => void;
  setPreferences: (prefs: Partial<AppPreferences>) => void;
  clearAll: () => void;
}

export function useAppState(): UseAppStateReturn {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const saved = loadState();
    if (saved) {
      dispatch({ type: 'HYDRATE', payload: saved });
    }
  }, []);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const addNote = useCallback((note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => {
    dispatch({ type: 'ADD_NOTE', payload: note });
  }, []);

  const updateNote = useCallback((id: string, changes: Partial<Omit<Note, 'id' | 'createdAt'>>) => {
    dispatch({ type: 'UPDATE_NOTE', payload: { id, changes } });
  }, []);

  const deleteNote = useCallback((id: string) => {
    dispatch({ type: 'DELETE_NOTE', payload: id });
  }, []);

  const toggleTodo = useCallback((noteId: string, todoId: string) => {
    dispatch({ type: 'TOGGLE_TODO', payload: { noteId, todoId } });
  }, []);

  const setView = useCallback((view: View) => {
    dispatch({ type: 'SET_VIEW', payload: view });
  }, []);

  const selectNote = useCallback((id: string | null) => {
    dispatch({ type: 'SELECT_NOTE', payload: id });
  }, []);

  const setSearch = useCallback((query: string) => {
    dispatch({ type: 'SET_SEARCH', payload: query });
  }, []);

  const setFilter = useCallback((tab: FilterTab) => {
    dispatch({ type: 'SET_FILTER', payload: tab });
  }, []);

  const setPreferences = useCallback((prefs: Partial<AppPreferences>) => {
    dispatch({ type: 'SET_PREFERENCES', payload: prefs });
  }, []);

  const clearAll = useCallback(() => {
    dispatch({ type: 'CLEAR_ALL' });
  }, []);

  return {
    state,
    dispatch,
    addNote,
    updateNote,
    deleteNote,
    toggleTodo,
    setView,
    selectNote,
    setSearch,
    setFilter,
    setPreferences,
    clearAll,
  };
}
