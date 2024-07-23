import { SettingsPanel } from "./components/SettingsPanel";
import { Toolbox } from "./components/ToolBox";
import { Topbar } from "./components/Topbar";
import { Card, CardBottom, CardTop } from "./components/user/Card";

import { Editor, Frame, Element } from "@craftjs/core";
import { Text } from "./components/user/Text";
import { Container } from "./components/user/Container";
import { MyButton } from "./components/user/MyButton";
import { useEffect, useState } from "react";
import lz from "lz-string";

function App() {
  const [json, setJson] = useState(null);

  useEffect(() => {
    const compressed = localStorage.getItem("craftjs");
    const decompressed = lz.decompressFromBase64(compressed);
    setJson(decompressed);
    console.log({ json });
  }, [json]);

  return (
    <div className="p-4 flex items-center flex-col">
      <h2>JSON</h2>
      <Editor
        resolver={{ Card, MyButton, Text, Container, CardTop, CardBottom }}
      >
        <Topbar />

        <div className="grid grid-cols-3 gap-4 w-full">
          <div className="col-span-2 border p-4">
            {json && (
              <Frame json={json!}>
                <Element is={Container} background="#fff" canvas>
                  {/* <Card background="#fff" />
                <Text text="Draggable" fontSize={20} />
                <Element is={Container} background="#ccc" canvas>
                  <Text text="Hello hehe" fontSize={20} />
                </Element>
                <MyButton label="Drag me" /> */}
                </Element>
              </Frame>
            )}
          </div>
          <div className="">
            <Toolbox />
            <SettingsPanel />
          </div>
        </div>
      </Editor>
    </div>
  );
}

export default App;
