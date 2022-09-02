import React, {useEffect} from "react";
import ProfileHeader from "./ProfileHeader";

const ProfileFriends = ({setOpenMenu, openMenu, user}) => {

    const Friend = ({name, id}) => {
        return (
            <li className="content-nav-item">
                <a href={`/profile/${id}`}><span className='icon-button'>😁</span></a>
                <p>{name}</p>
            </li>
        )
    }

    return (
        <main className='profile-content'>
            <ProfileHeader setOpenMenu={setOpenMenu} openMenu={openMenu} user={user}/>
            <div className="profile-main">
                <ul className="contacts-list">
                    {user.friends.map((data) => {
                        return (
                            <Friend name={`${data.firstname} ${data.surname}`} id={data._id} key={data._id}/>
                        )
                    })}
                </ul>
            </div>
        </main>
    )
}

export default ProfileFriends;