// app/dashboard/layout.tsx
import { ReactNode } from 'react';
import { SideNav } from '@/components/SideNav';
import type { ActiveUserData } from '@/types/activeUserData';
import { apiFetch } from '@/utils/api-fetch';
import { MenuItem } from '@/types/menuItem';
import { AiFillDashboard, AiFillBook, AiFillHome } from 'react-icons/ai';

interface IDashboardLayoutProps {
  children: ReactNode;
  menuItems: [];
  activeUser: any;
}

export default async function DashboardLayout({
  children,
}: IDashboardLayoutProps) {
  let activeUser: ActiveUserData;
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
  activeUser = await apiFetch({
    method: 'GET',
    path: '/user/active',
    cache: 'force-cache',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAyZGNhNWQyLTQ2OWMtNGRkOS1iM2ExLTdmMmQyMjA2YmQ1ZiIsImZpcnN0bmFtZSI6ImRldiIsImxhc3RuYW1lIjoiZGV2IiwidG9rZW5JZCI6ImZkNGY0MjE5LTM5NDktNDU0Ny04OWFhLTNkYTAzZjY4NDNiMCIsInJlZnJlc2hUb2tlbklkIjoiNTdhZWU1OTktNTJmZC00MDdlLWFkZmMtYmY3MDUyZTZiZmE1IiwiaWF0IjoxNzUxMTk3OTk3LCJleHAiOjE3NTE1NTc5OTcsImF1ZCI6ImZlZWRiYWNrIiwiaXNzIjoiZmVlZGJhY2sifQ.rjTwGV0C0EJZWyFI_jQ1rcSkskmfTlBYD5KFcI8xK_o',
  });

  const activeUserFullData = await apiFetch({
    method: 'GET',
    path: `/user/${activeUser.id}`,
    cache: 'default',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAyZGNhNWQyLTQ2OWMtNGRkOS1iM2ExLTdmMmQyMjA2YmQ1ZiIsImZpcnN0bmFtZSI6ImRldiIsImxhc3RuYW1lIjoiZGV2IiwidG9rZW5JZCI6ImZkNGY0MjE5LTM5NDktNDU0Ny04OWFhLTNkYTAzZjY4NDNiMCIsInJlZnJlc2hUb2tlbklkIjoiNTdhZWU1OTktNTJmZC00MDdlLWFkZmMtYmY3MDUyZTZiZmE1IiwiaWF0IjoxNzUxMTk3OTk3LCJleHAiOjE3NTE1NTc5OTcsImF1ZCI6ImZlZWRiYWNrIiwiaXNzIjoiZmVlZGJhY2sifQ.rjTwGV0C0EJZWyFI_jQ1rcSkskmfTlBYD5KFcI8xK_o',
  });

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
