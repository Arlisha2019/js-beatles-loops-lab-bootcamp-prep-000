function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for ( var i = 0; i < musicians.length; i++) {
   empty.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return empty;
}

function johnLennonFacts(facts) {
  var empty = [];
  let i = 0;
  while (i < facts.length) {
  empty.push(`${facts[i]}!!!`)  
  i++;
  }
 return empty;
}










