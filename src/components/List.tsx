import { useContext } from 'react';
import { ListItem } from "./ListItem";
import { IContext } from '../models';
import { AppContext } from './Context/AppContext';

export function List() {
    const context = useContext<IContext>(AppContext as React.Context<IContext>);
    const { users: currentUsersList, selectedItem } = context;

    return (
        <ul className='users-list'>
            {currentUsersList.map(userInfo => {
                return <ListItem 
                            key={userInfo.id} 
                            id={userInfo.id}
                            name={userInfo.name} 
                            className={selectedItem === userInfo.id ? 'list-item clicked' : 'list-item'} 
                        />
            })}
        </ul>
    )
}