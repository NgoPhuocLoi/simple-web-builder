import { useNode } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import { Slider } from "../ui/slider";
import { AlignVerticalDistributeEndIcon } from "lucide-react";

interface ITextProps {
  text: string;
  fontSize: number;
}

export const TextSetting = () => {
  const {
    actions: { setProp },
    fontSize,
  } = useNode((node) => {
    return {
      fontSize: node.data.props.fontSize,
    };
  });

  return (
    <Slider
      onValueChange={(value) => {
        setProp((props) => (props.fontSize = value[0]));
      }}
      defaultValue={[fontSize]}
      max={100}
      step={1}
    />
  );
};

export const Text = ({ text, fontSize }: ITextProps) => {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  } = useNode((node) => {
    return {
      selected: node.events.selected,
    };
  });
  return (
    <div ref={(ref) => connect(drag(ref!))}>
      <ContentEditable
        disabled={!selected}
        html={text}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")),
          )
        }
        tagName="p"
        style={{ fontSize: `${fontSize}px` }}
      />
    </div>
  );
};

Text.craft = {
  rules: {
    canDrag: (node: any) => node.data.props.text != "Drag",
  },
  related: {
    settings: TextSetting,
  },
};
