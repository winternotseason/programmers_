function solution(n) {
    var answer = 0;
    const arr = n.toString().split('')
    arr.forEach(a => answer += parseInt(a))
    return answer;
}