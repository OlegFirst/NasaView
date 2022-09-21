const getSliderLeftPosition = (itemsWidth: number, index: number) => itemsWidth * index;

export const sliderInfo = (itemsWidth: number, itemsCount: number) => {
  return {
    index: 0,
    leftPosition: 0,

    moveLeft: function() {
      this.index = this.index > 0 ? this.index - 1 : this.index;
      this.leftPosition = getSliderLeftPosition(itemsWidth, this.index);
      return this.leftPosition + 'px';
    },

    moveRight: function() {
      this.index = this.index < itemsCount ? this.index + 1 : this.index;
      this.leftPosition = getSliderLeftPosition(itemsWidth, this.index);
      return this.leftPosition + 'px';
    }
  }
};