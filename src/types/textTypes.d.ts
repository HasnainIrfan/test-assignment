export type TextProps = {
  children: React.ReactNode;
  containerTag: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};
