import { Input } from "@/components/ui/input";
import close from "@/assets/icons/close.svg";
import ExpensesSelection from "./ExpensesSelection";
import { Button } from "@/components/ui/button";

export default function Expenses() {
  return (
    <div className="p-6">
      <img src={close} alt="close" />
      <h1>Add Expenses</h1>
      <Input type="text" placeholder="$ 0" />
      <ExpensesSelection />
      <Button>Save</Button>
    </div>
  );
}
