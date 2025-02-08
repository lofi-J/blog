import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { items } from '@/admin/config/sidebar-config';
import { LogOut } from 'lucide-react';
import { useAuth } from '@/admin/context/auth-guard';

export function AdminSidebar() {
  const { logout } = useAuth();
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className='flex justify-between'>
            <SidebarGroupLabel>Jera's blog Admin</SidebarGroupLabel>
            <SidebarTrigger />
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <div className='flex justify-between items-center h-10 cursor-pointer' onClick={logout}>
            <span className='font-small font-semibold pl-1'>Log out</span>
            <LogOut size={18} />
          </div>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
