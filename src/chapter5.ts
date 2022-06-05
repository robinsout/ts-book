type Create = {
    (type: 'balletFlat'): BalletFlat;
    (type: 'boot'): Boot;
    (type: 'sneaker'): Sneaker;
}

type Shoe = {
    purpose: string;
    create: Create;
};


export class BalletFlat implements Shoe {
    purpose = 'dancing';
    create: Create;
}

export class Boot implements Shoe {
    purpose = 'woodcutting';
    create: Create;

}

export class Sneaker implements Shoe {
    purpose = 'running';
    create: Create;

}

export const Shoe = {
    create: (type: string) => {
        switch (type) {
            case 'balletFlat':
                return new BalletFlat();
            case 'boot':
                return new Boot();
            case 'sneaker':
                return new Sneaker();
        }
    },
};
