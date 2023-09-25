import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeList } from './components/home/List'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeList></HomeList>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
