import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import isMobile from 'ismobilejs';
import downArrow from '../../../../assets/downArrow_b.png';
import './NavMenu.less';
import { Menu } from 'antd';
import { NavItem, useHeaderMap } from '../NavData';

const NavMenu: React.FC = () => {
  // const { t } = useTranslation();
  // const ismobile = isMobile().apple.phone || isMobile().android.phone;
  const history = useHistory();
  const { SubMenu } = Menu;
  const [current, setCurrent] = useState<string>('');
  return (
    <Menu
      onClick={(val) => {
        console.log(val);
        if ((val.key as string).indexOf('/') !== -1) {
          history.push(val.key as string);
          setCurrent(val.key as string);
          return;
        }
        setCurrent('');
      }}
      selectedKeys={[current]}
      mode="horizontal"
      className="NavMenu"
    >
      {useHeaderMap().map((item, index) =>
        item.children ? (
          <SubMenu
            key={item.key}
            title={
              <div className="nav-item-list">
                {item.name}
                <img src={downArrow} alt="" />
              </div>
            }
          >
            {item.children.map((child: NavItem) => (
              <Menu.Item key={child.key}>
                {child.key.indexOf('/') !== -1 ? (
                  child.name
                ) : (
                  <a
                    href={child.url ?? '#'}
                    target={child.isBank ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                  >
                    {child.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </SubMenu>
        ) : (
          <Menu.Item key={item.key}>
            <span className="nav-item-list">{item.name}</span>
          </Menu.Item>
        )
      )}
    </Menu>
  );
};

export default NavMenu;
