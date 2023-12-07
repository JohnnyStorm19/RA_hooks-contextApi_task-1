import "./App.css";
import { List } from "./components/List";
import { IUsersListItem } from "./models";
import { Details } from "./components/Details";
import { Loader } from "./components/Loader";
import { useApp } from "./hooks/useApp";
import { AppContext } from "./components/Context/AppContext";

function App() {
  const [
    {
      users,
      isLoading,
      clickedUserInfo,
      selectedItem,
      setIsLoading,
      handleListItemClick
    },
  ] = useApp();

  return (
    <>
      {isLoading && <Loader />}
      <AppContext.Provider value={{ handleListItemClick, users, setIsLoading, selectedItem }}>
        <List />
        {selectedItem && <Details info={clickedUserInfo as IUsersListItem} />}
      </AppContext.Provider>
    </>
  );
}

export default App;
