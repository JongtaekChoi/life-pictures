import { Link, LinkProps } from "expo-router";

import { ThemedText } from "./ThemedText";

export default function ThemedLink({ children, ...props }: LinkProps) {
  return (
    <Link {...props}>
      <ThemedText>{children}</ThemedText>
    </Link>
  );
}
