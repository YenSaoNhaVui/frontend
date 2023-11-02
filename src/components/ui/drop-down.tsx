import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: JSX.Element[];
}

export default function DropDown({ children, ...props }: Props) {
  return (
    <section {...props}>
      <ul>{children}</ul>
    </section>
  );
}
