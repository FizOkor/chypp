import { Link, Outlet, useLocation } from "react-router-dom";
import { useUIStore } from "@/store/uiStore";
import { useEffect, useState } from "react";
import ContextPanel from "@/components/app/ContentPanel";
import useWindowSize from "@/hooks/useWindowSize";
import { useMenuPanel } from "@/context/MenuPanelContext";

interface Chat {
  id: string;
  name: string;
}

const mockChats: Chat[] = [
  { id: "1", name: "Fizzo" },
  { id: "2", name: "PrePre" },
  { id: "3", name: "Afang" },
  { id: "4", name: "Soup" },
];

export default function ChatPage() {
  const location = useLocation();
  const { width } = useWindowSize();
  const isMobile = width < 1024;
  const {
    selectedItem,
    setSelectedItem,
    mobileBackBtnClicked,
    setMobileBackBtnClicked,
  } = useUIStore();
  const { menuPanelWidth } = useMenuPanel();
  const [isChatSelected, setIsChatSelected] = useState(false);

  const handleChatClick = (chat: Chat) => {
    setSelectedItem(chat);
    console.log('selectedItem:', selectedItem);
    setIsChatSelected(true);
    setMobileBackBtnClicked(false);
  };

  useEffect(() => {
    setIsChatSelected(location.pathname !== "/chats");
  }, [location.pathname]);

  useEffect(() => {
    if (mobileBackBtnClicked) {
      setIsChatSelected(false);
    }
  }, [mobileBackBtnClicked]);

  const slide = `transition-transform duration-500 ease-in-out ${
    isMobile && isChatSelected ? "-translate-x-1/2" : "translate-x-0"
  }`;

  const mobileWidthClass = isMobile
    ? `calc(200% + ${menuPanelWidth}px + ${menuPanelWidth}px)`
    : "100%";

  return (
    <div
      id="chat-page"
      className={`relative flex h-full bg-card rounded-tl-lg ${slide}`}
      style={{ width: mobileWidthClass }}
    >
      {/* The chat list panel */}
      <div
        className={`w-[50%] shrink-0 lg:w-1/3 p-4`}
        style={{
          width: isMobile ? `calc(50% - ${menuPanelWidth}px)` : undefined,
        }}
      >
        <h2 className="text-xl font-semibold mb-3 p-4">Chats</h2>
        <ul className="space-y-2">
          {mockChats.map((chat) => (
            <li key={chat.id}>
              <Link
                to={`/chats/${chat.id}`}
                onClick={() => handleChatClick(chat)}
                className={`flex flex-row justify-start items-center gap-5 p-8 rounded-xl ${
                  selectedItem?.id === chat.id
                    ? "bg-accent-foreground text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                <img className="bg-muted w-10 h-10 rounded-full" />
                {chat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* The context panel */}
      <ContextPanel
        className={`bg-input ${
          isMobile ? "" : "flex-1 lg:w-2/3"
        } overflow-y-auto noise-bg border-black border-5`}
        style={{
          width: isMobile ? `calc(50% + ${menuPanelWidth}px)` : '',
        }}
      >
        <Outlet />
      </ContextPanel>
    </div>
  );
}
