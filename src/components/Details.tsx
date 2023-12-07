import { useDetails } from "../hooks/useDetails";
import { IUsersListItem } from "../models";

export function Details({ info }: { info: IUsersListItem }) {
  const [{ avatarImg, currentUser }] = useDetails(info);

  return (
    <div className="details-card">
      <div className="avatar-container">
        <img src={avatarImg} />
      </div>
      <ul className="card-info">
        <li className="info-item user-name">
          <h3>{currentUser?.name}</h3>
        </li>
        <li className="info-item user-city">{currentUser?.details.city}</li>
        <li className="info-item user-company">
          {currentUser?.details.company}
        </li>
        <li className="info-item user-position">
          {currentUser?.details.position}
        </li>
      </ul>
    </div>
  );
}
