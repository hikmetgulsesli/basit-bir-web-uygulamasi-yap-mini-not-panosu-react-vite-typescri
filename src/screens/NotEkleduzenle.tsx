// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Not Ekle/Düzenle
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useEffect } from "react";
import type { Note, TodoItem } from "../types/domain";

interface NotEkleduzenleProps {
  note?: Note | null;
  onSave: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onUpdate: (id: string, changes: Partial<Omit<Note, 'id' | 'createdAt'>>) => void;
  onCancel: () => void;
}

export function NotEkleduzenle(props: NotEkleduzenleProps) {
  const { note, onSave, onUpdate, onCancel } = props;

  const [title, setTitle] = useState(note?.title ?? "");
  const [content, setContent] = useState(note?.content ?? "");
  const [category, setCategory] = useState(note?.category ?? "work");
  const [important, setImportant] = useState(note?.important ?? false);
  const [todos, setTodos] = useState<TodoItem[]>(note?.todos ?? []);
  const [newTodoText, setNewTodoText] = useState("");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setCategory(note.category);
      setImportant(note.important);
      setTodos(note.todos);
    }
  }, [note?.id]);

  const isEdit = !!note;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    if (isEdit && note) {
      onUpdate(note.id, { title, content, category, important, todos });
    } else {
      onSave({ title, content, category, important, todos });
    }
  };

  const addTodo = () => {
    if (!newTodoText.trim()) return;
    setTodos([...todos, { id: crypto.randomUUID(), text: newTodoText, completed: false }]);
    setNewTodoText("");
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
  return (
    <>
      {/* TopNavBar: Suppressed because this is a transactional/task-focused screen (Ekle/Düzenle) */}
      {/* SideNavBar: Suppressed because this is a transactional/task-focused screen (Ekle/Düzenle) */}
      <div className="flex-1 overflow-y-auto">
      <main className="max-w-[800px] mx-auto w-full px-md md:px-lg py-xl md:py-2xl">
      <header className="mb-xl flex items-center justify-between">
      <div>
      <h1 className="font-h1 text-h1 text-on-surface mb-sm">{isEdit ? "Notu Düzenle" : "Yeni Not Ekle"}</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Düşüncelerinizi kaydedin ve düzenleyin.</p>
      </div>
      <button className="h-[44px] w-[44px] flex items-center justify-center rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background" onClick={onCancel} aria-label="Kapat">
      <span className="material-symbols-outlined">close</span>
      </button>
      </header>
      <form className="bg-surface-container-low rounded-xl border border-outline-variant p-lg md:p-xl shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.5)]" onSubmit={handleSubmit}>
      <div className="space-y-lg">
      {/* Başlık Alanı */}
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-xs flex justify-between" htmlFor="note-title">
                                  Başlık <span className="text-error font-label-sm text-label-sm">*Zorunlu alan</span>
      </label>
      <input className="w-full h-[44px] bg-[#1E293B] border border-[#334155] rounded-DEFAULT px-md font-body-md text-body-md text-on-surface placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:ring-0 focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#11131b] transition-all" id="note-title" name="note-title" placeholder="Not başlığını buraya girin..." required={true} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      {/* Kategori Alanı */}
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-sm">Kategori</label>
      <div className="flex flex-wrap gap-sm">
      <label className="cursor-pointer">
      <input checked={category === "work"} className="peer sr-only" name="category" type="radio" value="work" onChange={() => setCategory("work")} />
      <div className="h-lg px-md rounded-lg flex items-center justify-center font-label-sm text-label-sm border border-outline-variant text-on-surface-variant peer-checked:bg-primary-container/20 peer-checked:text-primary peer-checked:border-primary-container transition-colors focus-within:ring-2 focus-within:ring-primary-container focus-within:ring-offset-2 focus-within:ring-offset-background">
                                          İş
                                      </div>
      </label>
      <label className="cursor-pointer">
      <input checked={category === "personal"} className="peer sr-only" name="category" type="radio" value="personal" onChange={() => setCategory("personal")} />
      <div className="h-lg px-md rounded-lg flex items-center justify-center font-label-sm text-label-sm border border-outline-variant text-on-surface-variant peer-checked:bg-secondary-container/30 peer-checked:text-secondary peer-checked:border-secondary-container transition-colors focus-within:ring-2 focus-within:ring-primary-container focus-within:ring-offset-2 focus-within:ring-offset-background">
                                          Kişisel
                                      </div>
      </label>
      <label className="cursor-pointer">
      <input checked={category === "ideas"} className="peer sr-only" name="category" type="radio" value="ideas" onChange={() => setCategory("ideas")} />
      <div className="h-lg px-md rounded-lg flex items-center justify-center font-label-sm text-label-sm border border-outline-variant text-on-surface-variant peer-checked:bg-tertiary-container/30 peer-checked:text-tertiary peer-checked:border-tertiary-container transition-colors focus-within:ring-2 focus-within:ring-primary-container focus-within:ring-offset-2 focus-within:ring-offset-background">
                                          Fikirler
                                      </div>
      </label>
      </div>
      </div>
      {/* İçerik Alanı */}
      <div>
      <label className="block font-label-md text-label-md text-on-surface mb-xs flex justify-between" htmlFor="note-content">
                                  İçerik <span className="text-error font-label-sm text-label-sm">*Zorunlu alan</span>
      </label>
      <div className="border border-[#334155] rounded-DEFAULT bg-[#1E293B] overflow-hidden focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-[#2563EB] focus-within:ring-offset-2 focus-within:ring-offset-[#11131b] transition-all">
      <textarea className="w-full bg-transparent border-none p-md font-body-md text-body-md text-on-surface placeholder:text-[#94A3B8] resize-y focus:ring-0 focus:outline-none min-h-[150px]" id="note-content" name="note-content" placeholder="Notunuzu yazmaya başlayın..." required={true} rows={8} value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      </div>
      </div>
      {/* Todo List */}
      <div>
        <label className="block font-label-md text-label-md text-on-surface mb-sm">Görevler</label>
        <div className="space-y-2 mb-3">
          {todos.map((todo) => (
            <div key={todo.id} className="flex items-center gap-2">
              <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} className="custom-checkbox" />
              <span className={`flex-1 font-body-sm ${todo.completed ? 'line-through text-slate-500' : 'text-on-surface-variant'}`}>{todo.text}</span>
              <button type="button" onClick={() => removeTodo(todo.id)} className="text-slate-400 hover:text-error" aria-label="Görevi Sil">
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input type="text" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addTodo(); } }} placeholder="Yeni görev ekle..." className="flex-1 h-[44px] bg-[#1E293B] border border-[#334155] rounded-DEFAULT px-md font-body-sm text-body-sm text-on-surface placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#11131b] transition-all" />
          <button type="button" onClick={addTodo} className="h-[44px] px-md bg-surface-container-high border border-outline-variant text-on-surface rounded-DEFAULT hover:bg-surface-container-highest transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">add</span> Ekle
          </button>
        </div>
      </div>
      {/* Ekstra Seçenekler */}
      <div className="flex items-center gap-sm">
      <label className="flex items-center gap-sm cursor-pointer group">
      <div className="relative flex items-center justify-center">
      <input className="peer sr-only" type="checkbox" checked={important} onChange={(e) => setImportant(e.target.checked)} />
      <div className="w-[18px] h-[18px] rounded-lg border border-[#334155] bg-[#1E293B] peer-checked:bg-[#2563EB] peer-checked:border-[#2563EB] transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[#2563EB] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[#11131b]"></div>
      <span className="material-symbols-outlined absolute text-[14px] text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" style={{fontVariationSettings: "'FILL' 1"}}>check</span>
      </div>
      <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Önemli olarak işaretle</span>
      </label>
      </div>
      </div>
      {/* Aksiyonlar */}
      <div className="mt-xl pt-lg border-t border-outline-variant flex flex-col-reverse sm:flex-row justify-end gap-md">
      <button className="min-h-[44px] px-lg rounded-DEFAULT border border-[#334155] text-[#F8FAFC] font-label-md text-label-md hover:bg-surface-container-highest active:scale-98 transition-all focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#11131b]" type="button" onClick={onCancel}>
                              İptal
                          </button>
      <button className="min-h-[44px] px-lg rounded-DEFAULT bg-[#2563EB] text-[#FFFFFF] font-label-md text-label-md hover:bg-opacity-90 active:scale-98 transition-all focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2 focus:ring-offset-[#11131b] flex items-center justify-center gap-xs" type="submit">
      <span className="material-symbols-outlined text-[18px]">save</span>
                              Kaydet
                          </button>
      </div>
      </form>
      </main>
      </div>
    </>
  );
}
