function solution(n) {
    var answer = [];
    if(n%2 === 0 ){
        n = n-1
        while(n>0){
            answer.push(n)
            n -= 2
        } }else {
            while(n>0){
                answer.push(n)
                n-=2
            }
    }
    answer.sort((a,b)=>a-b)
    return answer;
}