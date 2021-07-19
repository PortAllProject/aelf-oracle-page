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
