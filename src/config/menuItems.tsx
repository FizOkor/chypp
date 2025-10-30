import { MessageCircle, Settings } from "lucide-react";

export const menuItems = [
  { id: "chats", label: "Chats", path: "/chats", icon: MessageCircle },
  { id: "settings", label: "Settings", path: "/settings", icon: Settings },
//   { id: "profile", label: "Profile", path: "/profile", icon: User },
] as const;