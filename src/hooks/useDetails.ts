import { useContext, useEffect, useState } from "react";
import { IContext, IUserDetailedInfo, IUsersListItem } from "../models";
import { fetchingUserUrl } from "../globals";
import { AppContext } from "../components/Context/AppContext";

export const useDetails = (info: IUsersListItem | null) => {
    const [currentUser, setCurrentUser] = useState<IUserDetailedInfo | null>(null);
    const [avatarImg, setAvatarImg] = useState("");
    
    const context = useContext<IContext>(AppContext as React.Context<IContext>);
    const { setIsLoading } = context;
    
    useEffect(() => {
      const controller = new AbortController();
      const signal = controller.signal;
      const fetchOnClickedUserDetails = async () => {

        if (!info) return;

        setIsLoading(true);
        const currentUrl = fetchingUserUrl(info.id);
        try {
          const response = await fetch(currentUrl, { signal });
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          const userInfo = await response.json();

          setCurrentUser(userInfo);
          setAvatarImg(userInfo.avatar);

        } catch (error) {
          if (!signal?.aborted) {
            console.error(error);
          }
        } finally {
          setIsLoading(false);
        }
      };
    
      fetchOnClickedUserDetails();
    
      return () => {
        controller.abort();
        setAvatarImg("");
      };
    }, [info, setIsLoading]);

    return [{currentUser, avatarImg}]
}
