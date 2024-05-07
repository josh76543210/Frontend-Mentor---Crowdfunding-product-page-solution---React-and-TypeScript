export interface IPledgeData {
  items: {
    id: string;
    title: string;
    description: string;
    minPledge: number;
    numLeft: number;
  }[];
  modalState: string;
}

export interface IPledgeDataProvider {
  items: {
    id: string;
    title: string;
    description: string;
    minPledge: number;
    numLeft: number;
  }[];
  modalState: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  dispatch: Function;
}
