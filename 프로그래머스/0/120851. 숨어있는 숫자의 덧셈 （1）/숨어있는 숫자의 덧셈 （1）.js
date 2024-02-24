function solution(my_string) {
    var answer = 0;
    let arr = my_string.split('');
    arr = arr.filter(i => !isNaN(parseInt(i)))
    arr.map(i => answer += parseInt(i))
    return answer;
}