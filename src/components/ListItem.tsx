import { useContext } from "react";
import { IContext, IUsersListItem } from "../models";
import { AppContext } from "./Context/AppContext";

export function ListItem(props: IUsersListItem) {
  const context = useContext<IContext>(AppContext as React.Context<IContext>);
  const { handleListItemClick } = context;

  const { id, className } = props;

  return (
    <li
      className={className}
      data-id={id}
      onClick={() => handleListItemClick(props)}
    >
      {props.name}
    </li>
  );
}
