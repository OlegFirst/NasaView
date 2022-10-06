type Caption = string | number;

export interface SliderItem {
  src: string,
  caption: Caption
};

export type SliderDirection = 'left' | 'right';

enum SliderItemEvent {
  hover,
  active
};