  // enter numbers
  // click button
  function calculateAverage() {
    const stringNumbers = document.getElementById("scores").value
    const stringArray = stringNumbers.split(",")
    const numOfEntries = stringArray.length
    console.log(stringArray)
    let totalNum = 0
    for (const item of stringArray) {
      totalNum += parseInt(item)
    }
    const ave = totalNum/numOfEntries
    document.getElementById("average").innerHTML = ave
  }
  // calculate averageAndSet
     // get the numbers
     // add the numbers
     // divide numbers by the amt of numbers
    // set innerhtml with the answer

