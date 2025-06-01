// app/dashboard/layout.tsx
import { ReactNode } from 'react';
import { SideNav } from '@/components/SideNav';
import type { ActiveUserData } from '@/types/activeUserData';
import { apiFetch } from '@/utils/api-fetch';

interface IDashboardLayoutProps {
  children: ReactNode;
  menuItems: [];
  activeUser: any;
}

export default async function DashboardLayout({
  children,
  menuItems,
}: IDashboardLayoutProps) {
  let activeUser: ActiveUserData;

  activeUser = await apiFetch({
    method: 'GET',
    path: '/user/active',
    cache: 'force-cache',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQyMjdlNTI3LWFkOTYtNDcyNi1iNDk1LTU4ZGY4MTk5ZDc2NSIsImZpcnN0bmFtZSI6ImJhcmFkIiwibGFzdG5hbWUiOiJUYXZhc3NvbGlhbiIsInRva2VuSWQiOiI2MjllZGNkOC1kMTcyLTQ3OWItYTAxZS1kZmZiZmQyZTVkMjUiLCJyZWZyZXNoVG9rZW5JZCI6ImViMTAwMGZjLWI2YTctNGYxNi04ZDQwLTE0ZjhhMTg0ZjdjMSIsImlhdCI6MTc0ODc3Njg1OCwiZXhwIjoxNzQ5MTM2ODU4LCJhdWQiOiJmZWVkYmFjayIsImlzcyI6ImZlZWRiYWNrIn0.Vo0JL9GYRR3cdEb40lTRjum55WG8fcee1Pciwi2iwEs',
  });

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 overflow-auto text-black" dir="rtl">
        {children}
      </div>
      <SideNav menuItems={menuItems} activeUser={activeUser} />
    </div>
  );
}
