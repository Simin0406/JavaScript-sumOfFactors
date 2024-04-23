function sumOfFactorial(num) {
    let answer;
    let sum =0;
    for (let i=1;i<=num;i++)
    {
        if (num%i==0)
        sum = sum + i;
    }
  answer = sum;
return answer; 
}