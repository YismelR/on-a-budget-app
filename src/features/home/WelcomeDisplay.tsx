import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avatar from "@/assets/icons/avatar.png";
import setting from "@/assets/icons/settings-1.svg";
export default function WelcomeDisplay() {
  return (
    <>
      <div className="flex place-items-center gap-3">
        <Avatar>
          <AvatarImage src={avatar} alt="avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-xs text-[#A1B3C8] font-medium">Welcome!</p>
          <h1 className="font-semibold">John Doe</h1>
        </div>
      </div>
      <img src={setting} alt="setting" className="bg-white p-2 rounded-xl" />
    </>
  );
}
