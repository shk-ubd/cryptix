'use client'

import React, { useState } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

import { stringToBinary, binaryToString, generateRandomBinaryKey, encryptOTP, decryptOTP } from '@/utils/functions'
import { otpCipherMethodTheory as cipherMethodTheory } from '@/utils/theory'
import CryptContainer from '@/components/CryptContainer'

function OTPCipher() {
  const [text, setText] = useState('') // Plaintext or binary input
  const [binaryKey, setBinaryKey] = useState('') // Random binary key
  const [result, setResult] = useState('') // Ciphertext or decrypted text
  const [binaryText, setBinaryText] = useState('') // Binary representation of plaintext or ciphertext
  const [binaryResult, setBinaryResult] = useState('') // Result in binary format
  const [isEncrypting, setIsEncrypting] = useState(true) // Toggle encryption/decryption

  const performEncryption = () => {
    try {
      // Convert plaintext to binary
      const binaryPlaintext = stringToBinary(text)

      // Generate a random binary key matching the length of the binary plaintext
      const generatedKey = generateRandomBinaryKey(binaryPlaintext.length)

      // Perform OTP encryption (XOR)
      const encryptedBinary = encryptOTP(binaryPlaintext, generatedKey)

      // Update state
      setBinaryText(binaryPlaintext) // Save binary plaintext
      setBinaryKey(generatedKey) // Save the key
      setBinaryResult(encryptedBinary) // Save binary ciphertext
      setResult(encryptedBinary) // Display ciphertext
    } catch (error) {
      setResult('Error during encryption. Ensure valid plaintext.')
    }
  }

  const performDecryption = () => {
    try {
      // Perform OTP decryption (XOR using binary ciphertext and key)
      const decryptedBinary = decryptOTP(binaryResult, binaryKey)

      // Convert decrypted binary to string
      const decryptedText = binaryToString(decryptedBinary)

      // Update state
      setResult(decryptedText) // Display plaintext
    } catch (error) {
      setResult('Error during decryption. Ensure key and ciphertext are correct.')
    }
  }

  return (
    <CryptContainer cipherMethodTheory={cipherMethodTheory}>

      {/* ENCRYPT / DECRYPT */}
      <Card className="w-[26rem] h-fit flex-shrink-0 my-6 md:my-0">
        <CardHeader className='mb-3'>
          <CardTitle>Encrypt/Decrypt</CardTitle>
          <CardDescription>Encrypt or Decrypt your text using the OTP Cipher Technique.</CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="text">{isEncrypting ? 'Plaintext' : 'Binary Ciphertext'}</Label>
                <Input
                  onChange={(e) => { setText(e.target.value) }}
                  value={text}
                  id="text"
                  placeholder={isEncrypting ? "Enter plaintext to encrypt" : "Enter binary ciphertext to decrypt"}
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="binaryKey">Binary Key</Label>
                <Textarea
                  disabled
                  value={binaryKey}
                  id="binaryKey"
                  placeholder="Generated key will appear here after encryption"
                  className='!text-white result-textarea !cursor-text border-2 border-neutral-600 p-3 rounded-lg shadow-lg shadow-neutral-700/50 focus:outline-none focus:ring-2 focus:ring-neutral-800 transition duration-300'
                />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button
            onClick={() => {
              setIsEncrypting(true)
              performEncryption()
            }}
          >Encrypt</Button>

          <Button
            onClick={() => {
              setIsEncrypting(false)
              performDecryption()
            }}
            variant="secondary">Decrypt</Button>
        </CardFooter>

        <CardContent>
          <div className="flex justify-between space-y-1.5">
            <div className='w-full'>
              <Label htmlFor='result'>{isEncrypting ? 'Encrypted Binary Result' : 'Decrypted Plaintext'}</Label>
              <Textarea
                disabled
                value={result}
                rows={4}
                id='result'
                placeholder="Your encrypted or decrypted text will appear here"
                className='!text-white result-textarea !cursor-text border-2 border-neutral-600 p-3 rounded-lg shadow-lg shadow-neutral-700/50 focus:outline-none focus:ring-2 focus:ring-neutral-800 transition duration-300'
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </CryptContainer>
  )
}

export default OTPCipher
