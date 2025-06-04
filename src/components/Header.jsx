import React from 'react';
import Button from './Button';
import SearchBar from './SearchBar';
import Profile from './Profile';
import useAuthStore from '../store/authStore';

const Header = () => {
  const currentUser = useAuthStore((state) => state.currentUser);

  return (
    <div className="flex items-start justify-between  px-6">
      <SearchBar />
      <div className="flex gap-2 items-center">
        {currentUser ? (
          <Profile />
        ) : (
          <>
            <Button text="Login" size="md" variant="link" path="/login" />
            <Button text="Sign Up" size="md" variant="primary" path="/signup" />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
