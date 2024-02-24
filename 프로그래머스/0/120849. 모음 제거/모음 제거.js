function solution(my_string) {
    var answer = '';
    answer = my_string.split(''); // ['b','u','s']
    answer = answer.filter(i => ['a','e','i','o','u'].indexOf(i) === -1)
    answer = answer.join('')
    return answer;
}