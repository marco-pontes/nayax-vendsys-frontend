import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";

export const AssetSyncTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sync</CardTitle>
        <CardDescription>
          Change your password here. After saving, you&apos;ll be logged out.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="tabs-demo-current">Current password</Label>
          <Input id="tabs-demo-current" type="password" />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="tabs-demo-new">New password</Label>
          <Input id="tabs-demo-new" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save password</Button>
      </CardFooter>
    </Card>
  );
};
