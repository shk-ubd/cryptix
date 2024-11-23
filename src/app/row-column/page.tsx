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
import CryptContainer from '@/components/CryptContainer'
import { decryptRowColumnCipher, encryptRowColumnCipher } from '@/utils/functions'
import { rowColumnCipherMethodTheory as cipherMethodTheory } from '@/utils/theory'

// Component for Row-Column Cipher UI
const RowColumnCipher: React.FC = () => {
  const [keyword, setKeyword] = useState('')
  const [text, setText] = useState('')
  const [result, setResult] = useState('')
  const [action, setAction] = useState<'encrypt' | 'decrypt'>('encrypt')

  const performAction = () => {
    if (keyword && text) {
      const output = action === 'encrypt' 
        ? encryptRowColumnCipher(text, keyword)
        : decryptRowColumnCipher(text, keyword);
      setResult(output);
    } else {
      alert("Please enter both text and a keyword.");
    }
  }

  const performEncryption = () => {
    setResult(encryptRowColumnCipher(text, keyword))
  }
  const performDecryption = () => {
    setResult(decryptRowColumnCipher(text, keyword))
  }


  return (
    <CryptContainer cipherMethodTheory={cipherMethodTheory}>
      <Card className="w-[26rem] h-fit flex-shrink-0 my-6 md:my-0">
        <CardHeader className='mb-3'>
          <CardTitle>Encrypt/Decrypt</CardTitle>
          <CardDescription>{cipherMethodTheory.title} Techniques.</CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="text">Text</Label>
                <Input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  id="text"
                  placeholder="Enter text for encryption/decryption"
                  className="border-2 p-3 rounded-lg shadow-md focus:outline-none"
                />
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="keyword">Keyword</Label>
                <Input
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  id="keyword"
                  placeholder="Enter keyword"
                  className="border-2 p-3 rounded-lg shadow-md focus:outline-none"
                />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button onClick={performEncryption}>
            Encrypt
          </Button>
          <Button onClick={performDecryption} variant="secondary">
            Decrypt
          </Button>
        </CardFooter>

        <CardContent>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor='result'>Result</Label>
            <Textarea
              id="result"
              disabled
              value={result}
              placeholder="Your result will appear here"
              rows={4}
              className=' !cursor-text border-2 border-neutral-600 p-3 rounded-lg shadow-lg focus:outline-none transition duration-300'
            />
          </div>
        </CardContent>
      </Card>
    </CryptContainer>
  );
};

export default RowColumnCipher;
