function solution(sides) {
    var answer = 0;
    const max = sides.sort((a,b)=>a-b)[2]
    answer = max < sides[0]+sides[1] ? 1 : 2 
    return answer;
}