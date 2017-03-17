var topics = require('../data').topics;

// 1. Filter topics written by Leonard
var result = topics.filter(function (topic) {
    return false;
});

console.log("result --> ", result);

// 1. The same with Fat arrow
result = topics.filter(topic => false);


// 2. Mapping some data: getting the title of each topic
var titles = topics.map(function (topic) {
    return topic.title;
});

console.log('titles --> ', titles);

// 2. Same with fat arrow
titles = topics.map(topic => topic.title);
console.log('titles avec fat arrow -->', titles);

// 2.bis) return titles written by Leonard


// 3. Topics with tag violence
var hasViolence = topics.some(function (topic) {
    return false;
});
console.log("has violence : ",hasViolence);

// 4. See Reduce in demos


/*** Exercices :   ***/

// 1 : sorted comment ids where penny wrote comments
// Warning : some comments have no user

const reducer = (memo, t)=>memo.concat(t.comments);

var pennyIds = topics.reduce(reducer, [])
    .filter(comment => comment.user && comment.user.name === 'Penny')
    .map(c => c.id)
    .sort( (id1, id2) =>  id1<id2 ? -1 : 1);

console.log('Penny Ids : ', pennyIds);

// 2. Comment contents written by a standard user, tagged with Violence
// This kind of comment will be flagged by an admin

