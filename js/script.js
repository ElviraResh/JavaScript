function sieveOfEratosthenes(n) {
  var arr = [],
    p = 2;

  for (var i = 0; i < n; i++) {
    arr.push(true);
  }

  while (p * p < n) {
    for (var i = 2 * p; i < n; i += p) {
      arr[i] = false;
    }

    for (i = p + 1; i <= n; i++) {
      if (arr[i]) {
        p = i;
        break;
      }
    }
  }

  var simpleNumbers = [];

  for (i = 2; i < n; i++) {
    if (arr[i]) {
      simpleNumbers.push(i);
    }
  }

  console.log(simpleNumbers);

  //return simpleNumbers;
}

sieveOfEratosthenes(120);