function aclean(arr){
    let obj = {};
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        let sorted = arr[i].toLowerCase().split('').sort().join('');
        obj[sorted] = arr[i];
    }
    for(let key in obj){
        newArr.push(obj[key]);
    }
    return newArr;
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
