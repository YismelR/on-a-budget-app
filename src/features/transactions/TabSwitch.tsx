import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function TabSwitch() {
  return (
    <Tabs defaultValue="account" className="">
      <TabsList>
        <TabsTrigger value="account">Income</TabsTrigger>
        <TabsTrigger value="password">Expenses</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
}
