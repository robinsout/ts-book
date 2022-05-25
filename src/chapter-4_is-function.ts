type IsFunction = <T>(first: T, second: T) => boolean;

const is: IsFunction = (first, second) => {
    if (typeof first !== typeof second) return false;
    return first === second;
};

export default is;