export function countPositivesSumNegatives(input: any) {
        let rv: number[] = []
        rv.push(input.reduce((acc, curr) => acc + (curr > -1 ? 1 : 0), 0));
        rv.push(input.reduce((acc, curr) =>  acc + (curr < 0 ? curr : 0), 0));

        Math.
    
        return rv;
  }

  console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));