import { useEditor } from "@craftjs/core";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import LZString from "lz-string";

export const Topbar = () => {
  const { enabled, actions, query } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  return (
    <div className="p-1 mt-3 mb-1 flex justify-between w-full">
      <div className="flex items-center space-x-2">
        <Switch
          checked={enabled}
          onCheckedChange={(value) => {
            actions.setOptions((options) => {
              options.enabled = value;
            });
          }}
          id="airplane-mode"
        />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>

      <Button
        onClick={() => {
          const compressed = LZString.compressToBase64(query.serialize());
          console.log(compressed);
          localStorage.setItem("craftjs", compressed);
        }}
      >
        Serialize to JSON
      </Button>
    </div>
  );
};
