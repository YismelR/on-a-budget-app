import { Input } from "@/components/ui/input";
import close from "@/assets/icons/close.svg";
import ExpensesSelection from "./ExpensesSelection";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

export default function Expenses() {
  return (
    <div className="p-6 h-full">
      <div className="flex justify-end">
        <NavLink to="/">
          <img src={close} alt="close" />
        </NavLink>
      </div>
      <div className="flex flex-col h-full place-content-center justify-evenly">
        <h1 className="text-2xl font-semibold flex justify-center">
          Add Expenses
        </h1>
        <Input
          type="text"
          placeholder="$ 0"
          className="h-20 rounded-full w-72 place-self-center placeholder:text-3xl placeholder:text-center placeholder:text-[#7C8C7C] text-2xl text-center"
        />
        <ExpensesSelection />
        <Button className="bg-gradient-to-br from-[#243B33] to-[#7C8C7C] hover:from-[#7C8C7C] hover:to-[#D8D3C0]">
          Save
        </Button>
      </div>
    </div>
  );
}
