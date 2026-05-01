import { describe, it, expect, beforeEach } from 'vitest';
import { loadState, saveState, clearState } from './storage';
import type { AppState } from '../types/domain';

describe('storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should save and load state', () => {
    const state: AppState = {
      notes: [{ id: '1', title: 'T', content: 'C', category: 'work', todos: [], createdAt: '2024-01-01', updatedAt: '2024-01-01', important: false }],
      view: 'dashboard',
      selectedNoteId: null,
      searchQuery: '',
      filterTab: 'all',
      preferences: { theme: 'dark', compactView: false },
      userProfile: { displayName: '', email: '', avatarUrl: '' },
    };
    saveState(state);
    const loaded = loadState();
    expect(loaded?.notes).toHaveLength(1);
    expect(loaded?.notes?.[0].title).toBe('T');
  });

  it('should return null for empty storage', () => {
    expect(loadState()).toBeNull();
  });

  it('should clear state', () => {
    const state: AppState = {
      notes: [],
      view: 'dashboard',
      selectedNoteId: null,
      searchQuery: '',
      filterTab: 'all',
      preferences: { theme: 'dark', compactView: false },
      userProfile: { displayName: '', email: '', avatarUrl: '' },
    };
    saveState(state);
    clearState();
    expect(loadState()).toBeNull();
  });
});
