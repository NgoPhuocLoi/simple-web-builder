import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";

export const SettingsPanel = () => {
  return (
    <div className="p-2 mt-2 flex flex-col gap-4">
      <div className="flex justify-between">
        <p>Selected</p>
        <Badge>Selected</Badge>
      </div>

      <div>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>

      <Button>Delete</Button>
    </div>
  );
};
