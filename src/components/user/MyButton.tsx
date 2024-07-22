import { useNode } from "@craftjs/core";
import { Button } from "../ui/button";

export const MyButton = ({ label }: { label: string }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div ref={(ref) => connect(drag(ref!))}>
      <Button>{label}</Button>;
    </div>
  );
};
