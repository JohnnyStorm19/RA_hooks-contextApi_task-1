export interface IUsersListItem {
  id: number;
  name: string;
  className: string;
}

export interface IUserDetailedInfo extends IUsersListItem {
  avatar: string;
  details: {
    city: string;
    company: string;
    position: string;
  };
}

export interface IContext {
  handleListItemClick: (
    info: IUsersListItem
  ) => void;
  users: IUsersListItem[];
  selectedItem: number | null;
  setIsLoading:(isLoading: boolean)=> void;
}
