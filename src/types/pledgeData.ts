export interface IPledgeData {
  items: {
    id: string;
    title: string;
    description: string;
    minPledge: number;
    numLeft: number;
  }[];
  modalState: string;
  bookMarked: boolean;
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
  bookMarked: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  dispatch: Function;
}
