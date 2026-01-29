const valideKey = ["category", "tag", "level"];

const constructValideObj = (params: { filter: string[] }) => {
    const filter = params.filter;
    const length = filter.length;
    const paires = [];

    if (length == 0 || (length % 2 != 0)) {
        return false;
    }

    for (let i = 0; i < (length - 1); i++) {

        if (i % 2 == 0 && valideKey.includes(filter[i])) paires.push([filter[i], filter[i + 1]]);

        // const array = [filter[i], filter[i+1]];
        // paires.push(array);
    }

    const obj = Object.fromEntries(paires);

    return obj;
}

export default constructValideObj;