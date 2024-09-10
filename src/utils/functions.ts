export function caesarCipherEncrypt(plainText:string){
    let cipherText = ""
    for(let i = 0; i < plainText.length; i++){
        let charCode = plainText.charCodeAt(i)
        if(charCode >= 65 && charCode <= 90){
            charCode = (charCode - 65 + 3) % 26 + 65
        } else if(charCode >= 97 && charCode <= 122){
            charCode = (charCode - 97 + 3) % 26 + 97
        }
        cipherText += String.fromCharCode(charCode)
    }
    return cipherText
  }
  
export function caesarCipherDecrypt(cipherText:string){
    let plainText = ""
    for(let i = 0; i < cipherText.length; i++){
        let charCode = cipherText.charCodeAt(i)
        if(charCode >= 65 && charCode <= 90){
            charCode = (charCode - 65 - 3 + 26) % 26 + 65
        } else if(charCode >= 97 && charCode <= 122){
            charCode = (charCode - 97 - 3 + 26) % 26 + 97
        }
        plainText += String.fromCharCode(charCode);
    }
    return plainText
  }

  