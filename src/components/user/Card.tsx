import { Text } from "./Text";
import { Container } from "./Container";
import { MyButton } from "./MyButton";
import { Element, useNode } from "@craftjs/core";

interface CardProps {
  background: string;
  padding?: number;
}

export const CardTop = ({ children }: { children: React.ReactNode }) => {
  const {
    connectors: { connect },
  } = useNode();
  return (
    <div ref={connect} className="text-only">
      {children}
    </div>
  );
};

CardTop.craft = {
  rules: {
    // Only accept Text
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === Text,
      ),
  },
};

export const CardBottom = ({ children }: { children: React.ReactNode }) => {
  const {
    connectors: { connect },
  } = useNode();
  return <div ref={connect}>{children}</div>;
};

CardBottom.craft = {
  rules: {
    // Only accept Buttons
    canMoveIn: (incomingNodes: any) =>
      incomingNodes.every(
        (incomingNode: any) => incomingNode.data.type === MyButton,
      ),
  },
};

export const Card = ({ background, padding = 20 }: CardProps) => {
  return (
    <Container background={background} padding={padding}>
      <Element is={CardTop} id="text" canvas>
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </Element>
      <Element is={CardBottom} id="buttons" canvas>
        <MyButton label="Click me" />
      </Element>
    </Container>
  );
};
