import { useEffect, useState } from "react";
import { IUsersListItem } from "../models";
import { fetchingUsersUrl } from "../globals";

export const useApp = () => {
  const [users, setUsers] = useState<IUsersListItem[]>([]);
  const [clickedUserInfo, setClickedUserInfo] = useState<IUsersListItem | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleListItemClick = (
    info: IUsersListItem
  ) => {

    setClickedUserInfo(info);
    setSelectedItem(info.id);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(fetchingUsersUrl);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const usersList = await response.json();
        setUsers(usersList);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return [{users, selectedItem, clickedUserInfo, isLoading, setIsLoading, handleListItemClick}]
};
