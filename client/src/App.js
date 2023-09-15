import HomePage from './pages/HomePage';
import ReactGA from 'react-ga';

// Uuse 'createBrowserHistory' from 'history' package to enable page tracking
import { createBrowserHistory } from 'history';

const measurementId = 'G-HD8ZP6XW7W';

// Initialize Google Analytics with Measurement ID
ReactGA.initialize(measurementId);

// Create a history object for tracking page views
const history = createBrowserHistory();

// Initialize ReactGA and set it to use history object
ReactGA.initialize(measurementId, { history });

function App() {
  return (
    <>
      {/* Render HomePage component */}
      <HomePage />
    </>
  );
}

export default App;
