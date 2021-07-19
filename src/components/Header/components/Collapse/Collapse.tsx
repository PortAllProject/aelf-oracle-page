import React, { useState } from 'react';
import { Collapse } from 'antd';
import { useTranslation } from 'react-i18next';
import './Collapse.less';
import { useHistory } from 'react-router-dom';
import { useHeaderMap, NavItem } from '../NavData';
import en from 'antd/es/locale/en_US';
import zh from 'antd/es/locale/zh_CN';
import { Locale } from 'antd/lib/locale-provider';
const CollapseWrap: React.FC<{
  isShow: boolean;
  setAntLocal: React.Dispatch<React.SetStateAction<Locale>>;
  onClose: () => void;
}> = ({ isShow, onClose, setAntLocal }) => {
  const [Lg, setLg] = useState<string>('Intl - English');
  const { i18n } = useTranslation();
  const history = useHistory();
  const HeaderMap = useHeaderMap();
  return isShow ? (
    <div
      className="mobile-menu-wrapper"
      onClick={(e) => {
        e.stopPropagation();
        console.log((e.target as HTMLElement).className);
        if ((e.target as HTMLElement).className?.indexOf('child-item') !== -1) {
          onClose();
        }
      }}
    >
      <Collapse ghost expandIconPosition="right">
        <Collapse.Panel
          header={<div className="mobile-menu-item">{Lg}</div>}
          key={1}
        >
          <div
            key="chinese"
            className="child-item"
            onClick={() => {
              setLg('Intl - 简体中文');
              setAntLocal(zh);
              i18n.changeLanguage('zh');
            }}
          >
            Intl - 简体中文
          </div>
          <div
            key="english"
            className="child-item"
            onClick={() => {
              setLg('Intl - English');
              setAntLocal(en);
              i18n.changeLanguage('en');
            }}
          >
            Intl - English
          </div>
        </Collapse.Panel>
        {HeaderMap.map((item, index) => (
          <Collapse.Panel
            header={
              <div
                className="mobile-menu-item"
                onClick={(e) => {
                  if (item.key.indexOf('/') !== -1 && !item.children) {
                    e.stopPropagation();
                    history.push(item.key as string);
                    onClose();
                  }
                }}
              >
                {item.name}
              </div>
            }
            showArrow={!(item.key.indexOf('/') !== -1 && !item.children)}
            key={item.key}
          >
            {item.children &&
              item.children.map((child: NavItem) => (
                <div
                  key={child.key}
                  className="child-item"
                  onClick={(e) => {
                    if ((child.key as string).indexOf('/') !== -1) {
                      history.push(child.key as string);
                    }
                  }}
                >
                  {child.key.indexOf('/') !== -1 ? (
                    child.name
                  ) : (
                    <a
                      href={child.url ?? '#'}
                      target={'_blank'}
                      rel="noopener noreferrer"
                    >
                      {child.name}
                    </a>
                  )}
                </div>
              ))}
          </Collapse.Panel>
        ))}
      </Collapse>
    </div>
  ) : null;
};

export default CollapseWrap;
