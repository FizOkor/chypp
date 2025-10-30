import { Info } from "lucide-react";

const ChatDetail = () => {

  return (
    <div
      className={`h-full flex items-center justify-center text-accent-foreground overflow-y-auto`}
    >
      <div className="flex justify-center items-center">
        <p className="flex text-2xl justify-center items-center gap-2"><Info /> Select Chat</p>
      </div>
    </div>
  );
};

export default ChatDetail;
