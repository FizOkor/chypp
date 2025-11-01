// import { useParams } from "react-router-dom";
import { ArrowLeft, SmilePlus, SendHorizonal } from "lucide-react";
import { useUIStore } from "@/store/uiStore";

const ChatDetail = () => {
  // const { id } = useParams();
  const { setMobileBackBtnClicked } = useUIStore();

  const triggerBtnClick = () => {
    setMobileBackBtnClicked(true);
  };

  return (
    <div className={`flex flex-col h-full text-popover-foreground overflow-y-auto`}>
      <div className="p-2 lg:p-4 flex flex-col flex-1">
        <div className="flex items-center p-4 justify-start opacity-100 lg:opacity-0 lg:hidden transition duration-400 ease-in-out delay-200">
          <button
            onClick={triggerBtnClick}
            className="transition duration-400 ease-in-out delay-200"
          >
            <ArrowLeft className="transition duration-400 ease-in-out delay-200" />
          </button>
        </div>

        <div className="flex flex-col flex-1 p-4 items-center relative w-full">
          <div className="flex-1 overflow-y-auto p-5 w-full">
            
          </div>
          
          <div className="bg-white flex w-full p-2 rounded-xl">
            <button className="w-fit p-2">
              <SmilePlus />
            </button>
            <input className="flex-1" />
            <button className="w-fit p-2">
              <SendHorizonal />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
