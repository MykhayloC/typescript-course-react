import React from "react";
import usersData from "../users-data";
import { TUser } from "../users-data";

interface IUserProps {
  data: TUser;
  onDelete: (user: TUser) => void;
  onMoveUp: (user: TUser) => void;
  onMoveDown: (user: TUser) => void;
}

const User = (props: IUserProps) => {
  const { data, onDelete, onMoveUp, onMoveDown } = props;

  // (+)TODO: add delete button to each of the user 
  // (+)TODO: implement logic to delete user 

  const handleDeleteUser = () => {    
    onDelete(data);
  }

  // (+)TODO: add a Like button to each of the user 
  // (+)TODO: add a state to keep liked state - is user liked or not (true/false) - useState, default value false 
  const [liked, setLiked] = React.useState(false);

  // (+)TODO: implement logic to like user - click on the like button should change state of the user (liked/not liked
  // (+)TODO: display hart icon if user is liked (💝) 
  const handleLike = () => {
    setLiked(!liked);
  }

  const handleMoveUpUser = () => {
    onMoveUp(data);
  }
  
  const handleMoveDownUser = () => {
    onMoveDown(data);
  }

  return (
    <li>
      {liked && <i>💝</i>}
      <span>
        {data.firstName} {data.lastName}
      </span>
      <button onClick={handleDeleteUser}>Delete</button>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleMoveUpUser}>Move Up</button>
      <button onClick={handleMoveDownUser}>Move Down</button>
    </li>
  );
};

export function Users() {
  const [users, setUsers] = React.useState<TUser[]>(usersData);


  const handleDelete = (user: TUser) => {
    // (+)TODO: implement function to delete user    
    // (+)TODO: create new list of users without deleted user
    const newListOfUsers = users.filter(item => (item.firstName !== user.firstName && item.lastName !== user.lastName));
    // (+)TODO: call setUsers with new list of users
    setUsers(newListOfUsers);
  };

  // (+)TODO: pass handleDelete to User component
  // (+)TODO: Add "Move Up" and "Move Down" buttons to each of the user
  // (+)TODO: Implement functions to move user up/down the list
  const handleMoveUp = (user: TUser) => {
    const indexOfUser = users.indexOf(user);
    const newListOfUsersWithmoveUp: TUser[] = JSON.parse(JSON.stringify(users));
    if (indexOfUser > 0) { 
      [newListOfUsersWithmoveUp[indexOfUser], newListOfUsersWithmoveUp[indexOfUser - 1]] = [newListOfUsersWithmoveUp[indexOfUser - 1], newListOfUsersWithmoveUp[indexOfUser]];
    }
    setUsers(newListOfUsersWithmoveUp);
    console.log(usersData); // checking order of elements in the original list of users
  }

  const handleMoveDown = (user: TUser) => {
    const indexOfUser = users.indexOf(user);
    const newListOfUsersWithmoveDown: TUser[] = JSON.parse(JSON.stringify(users));
    if (indexOfUser < 29) { 
      [newListOfUsersWithmoveDown[indexOfUser], newListOfUsersWithmoveDown[indexOfUser + 1]] = [newListOfUsersWithmoveDown[indexOfUser + 1], newListOfUsersWithmoveDown[indexOfUser]];
    }
    setUsers(newListOfUsersWithmoveDown);
    console.log(usersData); // checking order of elements in the original list of users
  }
  // (+)TODO: Make sure you create new list of users, do not mutate existing list
  // (+)TODO: Call setUsers with new list of users
  // (+)TODO: Pass handleMoveUp and handleMoveDown to User component as props

  return (
    <ul>
      {users.map((user) => (
        <User data={user} key={user.id} onDelete={handleDelete} onMoveUp={handleMoveUp} onMoveDown={handleMoveDown}/>
      ))}
    </ul>
  );
}

export default Users;
