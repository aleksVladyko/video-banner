import { Banner } from './pages/Banner'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UnHappyBaby from './pages/UnHappyBaby'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import appSlice from './store/appSlice'

const store = configureStore({
  reducer: {
    formSubmit: appSlice,
  },
})
function App() {
  return (
    <main className="">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Banner />} />
            <Route path="unhappy" element={<UnHappyBaby />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </main>
  )
}

export default App
