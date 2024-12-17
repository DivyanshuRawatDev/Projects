import { useState } from "react";

import "./App.css";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("Welcome")}</h1>
      <button onClick={()=>i18n.changeLanguage('hi')}>Hindi</button>
      <button onClick={()=>i18n.changeLanguage('en')}>English</button>
    </>
  );
}

export default App;
