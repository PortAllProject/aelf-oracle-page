import React from 'react';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import world from '../../assets/languageChange_b.png';
import LWord from '../../assets/LWord.png';
import downArrow from '../../assets/downArrow_b.png';
import downPhone from '../../assets/down_phone.png';
import isMobile from 'ismobilejs';
import './LChange.less';
import en from 'antd/es/locale/en_US';
import zh from 'antd/es/locale/zh_CN';
import { Locale } from 'antd/lib/locale-provider';
const languageAntd = {
  en,
  zh,
};
const LanguageChange: React.FC<{
  setAntLocal: React.Dispatch<React.SetStateAction<Locale>>;
}> = ({ setAntLocal }) => {
  const { i18n } = useTranslation();
  const { Option } = Select;
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  return (
    <>
      <div
        className={`language-change-content${
          ismobile ? ' language-phone' : ''
        }`}
      >
        <img src={ismobile ? LWord : world} alt="" />
        <Select
          defaultValue="en"
          bordered={false}
          style={{ width: !ismobile ? 163 : '10.74rem' }}
          className="language-select"
          dropdownClassName={ismobile ? 'phone-select-option' : 'select-option'}
          getPopupContainer={(ele) => ele}
          showArrow={false}
          // defaultOpen={true}
          onChange={(val) => {
            setAntLocal(languageAntd[val === 'en' ? 'en' : 'zh']);
            i18n.changeLanguage(val);
          }}
        >
          <Option value="en">Intl - English</Option>
          <Option value="zh">Intl - 简体中文</Option>
        </Select>
        <img
          className="down-arrow"
          src={ismobile ? downPhone : downArrow}
          alt=""
        />
      </div>
    </>
  );
};

export default LanguageChange;
