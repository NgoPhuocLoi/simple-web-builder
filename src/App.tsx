import { SettingsPanel } from "./components/SettingsPanel";
import { Toolbox } from "./components/ToolBox";
import { Topbar } from "./components/Topbar";
import { Card, CardBottom, CardTop } from "./components/user/Card";

import { Editor, Frame, Element } from "@craftjs/core";
import { Text } from "./components/user/Text";
import { Container } from "./components/user/Container";
import { MyButton } from "./components/user/MyButton";

function App() {
  return (
    <div className="p-4 flex items-center flex-col">
      <h2>A super simple page editor</h2>
      <Topbar />
      <Editor
        resolver={{ Card, MyButton, Text, Container, CardTop, CardBottom }}
      >
        <div className="grid grid-cols-3 gap-4 w-full">
          <div className="col-span-2 border p-4">
            <Frame>
              <Element is={Container} background="#fff" canvas>
                <Card background="#fff" />
                <Text text="Draggable" fontSize={20} />
                <Element is={Container} background="#ccc" canvas>
                  <Text text="Hello hehe" fontSize={20} />
                </Element>
                <MyButton label="Drag me" />
              </Element>
            </Frame>
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
