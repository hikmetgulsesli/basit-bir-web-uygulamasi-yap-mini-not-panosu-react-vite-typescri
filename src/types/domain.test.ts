import { describe, it, expect } from 'vitest';

describe('domain types', () => {
  it('should allow valid note structure', () => {
    const note = {
      id: '1',
      title: 'Başlık',
      content: 'İçerik',
      category: 'work',
      todos: [{ id: 't1', text: 'Görev', completed: false }],
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-01T00:00:00Z',
      important: true,
    };
    expect(note.title).toBe('Başlık');
    expect(note.todos).toHaveLength(1);
    expect(note.todos[0].completed).toBe(false);
  });
});
