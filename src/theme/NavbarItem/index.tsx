import React from 'react';
import NavbarItem from '@theme-original/NavbarItem';
import AuthNavbarItem from '@site/src/components/AuthNavbarItem'; // Use aliased import

export default function NavbarItemWrapper(props) {
  if (props.type === 'custom-auth-item') {
    return <AuthNavbarItem {...props} />;
  }
  return <NavbarItem {...props} />;
}
