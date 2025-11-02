import { Home, User, Code, FolderKanban, GraduationCap, Mail } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarFooter } from "@/components/ui/sidebar";
import ProfileCard from "./ProfileCard";

// 📸 YOUR PROFILE PICTURES - Using @assets alias like your project images
// Option 1: NAVPIC.jpg (default)
import profileImg from '@assets/generated_images/profile.jpg';
// Option 2: profile.jpg (uncomment line below and comment line above)
// import profileImg from '@assets/generated_images/profile.jpg';

const menuItems = [
  { title: "Home", icon: Home, url: "#home" },
  { title: "About", icon: User, url: "#about" },
  { title: "Skills", icon: Code, url: "#skills" },
  { title: "Portfolio", icon: FolderKanban, url: "#portfolio" },
  { title: "Resume", icon: GraduationCap, url: "#resume" },
  { title: "Contact", icon: Mail, url: "#contact" },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r-0 bg-slate-800 dark:bg-slate-900">
      <ProfileCard
        name="Navkaran Singh"
        title="Data Analyst & Engineer"
        imageSrc={profileImg}
        githubUrl="https://github.com/data-nav"
        linkedinUrl="https://www.linkedin.com/in/nav-fr/"
        tableauUrl="https://public.tableau.com/app/profile/navkaran.singh6648/vizzes"
      />
      
      <SidebarContent className="px-3">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className="text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200 rounded-lg px-4 py-3"
                  >
                    <a href={item.url} data-testid={`link-${item.title.toLowerCase()}`}>
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4 text-xs text-center text-slate-400 border-t border-slate-700">
        © 2025 Navkaran Singh
      </SidebarFooter>
    </Sidebar>
  );
}
