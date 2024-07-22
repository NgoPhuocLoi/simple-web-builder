import { useNode } from "@craftjs/core";

interface IContainerProps {
  background: string;
  padding?: number;
  children: React.ReactNode;
}

export const Container = ({
  background,
  padding = 16,
  children,
}: IContainerProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <div
      ref={(ref) => connect(drag(ref!))}
      className="border rounded-md shadow"
      style={{ margin: "5px 0", background, padding: `${padding}px` }}
    >
      {children}
    </div>
  );
};
