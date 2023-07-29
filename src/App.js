import { Calendar } from './components/Calendar';

import './App.css';

const now = new Date(2017, 2, 8);

export default function App() {
  return (
    <Calendar date={now} />
  );
}
