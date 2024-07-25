import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Income from "./Income";
import Expenses from "./Expenses";
export default function TabSwitch() {
  return (
    <Tabs defaultValue="income" className="">
      <TabsList>
        <TabsTrigger value="income">Income</TabsTrigger>
        <TabsTrigger value="expenses">Expenses</TabsTrigger>
      </TabsList>
      <TabsContent value="income">
        <Income />
      </TabsContent>
      <TabsContent value="expenses">
        <Expenses />
      </TabsContent>
    </Tabs>
  );
}
