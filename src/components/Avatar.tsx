import React, { useState } from 'react';

export interface AvatarProps {
  link?: string;
}

export const Avatar = ({ link }: AvatarProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState(link);

  const handleAvatarClick = () => {
    setIsPopupOpen(true);
  };

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarSrc(reader.result as string);
        //upload file on server

        reader.readAsDataURL(file);
      };
    }
  };
};
