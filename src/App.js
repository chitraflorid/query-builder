import logo from './logo.svg';
import './App.css';
import QueryBuilder from './components/query-builder/QueryBuilder';
import QueryProvider from './components/query-builder/providers/QueryProvider';

function App() {
  return (
    <QueryProvider>
        <QueryBuilder />
    </QueryProvider>
  );
}

export default App;
