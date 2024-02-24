function solution(rsp) {
    var answer = '';
    var arr = [];
    for(i=0;i<rsp.length;i++){
        const rsp_arr = rsp.split('')
        if(rsp[i] === '2'){
            arr.push('0')
        } else if (rsp[i] === '0') {
            arr.push('5')
        } else {
            arr.push('2')
        }
    }    
    answer = arr.join('')
    return answer;
}