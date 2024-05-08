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
  totalPledged: number;
  totalBackers: number;
  daysLeft: number;
  pledgeError: boolean;
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
  totalPledged: number;
  totalBackers: number;
  daysLeft: number;
  pledgeError: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  dispatch: Function;
}

export interface IPayload {
  id: string;
  pledgeAmount: number;
}
