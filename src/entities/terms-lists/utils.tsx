export const getTermsLists = (ARRAY:any) => ARRAY.map(
    (item:any) => {
        if (!Array.isArray(item)) return <li>{item}</li>
        return <ul>{getTermsLists(item)}</ul>
    }
);
