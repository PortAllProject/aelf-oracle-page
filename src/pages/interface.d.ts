interface TradeType {
  Commit?: string;
  Reveal?: string;
}

interface InquireItem {
  inquireID: string;
  key: string;
  tradeId: TradeType;
  reportState: string;
  result: string;
  reqLink?: string;
  nodesNum?: string;
}

interface ReportItem {
  agDetail: { address: string; icon: number };
  startTime: string;
  key: string;
  tradeId: string;
  comfirmTime: string;
  finishTime: string;
  resultSet: string;
}
interface ComplaintItem {
  index: number;
  time: string;
  key: string;
  reason: string;
  directions: string;
  annex: string[];
  state: number;
  result: number;
}

interface ChartItem {
  time: string;
  value: number;
}
interface rpWeekTimeType {
  chartData: ChartItem[];
  key: string;
}
interface RepTableItem {
  key: string;
  index: number;
  name: string;
  queryCount: string;
  responseRate: string;
  rpSecondTime: string;
  allTime: string;
  rpWeekTime: rpWeekTimeType;
}

interface QueryItem {
  key: string;
  name: string;
  tradeId: string;
  reportState: number;
  time: string;
}
