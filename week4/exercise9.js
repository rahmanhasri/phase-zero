function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  let strKecil = 'abcdefghijklmnopqrstuvwxyz'
  let strBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let string = ''

  for (let i = 0;i<kalimat.length;i++){
    for (let j = 0;j<26;j++){
      // console.log(kalimat[0]);
      // console.log(strBesar[7]);
      if (kalimat[i] == strBesar[j]){
        string += strKecil[j]
      }
      if (kalimat[i] == strKecil[j]){
        string += strBesar[j]
      }
      // if(kalimat[i] == strBesar[j]){
      //   string += strKecil[j]
      // }
    }
  }
  return string
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
