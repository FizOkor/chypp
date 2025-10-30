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
    <div className={`text-popover-foreground overflow-y-auto`}>
      <div className="flex flex-col  p-2 lg:p-4">
        <div className="flex items-center justify-start opacity-100 lg:opacity-0 lg:hidden transition duration-400 ease-in-out delay-200">
          <button
            onClick={triggerBtnClick}
            className="transition duration-400 ease-in-out delay-200"
          >
            <ArrowLeft className="transition duration-400 ease-in-out delay-200" />
          </button>
        </div>

        <div className="flex flex-col flex-1 items-center relative w-full">
          <div className="flex-1 overflow-y-auto p-4 w-full">
            
          </div>
          
          <div className="fixed bottom-0 bg-white flex p-2 mb-4 rounded-xl">
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
