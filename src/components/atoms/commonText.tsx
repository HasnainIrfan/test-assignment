import React from "react";

// Types
import { TextProps } from "../../types/textTypes";

function Text({
  children,
  containerTag,
  className,
  onClick,
  style,
}: TextProps) {
  const Container = containerTag || "h3";
  return (
    <Container className={`${className}`} onClick={onClick} style={style}>
      {children}
    </Container>
  );
}

export default Text;
