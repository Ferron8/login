import React from 'react';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {
    const onSignInFacebook = () => {
        console.warn("onSignInFacebook");
      };
    
      const onSignInGoogle = () => {
        console.warn("onSignInGoogle");
      };
    
      const onSignInApple = () => {
        console.warn("OnSignInApple");
      };

  return (
    <>
      <CustomButton
          text="Sign with FaceBook"
          onPress={onSignInFacebook}
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          text="Sign with Google"
          onPress={onSignInGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          text="Sign with Apple"
          onPress={onSignInApple}
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
    </>
  )
}

export default SocialSignInButtons