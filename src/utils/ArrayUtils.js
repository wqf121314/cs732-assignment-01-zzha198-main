export function intersection(array1, array2) {
    if (array1.length === 0) return array2
    if (array2.length === 0) return array1
    return array1.filter(x => array2.find(y => y.id === x.id));
}
