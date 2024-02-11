function solution(dot) {
    var answer = 0;
    if (dot[0] < 0){
        answer = dot[1] < 0 ? 3 : 2 
    }
    if (dot[0] > 0){
        answer = dot[1] < 0 ? 4 : 1
    }
    return answer;
}