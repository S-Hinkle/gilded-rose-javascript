// export class Item {
//   constructor(name, sellIn, quality) {
//     this.name = name;
//     this.sellIn = sellIn;
//     this.quality = quality;
//   }
// }

// export let items = [];

// items.push(new Item("+5 Dexterity Vest", 10, 20));
// items.push(new Item("Aged Brie", 2, 0));
// items.push(new Item("Elixir of the Mongoose", 5, 7));
// items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
// items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
// items.push(new Item("Conjured Mana Cake", 3, 6));

// export const updateQuality = () => {
//   for (let item of items) {
//     if (
//       item.name != "Aged Brie" &&
//       item.name != "Backstage passes to a TAFKAL80ETC concert"
//     ) {
//       if (item.quality > 0) {
//         if (item.name != "Sulfuras, Hand of Ragnaros") {
//           item.quality = item.quality - 1;
//         }
//       }
//     } else {
//       if (item.quality < 50) {
//         item.quality = item.quality + 1;
//         if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
//           if (item.sellIn < 11) {
//             if (item.quality < 50) {
//               item.quality = item.quality + 1;
//             }
//           }
//           if (item.sellIn < 6) {
//             if (item.quality < 50) {
//               item.quality = item.quality + 1;
//             }
//           }
//         }
//       }
//     }
//     if (item.name != "Sulfuras, Hand of Ragnaros") {
//       item.sellIn = item.sellIn - 1;
//     }
//     if (item.sellIn < 0) {
//       if (item.name != "Aged Brie") {
//         if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
//           if (item.quality > 0) {
//             if (item.name != "Sulfuras, Hand of Ragnaros") {
//               item.quality = item.quality - 1;
//             }
//           }
//         } else {
//           item.quality = item.quality - item.quality;
//         }
//       } else {
//         if (item.quality < 50) {
//           item.quality = item.quality + 1;
//         }
//       }
//     }
//   }
// };



export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  updateQuality() {
    if (this.name !== "Aged Brie" && this.name !== "Backstage passes to a TAFKAL80ETC concert") {
      if (this.quality > 0 && this.name !== "Sulfuras, Hand of Ragnaros") {
        this.quality -= 1;
      }
    } else {
      if (this.quality < 50) {
        this.quality += 1;
      }
    }

    if (this.name !== "Sulfuras, Hand of Ragnaros") {
      this.sellIn -= 1;
    }

    if (this.sellIn < 0) {
      if (this.name !== "Aged Brie") {
        if (this.name !== "Backstage passes to a TAFKAL80ETC concert" && this.quality > 0 && this.name !== "Sulfuras, Hand of Ragnaros") {
          this.quality -= 1;
        } else {
          this.quality = 0;
        }
      } else {
        if (this.quality < 50) {
          this.quality += 1;
        }
      }
    }
  }
}







// ================== Subclasses ================== //
export class AgedBrie extends Item {
  updateQuality() {
    if (this.quality < 50) {
      this.quality += 1;
    }
    this.sellIn -= 1;
    if (this.sellIn < 0 && this.quality < 50) {
      this.quality += 1;
    }
  }
}

export class BackstagePass extends Item {
  updateQuality() {
    if (this.sellIn < 0) {
      this.quality = 0;
      return;
    }
    if (this.quality < 50) {
      this.quality += 1;
      if (this.sellIn < 10) {
        this.quality += 1;
      }
      if (this.sellIn < 5) {
        this.quality += 1;
      }
    }
    this.sellIn -= 1;
  }
}

export class Sulfuras extends Item {
  updateQuality() {
    // Sulfuras does not change in quality or sellIn
  }
}

export class NormalItem extends Item {
  updateQuality() {
    if (this.quality > 0) {
      this.quality -= 1;
    }
    this.sellIn -= 1;
    if (this.sellIn < 0 && this.quality > 0) {
      this.quality -= 1;
    }
  }
}

export class ConjuredItem extends Item {
  updateQuality() {
    if (this.quality > 0) {
      this.quality -= 2; // Conjured items degrade in Quality twice as fast as normal items
    }
    this.sellIn -= 1;
    if (this.sellIn < 0 && this.quality > 0) {
      this.quality -= 2; // Once the sell by date has passed, Quality degrades twice as fast
    }
  }
}


// ================== Items ================== //
export let items = [
  new NormalItem("+5 Dexterity Vest", 10, 20),
  new AgedBrie("Aged Brie", 2, 0),
  new NormalItem("Elixir of the Mongoose", 5, 7),
  new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80),
  new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new ConjuredItem("Conjured Mana Cake", 3, 6)
];

export const updateQuality = () => {
  items.forEach(item => item.updateQuality());
};


