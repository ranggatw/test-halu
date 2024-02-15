interface DataProps {
  src: string;
  title?: string;
}

export interface MarqueeProps {
  data: DataProps[];
  hasText: boolean;
}
