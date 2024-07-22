import { Text } from "./Text";
import { Container } from "./Container";
import { Button } from "../ui/button";
import { MyButton } from "./MyButton";

interface CardProps {
  background: string;
  padding?: number;
}

export const Card = ({ background, padding = 20 }: CardProps) => {
  return (
    <Container background={background} padding={padding}>
      <div className="text-only pb-2 border-b">
        <Text text="Title" fontSize={20} />
        <Text text="Subtitle" fontSize={15} />
      </div>
      <div className="buttons-only pt-2">
        <MyButton label="Click me" />
      </div>
    </Container>
  );
};
