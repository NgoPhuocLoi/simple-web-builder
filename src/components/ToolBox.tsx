// components/Toolbox.js

import { Element, useEditor } from "@craftjs/core";
import { Button } from "./ui/button";
import { MyButton } from "./user/MyButton";
import { Text } from "./user/Text";
import { Container } from "./user/Container";
import { Card } from "./user/Card";

export const Toolbox = () => {
  const {
    connectors: { create },
  } = useEditor();
  return (
    <div className="p-2">
      <h4>Drag to add</h4>
      <div className="flex flex-col gap-4">
        <div ref={(ref) => create(ref!, <MyButton label="New button" />)}>
          Button
        </div>
        <div
          ref={(ref) => create(ref!, <Text text="New Text" fontSize={20} />)}
        >
          Text
        </div>
        <div
          ref={(ref) =>
            create(
              ref!,
              <Element is={Container} canvas background="#ccc"></Element>,
            )
          }
        >
          Container
        </div>
        <div ref={(ref) => create(ref!, <Card background="#fff" />)}>Card</div>
      </div>
    </div>
  );
};
