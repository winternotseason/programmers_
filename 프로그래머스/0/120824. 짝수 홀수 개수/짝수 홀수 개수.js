function solution(num_list) {
    let even = 0;
    let odd = 0;
    num_list.forEach(n => n%2 === 0 ? even++ : odd++)
    var answer = [];
    answer[0] = even;
    answer[1] = odd;
    return answer;
}