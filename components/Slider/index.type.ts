interface DataProps {
  src: string;
  title: string;
  sub?: string;
  attend?: string;
}

export interface SliderProps {
  data: DataProps[];
  labelAction: string;
  maxSlide: number;
  hasContent: boolean;
  spaceBetween?: number;
}
