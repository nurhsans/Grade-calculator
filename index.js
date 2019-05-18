  // enter numbers
  // click button
  function calculateAverage() {
    const stringNumbers = "34,545,78"
    const stringArray = stringNumbers.split(",")
    const numOfEntries = stringArray.length
    console.log(stringArray)
    let totalNum = 0
    for (const item of stringArray) {
      totalNum += parseInt(item)
    }
    const ave = totalNum/numOfEntries
    console.log(ave)
    
  }
  // calculate averageAndSet
     // get the numbers
     // add the numbers
     // divide numbers by the amt of numbers
    // set innerhtml with the answer

