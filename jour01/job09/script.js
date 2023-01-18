const numbers = [20,4,16,80,12];

function tri(numbers, order) {
    let tableauTrie;
    if(order.toLowerCase() == "asc") {
        return tableauTrie = numbers.sort((a,b) => a - b);
    }
    if(order.toLowerCase() == "desc") {
        return tableauTrie = numbers.sort((a,b) => b - a);
    }
}

console.log(tri(numbers,"ASC"));
console.log(tri(numbers,"Desc"));