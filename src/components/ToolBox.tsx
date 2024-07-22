// components/Toolbox.js

import { Button } from "./ui/button";

export const Toolbox = () => {
  return (
    <div className="p-2">
      <h4>Drag to add</h4>
      <div className="flex flex-col gap-4">
        <Button>Button</Button>
        <Button>Text</Button>
        <Button>Container</Button>
        <Button>Card</Button>
      </div>
    </div>
  );
};
