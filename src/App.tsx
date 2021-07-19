import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.less';
import { Home } from './pages/Home';
import RealTimeData from './pages/RealTimeData';
import AllQueries from './pages/AllQueries';
import AllQuest from './pages/AllQuest';
import QueryDetail from './pages/QueryDetail';
import Header from './components/Header';
import Bottom from './components/Bottom';
import Report from './pages/Report';
import Polymerization from './pages/Polymerization';
import NodeReputation from './pages/NodeReputation';
import NodeDetail from './pages/NodeDetail';
import OrgReputation from './pages/OrgReputation';
import OrgDetail from './pages/OrgDetail';
import ScrollToTop from './hooks/ScrollToTop';
import { ConfigProvider } from 'antd';
import { useTranslation } from 'react-i18next';
import en from 'antd/es/locale/en_US';
import zh from 'antd/es/locale/zh_CN';
const App: React.FC = () => {
  const { i18n } = useTranslation();
  // const [a,seta] = useState<string>('1')
  const [antLocal, setAntLocal] = useState(i18n.language === 'zh' ? zh : en);
  return (
    <Suspense fallback={null}>
      <Router>
        <ConfigProvider locale={antLocal}>
          <Header setAntLocal={setAntLocal} />
          <ScrollToTop />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/realTimeData">
              <RealTimeData />
            </Route>
            <Route path="/allQueries">
              <AllQueries />
            </Route>
            <Route path="/allQuest">
              <AllQuest />
            </Route>
            <Route path="/queryDetail">
              <QueryDetail />
            </Route>
            <Route path="/report">
              <Report />
            </Route>
            <Route path="/polymerization">
              <Polymerization />
            </Route>
            <Route path="/nodes">
              <NodeReputation />
            </Route>
            <Route path="/nodeDetail">
              <NodeDetail />
            </Route>
            <Route path="/orgs">
              <OrgReputation />
            </Route>
            <Route path="/OrgDetail">
              <OrgDetail />
            </Route>
          </Switch>
          <Bottom />
        </ConfigProvider>
      </Router>
    </Suspense>
  );
};

export default App;
