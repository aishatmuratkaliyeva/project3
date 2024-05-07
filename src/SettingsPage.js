import React from 'react';
import { useUserSettings } from './UserSettingsContext';

const SettingsPage = () => {
  const { settings, updateSettings } = useUserSettings();

  const handleThemeChange = () => {
    const newTheme = settings.theme === 'light' ? 'dark' : 'light';
    updateSettings({ theme: newTheme });
  };

  const handleLanguageChange = (e) => {
    updateSettings({ language: e.target.value });
  };

  return (
    <div className={`app ${settings.theme}`}>
      <div className="language-selector">
        <label>
          {settings.language === 'english' ? 'Language: ' : 'Язык: '}
          <select value={settings.language} onChange={handleLanguageChange}>
            <option value="english">English</option>
            <option value="russian">Русский</option>
          </select>
        </label>
      </div>
      <div className="content">
        <h1>{settings.language === 'english' ? 'Task 4' : '4 Задание'}</h1>
        <div>
          <label>
            {settings.language === 'english' ? 'Color: ' : 'Цвет: '}
            <button onClick={handleThemeChange}>{settings.theme === 'light' ? 'Dark' : 'Light'}</button>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

