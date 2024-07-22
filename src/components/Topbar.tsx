import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export const Topbar = () => {
  return (
    <div className="p-1 mt-3 mb-1 flex justify-between w-full">
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>

      <Button>Serialize to JSON</Button>
    </div>
  );
};
