function solution(my_string, n) {
    var answer = '';
    answer = Array.from(my_string).map(i=>i.repeat(n)).join('')
    return answer;
}