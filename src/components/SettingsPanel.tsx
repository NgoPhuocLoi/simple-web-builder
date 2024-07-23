import { useEditor } from "@craftjs/core";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import React from "react";

export const SettingsPanel = () => {
  const { selected, actions } = useEditor((state, query) => {
    const [currentSelectedId] = state.events.selected;
    const selectedElement = state.nodes[currentSelectedId];
    if (!selectedElement)
      return {
        selected: null,
      };
    return {
      selected: {
        id: currentSelectedId,
        name: selectedElement.data.name,
        settings: selectedElement.related && selectedElement.related.settings,
        isDeletable: query.node(currentSelectedId).isDeletable(),
      },
    };
  });
  return (
    <div className="p-2 mt-2 flex flex-col gap-4">
      <div className="flex justify-between">
        <p>Selected {selected?.id}</p>
        <Badge>Selected</Badge>
      </div>
      {selected?.settings && React.createElement(selected.settings)}

      {selected?.isDeletable && (
        <Button
          onClick={() => {
            actions.delete(selected.id);
          }}
        >
          Delete
        </Button>
      )}
    </div>
  );
};
