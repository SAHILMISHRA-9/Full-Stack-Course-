import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import Condition from '../components/Condition'
import Quiz from '../components/Quiz.jsx'

createRoot(document.getElementById("root")).render(
  // <App></App>
  // <Condition></Condition>
  <Quiz></Quiz>
)
