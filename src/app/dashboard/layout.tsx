// app/dashboard/layout.tsx
import { ReactNode } from 'react';
import { SideNav } from '@/components/SideNav';
import type { ActiveUserData } from '@/types/activeUserData';
import { apiFetch } from '@/utils/api-fetch';
import { MenuItem } from '@/types/menuItem';
import { AiFillDashboard, AiFillBook, AiFillHome } from 'react-icons/ai';
import { UserService } from '@/lib/api/user.service';

interface IDashboardLayoutProps {
  children: ReactNode;
  menuItems: [];
  activeUser: any;
}

export default async function DashboardLayout({
  children,
}: IDashboardLayoutProps) {
  let activeUser: ActiveUserData;
  const userService = new UserService();
  const menuItems: MenuItem[] = [
    {
      title: 'داشبورد',
      link: '/dashboard',
      icon: <AiFillDashboard size={20} />,
      // badge: '1',
    },
    {
      title: 'انتفادات و پیشنهادات',
      link: '/dashboard',
      icon: <AiFillBook size={20} />,
      badge: '1',
    },
    {
      title: 'شرکت ها',
      link: '/dashboard',
      icon: <AiFillHome size={20} />,
      // badge: '1',
    },
  ];
  activeUser = await userService.getActiveUser();

  const activeUserFullData: any = await userService.getUserById(activeUser.id);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 overflow-auto text-black" dir="rtl">
        {children}
      </div>
      <SideNav
        menuItems={menuItems}
        activeUser={activeUser}
        avatar={`${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/static/avatars/${activeUser.id}/${activeUserFullData.avatar}`}
      />
    </div>
  );
}
