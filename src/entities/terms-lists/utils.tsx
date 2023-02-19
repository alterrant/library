// Массив не будет меняться, поэтому допускается key={index}
export const getTermsLists = (ARRAY:any) => ARRAY.map(
    (item:any, index: number) => {
        if (!Array.isArray(item)) return <li key={index}>{item}</li>
        return <ul key={index}>{getTermsLists(item)}</ul>
    }
);
