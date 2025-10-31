import { Home, Briefcase, GraduationCap, FolderKanban, Mail, Code } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter } from "@/components/ui/sidebar";
import ProfileCard from "./ProfileCard";
import profileImg from '@assets/generated_images/Professional_portfolio_headshot_7534f525.png';

const menuItems = [
  { title: "Home", icon: Home, url: "#home" },
  { title: "About", icon: Home, url: "#about" },
  { title: "Skills", icon: Code, url: "#skills" },
  { title: "Portfolio", icon: FolderKanban, url: "#portfolio" },
  { title: "Resume", icon: GraduationCap, url: "#resume" },
  { title: "Contact", icon: Mail, url: "#contact" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <ProfileCard
        name="Navkaran Singh"
        title="Data Analyst & Engineer"
        imageSrc={profileImg}
        email="navkarancad@gmail.com"
        phone="+1 (514) 804-1045"
        location="Montréal, Canada"
        githubUrl="https://github.com/data-nav"
        linkedinUrl="https://www.linkedin.com/in/nav-fr/"
        tableauUrl="https://public.tableau.com/app/profile/navkaran.singh6648/vizzes"
      />
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} data-testid={`link-${item.title.toLowerCase()}`}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4 text-xs text-center text-muted-foreground border-t">
        © 2025 Navkaran Singh
      </SidebarFooter>
    </Sidebar>
  );
}
