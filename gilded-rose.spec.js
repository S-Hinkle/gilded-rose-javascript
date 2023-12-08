import { expect, describe, it } from "vitest";
import { Item, items, updateQuality, NormalItem, ConjuredItem, AgedBrie, Sulfuras, BackstagePass} from "./gilded-rose.js";

// describe("updateQuality", () => {
//   it("reduces quality and sellIn of basic items by 1", () => {
//     const testItem = new Item("basic", 5, 3);
//     items.push(testItem);

//     updateQuality();
    
//     expect(testItem.sellIn).toBe(4);
//     expect(testItem.quality).toBe(2);
//   });



//   it("increase the quality of an item by 1 if Aged Brie", () => {
//     const testItem = new Item("Aged Brie", 2, 0);
//     items.push(testItem);

//     updateQuality();
    
//     expect(testItem.sellIn).toBe(1);
//     expect(testItem.quality).toBe(1);
//   });



//   it("degrades quality twice as fast after sellIn date", () => {
//     const testItem1 = new Item("normal", 0, 7);
//     items.push(testItem1);

//     updateQuality();
   
//     expect(testItem1.sellIn).toBe(-1);
//     expect(testItem1.quality).toBe(5);
//   });


  
//   it("quality is never negative", () => {
//     const testItem1 = new Item("basic", 1, 0);
//     items.push(testItem1);

//     updateQuality();

//     expect(testItem1.quality).toBe(0);
//     expect(testItem1.sellIn).toBe(0);
//   });



//   it("sulfuras never have to be sold or decreases in quality", () => {
//     const testItem1 = new Item("Sulfuras, Hand of Ragnaros", 0, 80);
//     items.push(testItem1);

//     updateQuality();

//     expect(testItem1.sellIn).toBe(0);
//     expect(testItem1.quality).toBe(80);
//   });



//   it("backstage passes increases in quality by 2 when there are 10 days or less", () => {
//     const testItem = new Item("Backstage passes to a TAFKAL80ETC concert", 9, 20);
//     items.push(testItem);

//     updateQuality();

//     expect(testItem.sellIn).toBe(8);
//     expect(testItem.quality).toBe(22);
//   });


  
//   it("backstage passes increases in quality by 3 when there are 5 days or less", () => {
//     const testItem = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20);
//     items.push(testItem);

//     updateQuality();

//     expect(testItem.sellIn).toBe(4);
//     expect(testItem.quality).toBe(23);
//   });



//   it("backstage passes quality drops to 0 after the concert", () => {
//     const testItem = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20);
//     items.push(testItem);

//     updateQuality();

//     expect(testItem.sellIn).toBe(-1);
//     expect(testItem.quality).toBe(0);
//   });


// });



describe('NormalItem', () => {
  it('should decrease quality and sellIn by 1', () => {
    const item = new NormalItem('Normal', 10, 20);
    item.updateQuality();
    expect(item.quality).toBe(19);
    expect(item.sellIn).toBe(9);
  });

  it('should decrease quality twice as fast after sellIn date', () => {
    const item = new NormalItem('Normal', 0, 20);
    item.updateQuality();
    expect(item.quality).toBe(18);
  });
});


describe('AgedBrie', () => {
  it('should increase quality by 1 as it gets older', () => {
    const brie = new AgedBrie('Aged Brie', 2, 0);
    brie.updateQuality();
    expect(brie.quality).toBe(1);
  });
});


