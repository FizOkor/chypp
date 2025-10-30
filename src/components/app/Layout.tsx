import MenuPanel from "./MenuPanel";
import ContentPanel from "./ContentPanel";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MenuPanelProvider } from "@/context/MenuPanelContext";

export default function Layout() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/chats");
  }, []);
  return (
    <div className="flex flex-wrap h-screen w-screen overflow-hidden bg-sidebar-primary text-foreground">
      <MenuPanelProvider>
        {/* Menu */}
        <div className="flex basis-full">
          <MenuPanel className="w-fit" />

          {/* Content Panel*/}
          <ContentPanel className="flex-1">
            <Outlet />
          </ContentPanel>
        </div>
      </MenuPanelProvider>
    </div>
  );
}
