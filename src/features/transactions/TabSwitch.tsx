import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IncomeDisplay from "./IncomeDisplay";
import ExpensesDisplay from "./ExpensesDisplay";
export default function TabSwitch() {
  return (
    <Tabs defaultValue="income" className="">
      <TabsList>
        <TabsTrigger value="income">Income</TabsTrigger>
        <TabsTrigger value="expenses">Expenses</TabsTrigger>
      </TabsList>
      <TabsContent value="income">
        <IncomeDisplay />
      </TabsContent>
      <TabsContent value="expenses">
        <ExpensesDisplay />
      </TabsContent>
    </Tabs>
  );
}
