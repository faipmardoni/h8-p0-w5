function highestScore (students) {
  let obj = {};
  let max = 0;
  for (let i = 0; i < students.length; i++) {
    if (obj[students[i].class] === undefined) {
      obj[students[i].class] = {};
        obj[students[i].class].name = students[i].name;
        obj[students[i].class].score = students[i].score;
        max = students[i].score
    }else {
      if (students[i].score > max) {
        obj[students[i].class].name = students[i].name;
        obj[students[i].class].score = students[i].score;
        max = students[i].score
      }
    }
  }
  return obj
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 76,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}


//Another WAY

  // Code disini
  // let obj = {};
  // let cek;
  // for (let i = 0; i < students.length; i++) {
  //   cek = false;
  //   for (let j = i+1; j < students.length; j++) {
  //     if (students[i].class === students[j].class) {
  //       obj[students[i].class] = {}
  //       if (students[i].score > students[j].score) {
  //         cek = true;
  //       }
  //       break;
  //     } else if(students[j+1] === undefined) {
  //     }
  //   }
  //   if(i === students.length-1) {
  //     for (let j = students.length - 2; j >= 0; j--) {
  //       if (students[i].class === students[j].class) {
  //         break;
  //       }else {
  //         obj[students[i].class] = {}
  //         obj[students[i].class].name = students[i].name
  //         obj[students[i].class].score = students[i].score
  //       }
  //     }
  //   }
  //   if (cek === true) {
  //     obj[students[i].class] = {}
  //     obj[students[i].class].name = students[i].name
  //     obj[students[i].class].score = students[i].score
  //   }
  // }
  // return obj