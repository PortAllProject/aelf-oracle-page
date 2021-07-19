import React, { useState, useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
import isMobile from 'ismobilejs';
import LanguageChange from '../LanguageChange/LChange';
import { useHistory } from 'react-router-dom';
import NavMenu from './components/NavMenu/NavMenu';
import Collapse from './components/Collapse';
import './Header.less';
import { Locale } from 'antd/lib/locale-provider';

const Header: React.FC<{
  setAntLocal: React.Dispatch<React.SetStateAction<Locale>>;
}> = ({ setAntLocal }) => {
  // const { t } = useTranslation();
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const history = useHistory();
  const docCKHandler = (e: MouseEvent) => {
    setShowMenu(false);
  };
  useEffect(() => {
    document.addEventListener('click', docCKHandler);
    return () => {
      document.removeEventListener('click', docCKHandler);
    };
  }, []);
  const mobileWrap = (
    <>
      <span
        className="logo"
        onClick={() => {
          history.push('/');
        }}
      ></span>
      <span
        className={`menu-wrap${showMenu ? ' close-icon' : ''}`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setShowMenu(!showMenu);
        }}
      ></span>
    </>
  );
  const pcWrap = (
    <>
      <span
        className="logo"
        onClick={() => {
          history.push('/');
        }}
      ></span>
      <NavMenu />
      <div className="language-change">
        <LanguageChange setAntLocal={setAntLocal} />
      </div>
    </>
  );
  return (
    <header style={{ height: ismobile ? '4.14rem' : '66px' }}>
      <div>
        <div className={`header-content${ismobile ? ' mobile-wrap' : ''}`}>
          {ismobile ? mobileWrap : pcWrap}
        </div>
        <Collapse
          isShow={ismobile && showMenu}
          setAntLocal={setAntLocal}
          onClose={() => {
            setShowMenu(false);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
