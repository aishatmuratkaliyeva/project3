import React from 'react';
import './App.css';
import { UserSettingsProvider, useUserSettings } from './UserSettingsContext';
import SettingsPage from './SettingsPage';
import withTimeTracking from './withTimeTracking';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <UserSettingsProvider>
      <AppContent />
    </UserSettingsProvider>
  );
};

const AppContent = () => {
  const { settings } = useUserSettings();
  const themeClass = settings.theme === 'light' ? 'light' : 'dark';

  return (
    <div className={`app ${themeClass}`}>
      <SettingsPage />
      <PageWithTimeTracking />
      <TooltipsExample />
    </div>
  );
};

const TimeTrackingComponent = ({ timeSpent }) => {
  const { settings } = useUserSettings();
  return (
    <div className="time-tracking">
      <p> {settings.language === 'english' ? 'Time : ' : 'Время : '}{timeSpent}
      {settings.language === 'english' ? ' seconds' : ' секунд'}</p>
    </div>
  );
};

const PageWithTimeTracking = withTimeTracking(TimeTrackingComponent);
const AnotherPageWithTimeTracking = withTimeTracking(TimeTrackingComponent);

const TooltipsExample = () => {
  const { settings } = useUserSettings();
  return (
    <div className="tooltips-example">
      <Tooltip text={settings.language === 'english' ? 'Top' : 'Cверху'} position="top">
        {({ showTooltip, hideTooltip }) => (
          <div onMouseEnter={showTooltip('top')} onMouseLeave={hideTooltip}>
            <button>{settings.language === 'english' ? 'Top' : 'Верх'}</button>
          </div>
        )}
      </Tooltip>
      <Tooltip text={settings.language === 'english' ? 'Right' : 'Cправа'} position="right">
        {({ showTooltip, hideTooltip }) => (
          <div onMouseEnter={showTooltip('right')} onMouseLeave={hideTooltip}>
            <button>{settings.language === 'english' ? 'Right' : 'Право'}</button>
          </div>
        )}
      </Tooltip>
      <Tooltip text={settings.language === 'english' ? 'Left' : 'Cлева'}  position="left">
        {({ showTooltip, hideTooltip }) => (
          <div onMouseEnter={showTooltip('left')} onMouseLeave={hideTooltip}>
            <button>{settings.language === 'english' ? 'Left' : 'Лево'}</button>
          </div>
        )}
      </Tooltip>
      <Tooltip text={settings.language === 'english' ? 'Bottom' : 'Cнизу'} position="bottom">
        {({ showTooltip, hideTooltip }) => (
          <div onMouseEnter={showTooltip('bottom')} onMouseLeave={hideTooltip}>
            <button>{settings.language === 'english' ? 'Bottom' : 'Низ'}</button>
          </div>
        )}
      </Tooltip>
    </div>
  );
};

export default App;








/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/