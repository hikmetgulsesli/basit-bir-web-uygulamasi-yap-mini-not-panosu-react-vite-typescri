import { useMemo } from 'react';
import { useAppState } from './hooks/useAppState';
import { AnaEkranDashboard } from './screens/AnaEkranDashboard';
import { BosDurum } from './screens/BosDurum';
import { NotEkleduzenle } from './screens/NotEkleduzenle';
import { NotDetayi } from './screens/NotDetayi';
import { Ayarlar } from './screens/Ayarlar';
import { Istatistikler } from './screens/Istatistikler';
import { HataDurumu } from './screens/HataDurumu';
import { ProfilPaneli } from './screens/ProfilPaneli';
import { clearState } from './utils/storage';
import './App.css';

export default function App() {
  const {
    state,
    addNote,
    updateNote,
    deleteNote,
    toggleTodo,
    setView,
    selectNote,
    setSearch,
    setFilter,
    setPreferences,
    setUserProfile,
    clearAll,
  } = useAppState();

  const selectedNote = useMemo(
    () => state.notes.find((n) => n.id === state.selectedNoteId) ?? null,
    [state.notes, state.selectedNoteId]
  );

  const uniqueCategories = useMemo(
    () => Array.from(new Set(state.notes.map((n) => n.category).filter(Boolean))),
    [state.notes]
  );

  const handleClearData = () => {
    clearState();
    clearAll();
  };

  const handleViewDetail = (id: string) => {
    selectNote(id);
    setView('detail');
  };

  const handleEditNote = (id: string) => {
    selectNote(id);
    setView('edit');
  };

  const handleAddNote = () => {
    selectNote(null);
    setView('add');
  };

  const renderScreen = () => {
    switch (state.view) {
      case 'dashboard':
        if (state.notes.length === 0) {
          return (
            <BosDurum
              onAddNote={handleAddNote}
              onOpenSettings={() => setView('settings')}
              onOpenStats={() => setView('stats')}
              onOpenProfile={() => setView('profile')}
            />
          );
        }
        return (
          <AnaEkranDashboard
            notes={state.notes}
            searchQuery={state.searchQuery}
            filterTab={state.filterTab}
            onSearchChange={setSearch}
            onFilterChange={setFilter}
            onAddNote={handleAddNote}
            onEditNote={handleEditNote}
            onDeleteNote={deleteNote}
            onToggleTodo={toggleTodo}
            onViewDetail={handleViewDetail}
            onOpenSettings={() => setView('settings')}
            onOpenStats={() => setView('stats')}
            onOpenProfile={() => setView('profile')}
          />
        );
      case 'add':
        return (
          <NotEkleduzenle
            onSave={addNote}
            onUpdate={updateNote}
            onCancel={() => setView('dashboard')}
          />
        );
      case 'edit':
        return (
          <NotEkleduzenle
            note={selectedNote}
            onSave={addNote}
            onUpdate={updateNote}
            onCancel={() => setView('dashboard')}
          />
        );
      case 'detail':
        return (
          <NotDetayi
            note={selectedNote}
            onBack={() => setView('dashboard')}
            onEdit={handleEditNote}
            onDelete={deleteNote}
            onToggleTodo={toggleTodo}
            onAddNote={handleAddNote}
          />
        );
      case 'settings':
        return (
          <Ayarlar
            preferences={state.preferences}
            userProfile={state.userProfile}
            onPreferencesChange={setPreferences}
            onUserProfileChange={setUserProfile}
            onClearData={handleClearData}
            onBack={() => setView('dashboard')}
          />
        );
      case 'stats':
        return (
          <Istatistikler
            notes={state.notes}
            onBack={() => setView('dashboard')}
            onAddNote={handleAddNote}
          />
        );
      case 'profile':
        return (
          <ProfilPaneli
            onClose={() => setView('dashboard')}
            onOpenSettings={() => setView('settings')}
            onOpenAccount={() => setView('settings')}
            activeNotesCount={state.notes.length}
            collectionsCount={uniqueCategories.length}
            userProfile={state.userProfile}
          />
        );
      case 'error':
        return (
          <HataDurumu
            onRetry={() => setView('dashboard')}
            onBack={() => setView('dashboard')}
          />
        );
      default:
        return (
          <BosDurum
            onAddNote={handleAddNote}
            onOpenSettings={() => setView('settings')}
            onOpenStats={() => setView('stats')}
            onOpenProfile={() => setView('profile')}
          />
        );
    }
  };

  return (
    <div
      data-setfarm-root="app"
      className="min-h-screen bg-[#11131b] text-[#e1e2ed] flex"
    >
      {renderScreen()}
    </div>
  );
}
