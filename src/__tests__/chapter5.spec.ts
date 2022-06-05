import { BalletFlat, Boot, Shoe, Sneaker  } from '../chapter5';

describe('shoe fabric', () => {
    it('should create ballet flat', () => {
        const balletFlat = Shoe.create('balletFlat');
        expect(balletFlat instanceof BalletFlat).toEqual(true);
        expect(balletFlat.purpose).toEqual('dancing');
    });
    it('should create boot', () => {
        const boot = Shoe.create('boot');
        expect(boot instanceof Boot).toEqual(true);
        expect(boot.purpose).toEqual('woodcutting');
    });
    it('should create sneaker', () => {
        const sneaker = Shoe.create('sneaker');
        expect(sneaker instanceof Sneaker).toEqual(true);
        expect(sneaker.purpose).toEqual('running');
    });
});