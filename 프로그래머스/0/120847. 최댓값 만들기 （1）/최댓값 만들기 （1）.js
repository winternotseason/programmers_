function solution(numbers) {
    var answer = 0;
    var i = Math.max(...numbers)
    numbers.splice(numbers.indexOf(i),1)
    var j = Math.max(...numbers)
    answer = i*j
    return answer;
}