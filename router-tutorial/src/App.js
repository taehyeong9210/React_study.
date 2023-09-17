import React from "react";
import Home from "./page/Home";
import About from "./page/About";
import { Route, Routes } from "react-router-dom";
import Profile from "./page/Profile";
import Article from "./page/Article";
import Articles from "./page/Articles";
import Layout from "./page/Layout";
import NotFound from "./page/NotFound";
import Login from "./page/Login";
import MyPage from "./page/MyPage";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="/profiles/:username" element={<Profile />} />
      <Route path="/articles" element={<Articles />}>
        <Route path="/articles/:id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
