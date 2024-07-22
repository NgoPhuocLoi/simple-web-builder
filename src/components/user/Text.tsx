import { useNode } from "@craftjs/core";

interface ITextProps {
  text: string;
  fontSize: number;
}

export const Text = ({ text, fontSize }: ITextProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div ref={(ref) => connect(drag(ref!))}>
      <p style={{ fontSize }}>{text}</p>
    </div>
  );
};

Text.craft = {
  rules: {
    canDrag: (node: any) => node.data.props.text != "Drag",
  },
};
