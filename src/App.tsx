import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/app/Layout";
import ChatPage from "./components/pages/ChatPage";
import SettingsPage from "./components/pages/SettingsPage";
import ChatDetail from "./components/detail/ChatDetail";
import SelectChat from "./components/detail/SelectChat";
import Auth from './Auth'

import "@qpokychuk/sf-pro-display/index.css";
import "@qpokychuk/sf-pro-display/normal.css";
import "@qpokychuk/sf-pro-display/italic.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route path="/chats" element={<ChatPage />}>
            <Route index element={<SelectChat />} />
            <Route path=":id" element={<ChatDetail />} /> {/* /chats/:id */}
          </Route>
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
