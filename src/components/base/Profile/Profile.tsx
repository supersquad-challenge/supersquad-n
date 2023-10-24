import { AuthContext } from '@/context/auth'
import React, { useContext } from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi2'
import Image from 'next/image'

type Props = {
  color: string;
  size: number
}

const Profile = ({ color, size }: Props) => {
  const { userProfile } = useContext(AuthContext)
  return (
    <>
      {userProfile ? (
        <Image
          src={userProfile}  
          alt='user'
          width={size}
          height={size}      
        />
      ) : (
        <HiOutlineUserCircle
          size={size}
          color={color}
        />
      )}
    </>
  )
}

export default Profile