var words56 = []
wordList.map(word => {
    if (word.word.length > 4 && word.word.length < 7){
        word.len = word.word.length
        word.alpha = word.word.split('').sort().join('');
        words56.push(word)
    }
    return word
});

// alpha sort list
var sortedList = words56.sort((a, b) => a.alpha.localeCompare(b.alpha));
   
var freqMap = {};
    sortedList.forEach(word => {
        var alpha = word.alpha
        if (!freqMap[alpha]) {
            freqMap[alpha] = 0;
        }
        freqMap[alpha] += 1;
    });   

    sortedList.forEach(i => {
        i.freq = freqMap[i.alpha]
    })
    var finalList = sortedList.filter(i => {
        return i.freq == 1
    })



var test = "bbonoh"
var testJumb = test.split('').sort().join('')

var hi = finalList.filter( i => {
    // console.log(i)
   return i.alpha == testJumb
})

console.log(hi)