type Caption = string | number;

export interface SliderItem {
  src: string,
  caption: Caption
};

enum SliderItemEvent {
  hover,
  active
};