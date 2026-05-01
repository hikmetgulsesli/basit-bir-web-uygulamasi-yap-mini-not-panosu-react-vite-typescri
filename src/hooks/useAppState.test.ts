import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAppState } from './useAppState';

describe('useAppState', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should start with empty notes and dashboard view', () => {
    const { result } = renderHook(() => useAppState());
    expect(result.current.state.notes).toEqual([]);
    expect(result.current.state.view).toBe('dashboard');
  });

  it('should add a note', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.addNote({
        title: 'Test Notu',
        content: 'İçerik',
        category: 'work',
        todos: [],
        important: false,
      });
    });
    expect(result.current.state.notes).toHaveLength(1);
    expect(result.current.state.notes[0].title).toBe('Test Notu');
    expect(result.current.state.view).toBe('dashboard');
  });

  it('should delete a note', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.addNote({ title: 'Silinecek', content: 'X', category: 'work', todos: [], important: false });
    });
    const id = result.current.state.notes[0].id;
    act(() => {
      result.current.deleteNote(id);
    });
    expect(result.current.state.notes).toHaveLength(0);
  });

  it('should toggle a todo', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.addNote({
        title: 'Görevli Not',
        content: 'X',
        category: 'work',
        todos: [{ id: 't1', text: 'Görev 1', completed: false }],
        important: false,
      });
    });
    const noteId = result.current.state.notes[0].id;
    act(() => {
      result.current.toggleTodo(noteId, 't1');
    });
    expect(result.current.state.notes[0].todos[0].completed).toBe(true);
  });

  it('should update a note', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.addNote({ title: 'Eski', content: 'X', category: 'work', todos: [], important: false });
    });
    const id = result.current.state.notes[0].id;
    act(() => {
      result.current.updateNote(id, { title: 'Yeni' });
    });
    expect(result.current.state.notes[0].title).toBe('Yeni');
  });

  it('should set search query', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.setSearch('test');
    });
    expect(result.current.state.searchQuery).toBe('test');
  });

  it('should set filter tab', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.setFilter('completed');
    });
    expect(result.current.state.filterTab).toBe('completed');
  });

  it('should persist to localStorage', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.addNote({ title: 'Kalıcı', content: 'X', category: 'work', todos: [], important: false });
    });
    const saved = localStorage.getItem('mini-not-panosu-state');
    expect(saved).toContain('Kalıcı');
  });

  it('should clear all data', () => {
    const { result } = renderHook(() => useAppState());
    act(() => {
      result.current.addNote({ title: 'X', content: 'Y', category: 'work', todos: [], important: false });
      result.current.setSearch('q');
    });
    act(() => {
      result.current.clearAll();
    });
    expect(result.current.state.notes).toHaveLength(0);
    expect(result.current.state.searchQuery).toBe('');
  });
});
