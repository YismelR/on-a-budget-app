import plusSign from "@/assets/icons/plus.svg";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { NavLink } from "react-router-dom";

export default function AddNewEntryButton() {
  return (
    <Popover>
      <PopoverTrigger>
        <div className=" absolute bottom-8 left-40 p-3 bg-gradient-to-br from-[#243B33] to-[#7C8C7C] rounded-full shadow-plusSignShadow cursor-pointer">
          <img src={plusSign} alt="plus sign" className=" size-7 " />
        </div>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-4 absolute left-10 bottom-4">
        <NavLink to="/income">
          <Button className="bg-gradient-to-br from-[#243B33] to-[#7C8C7C] hover:from-[#7C8C7C] hover:to-[#D8D3C0] w-full">
            Income
          </Button>
        </NavLink>
        <NavLink to="/expenses">
          <Button className="bg-gradient-to-br from-[#243B33] to-[#7C8C7C] hover:from-[#7C8C7C] hover:to-[#D8D3C0] w-full">
            Expenses
          </Button>
        </NavLink>
      </PopoverContent>
    </Popover>
  );
}
