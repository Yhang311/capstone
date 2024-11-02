import React from "react";
import "../compoAssets/analysis_page_style.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useNavigate,
  BrowserRouter,
  Routes,
  NavLink,
} from "react-router-dom";
import Menu_Header from "../compoAssets/menu_header";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import K01 from "../logo_image/emblem_K01.png";
import K02 from "../logo_image/emblem_K02.png";
import K03 from "../logo_image/emblem_K03.png";
import K04 from "../logo_image/emblem_K04.png";
import K05 from "../logo_image/emblem_K05.png";
import K06 from "../logo_image/emblem_K06.png";
import K07 from "../logo_image/emblem_K07.png";
import K08 from "../logo_image/emblem_K08.png";
import K09 from "../logo_image/emblem_K09.png";
import K10 from "../logo_image/emblem_K10.png";
import K11 from "../logo_image/emblem_K11.png";
import K12 from "../logo_image/emblem_K12.png";
import "../App.css";

function Analysis1() {
  const [month, setMonth] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const number = parseInt(value, 10);

      if ((number >= 1 && number <= 12) || value === "") {
        setMonth(value);
      }
    }
  };

  const handleSubmit = () => {
    console.log("입력 숫자 : ", month);
  };

  return (
    <div>
      <Menu_Header></Menu_Header>
      <div className="analysis_intro_container">
        <h2 className="analysis_intro">-분석하고 싶은 기간을 입력하세요-</h2>
      </div>
      <div>
        <input
          type="text"
          value={month}
          onChange={handleChange}
          placeholder="숫자만 입력 (1~12)"
        />
      </div>
      <div className="analysis_button_container">
        <Link to="/Analysis2">
          <button className="analysis_button" onClick={handleSubmit}>
            입력하기
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Analysis1;