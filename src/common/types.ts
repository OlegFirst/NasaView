// Union
type Caption = string | number;

// Interface
export interface SliderItem {
  src: string,
  caption: Caption
};

// Enum
enum SliderItemEvent {
  hover,
  active
};