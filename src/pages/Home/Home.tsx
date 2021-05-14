import React, { useState } from "react";

import { Button } from "antd";
import "./Home.less";

import { useTranslation } from "react-i18next";

export const Home: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const { t, i18n } = useTranslation();

  // Open to get error when commit
  // const hello = "Hello";
  // var xxx = 'yi11';

  return (
    <div>
      Home Page {count}
      <h1>{t("Welcome to React")}</h1>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Home Page Button
      </Button>
      <Button
        onClick={() => {
          i18n.changeLanguage("zh");
        }}
      >
        切换中文
      </Button>
      <Button
        onClick={() => {
          i18n.changeLanguage("en");
        }}
      >
        切换英文
      </Button>
    </div>
  );
};
