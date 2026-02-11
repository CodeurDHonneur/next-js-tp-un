import { Filters } from "@/types/facets";

const allowedKey = ["category", "tag", "level"];

export default function parseFilters(filters: string[]){
    const length = filters.length;

    if(length % 2 !== 0) return null;

    const result: Filters = {};

    // for(let i = 0; i < length; i++){
    //     if(i % 2 === 0) {
    //         const key = filters[i];
    //         const value = filters[i + 1];
    //         result[key as keyof Filters] = value;
    //     }
    // }

    for(let i = 0; i < length; i += 2){
            const key = supSpace(filters[i]);
            const value = supSpace(filters[i + 1]);

            
            if(!key ||  !value || !allowedKey.includes(key)) continue;

            result[key as keyof Filters] = value;
    }

    return result
}

const supSpace = (param: string) => decodeURIComponent(param).trim(); 