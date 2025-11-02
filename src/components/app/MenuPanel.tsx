import React, {useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import { menuItems } from "@/config/menuItems";
import { useUIStore } from "@/store/uiStore";
// import { useMenuPanel } from "@/context/MenuPanelContext";

interface MenuProps {
  className?: string;
}

const MenuPanel: React.FC<MenuProps> = ({ className }) => {
  const {currentView, setCurrentView} = useUIStore();
  // const { menuPanelRef } = useMenuPanel();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setWidthVar = () => {
      if (ref.current) {
        const width: number | null = ref.current.offsetWidth;
        document.documentElement.style.setProperty("--menu-width", `${width}px`);
      }
    };

    setWidthVar();
    window.addEventListener("resize", setWidthVar);
    return () => window.removeEventListener("resize", setWidthVar);
  }, []);

  return (
    <nav
      ref={ref}
      className={`${className} bg-sidebar-foreground flex flex-col justify-start lg:z-20 gap-5 pt-10`}
    >
      {menuItems.map(({ id, path, icon: Icon }) => (
        <Link
          key={id}
          to={path}
          className={`${
            currentView === id
              ? "bg-sidebar-foreground text-primary-foreground"
              : "hover:bg-muted"
          }bg-transparent rounded-xl m-2 p-2 hover:bg-sidebar-foreground transition duration-300`}
          onClick={() => setCurrentView(id)}
        >
          <Icon className="text-secondary" />
        </Link>
      ))}
    </nav>
  );
};

export default MenuPanel;
