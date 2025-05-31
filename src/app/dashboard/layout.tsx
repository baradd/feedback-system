// app/dashboard/layout.tsx
import { ReactNode } from 'react';
import { SideNav } from '../components/SideNav';
import type { ActiveUserData } from '@/types/activeUserData';

interface ILayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: ILayoutProps) {
  const activeUser: ActiveUserData = {
    id: '',
    lastname: '',
    firstname: '',
  };

  return (
    <>
      <SideNav menuItems={[]} activeUser={activeUser} />
      {children}
    </>
  );
}
