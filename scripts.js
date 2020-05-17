$('#myform').on('submit', scanJD)
$('#reset-btn').on('click', function(){
    $('tbody').empty()
})

$(document).ready( function(){
    var defaultJD = 'rockstar ninja rockstar team product engineer growth mindset product'
    
    wordFreq(defaultJD)
})

function scanJD() {
    event.preventDefault()
    var JDstring = $('#text').val().toLowerCase()
    console.log(JDstring);
    
    wordFreq(JDstring)
}

function wordFreq(JDstring) {
    var punct = /[\u2000-\u206F\u2E00-\u2E7F\u00B7\\0-9\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
    var space = /\s+/g
    var wordArray = JDstring.replace(punct, '').replace(space, ' ').trim().split(/\s+/);
    // console.log(wordArray);

  
    var stopwordsObj = {};
    for (i = 0; i < stopwords.length; i++) {
        stopwordsObj[stopwords[i].trim()] = true;
    }

    var cleansedArray = [];
    wordArray.forEach(function (word) {
        if (!stopwordsObj[word]) {
            cleansedArray.push(word);
        }
    })

    var freqMap = {};
    cleansedArray.forEach(function (word) {
        if (!freqMap[word]) {
            freqMap[word] = 0;
        }
        freqMap[word] += 1;
    });
    makeTable(freqMap);
}

function makeTable(freqMap) {
    // bullshit way of sorting by count ascending USE UNDERSCORE
    // console.log(freqMap);
    var sortable = [];
    for (var word in freqMap) {
        sortable.push([word, freqMap[word]]);
    }
    sortable.sort(function (a, b) {
        return b[1] - a[1];
    });
    
    var rankedKeys = {}
    sortable.forEach(function (word) {
        rankedKeys[word[0]] = word[1]
    })

    // append ordered rows to table
    for (var word in rankedKeys) {
        $('#tablebod').append(`<tr><td>${word}</td><td>${freqMap[word]}</td></tr>`)
    }

}