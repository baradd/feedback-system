import { ReactNode } from 'react';
import { SideNav } from '../components/SideNav';
import type { ActiveUserData } from '@/types/activeUserData';

interface ILayoutProps {
  children: ReactNode;
}

function layout(props: ILayoutProps) {
  //cal activeUserGetData
  const activeUser: ActiveUserData = {
    id: '',
    lastname: '',
    firstname: '',
  };
  const { children } = props;
  return (
    <>
      <SideNav menuItems={[]} activeUser={activeUser}></SideNav>
    </>
  );
}
