import React, {useState} from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileMain from "./ProfileMain";

const ProfileContent = ({setOpenMenu, openMenu , user, profile, posts}) => {
    const [bio, setBio] = useState(profile.biography);
    const [dob, setDob] = useState(profile.date_of_birth);

    return (
        <main className='profile-content'>
            <ProfileHeader setOpenMenu={setOpenMenu}
                           setDob={setDob}
                           setBio={setBio}
                           openMenu={openMenu}
                           profile={profile}
                           user={user}/>
            <ProfileMain user={user}
                         dob={dob}
                         bio={bio}
                         profile={profile}
                         posts={posts}/>
        </main>
    )
}

export default ProfileContent;