import { Textarea } from "@/components/ui/textarea.tsx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import SimpleSyncFusionTable from "@/components/SimpleSyncFusionTable.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { AppForm } from "@/components/AppForm.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";

export const MarketInfoTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>
          Make changes to your account here. Click save when you&apos;re done.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="tabs-demo-name">Name</Label>
          <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="tabs-demo-username">Username</Label>
          <Input id="tabs-demo-username" defaultValue="@peduarte" />
        </div>
        <Button>My custom button</Button>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
          <div className="flex items-start gap-3">
            <Label htmlFor="terms-2">Accept terms and conditions</Label>
            <Checkbox id="terms-2" defaultChecked />
          </div>
          <div className="flex items-start gap-3">
            <Label htmlFor="toggle">Enable notifications</Label>
            <Checkbox id="toggle" disabled />
          </div>
        </div>

        <Textarea></Textarea>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <AppForm />
        <SimpleSyncFusionTable />
      </CardContent>
      <CardFooter>
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  );
};
