import React, { useState, useEffect } from 'react';
import './OrgNode.less';
import isMobile from 'ismobilejs';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

interface nodeItem {
  name: string;
}
const OrgNode: React.FC = () => {
  // const [nodeList, setNodeList] = useState<any[]>([]);
  const [nodeList, setNodeList] = useState<nodeItem[]>([]);
  const ismobile = isMobile().apple.phone || isMobile().android.phone;
  const { t } = useTranslation();
  const history = useHistory();
  useEffect(() => {
    let i = 0;
    const nodeList = [];

    while (i < 15) {
      nodeList.push({
        name: `0${i}Node`,
      });
      i++;
    }
    setNodeList(nodeList);
  }, []);
  const clickHandle = (
    item: nodeItem,
    e?: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    console.log(item, e);
    history.push('/nodeDetail');
  };
  return (
    <div className={`orgnode-wrap${ismobile ? ' orgnode-wrap-phone' : ''}`}>
      <h3>{t('network nodes')}</h3>
      <ul>
        {nodeList.map((item: nodeItem, key: number) => (
          <li key={key} onClick={(e) => clickHandle(item, e)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrgNode;
