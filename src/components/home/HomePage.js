import Footer from "../Footer";
import Header from "../Header";
import Features from "./Features";
import Hero from "./Hero";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { setLogInData, setToken } from "../../redux/feature/logInSlice";
import { useDispatch, useSelector } from "react-redux";
import { loadUserInfos } from "../function/loadUserInfos";

function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let token;
  token = localStorage.getItem("token");
  if (token == "") {
  } else {
    loadUserInfos(token, dispatch, navigate);
  }
  return (
    <div className="Home">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default HomePage;
