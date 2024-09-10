'use client'
import React, { useState } from 'react'

import Description from '@/components/Description'
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
import { Heading1 } from '@/components/ui/headings'

import { playfairCipherMethodTheory as cipherMethodTheory } from '@/utils/theory'
import { encryptPlayfair, decryptPlayfair } from '@/utils/functions'
import CryptContainer from '@/components/CryptContainer'

function PlayfairCipher() {
  const [text, setText] = useState<string>('')
  const [key, setKey] = useState<string>('')
  const [result, setResult] = useState<string>('')

  const performEncryption = () => {
    if (key.length === 0) {
      alert("Key cannot be empty")
    } else {
      setResult(encryptPlayfair(text, key))
    }
  }

  const performDecryption = () => {
    if (key.length === 0) {
      alert("Key cannot be empty")
    } else {
      setResult(decryptPlayfair(text, key))
    }
  }

  return (
    <CryptContainer cipherMethodTheory={cipherMethodTheory} >
      {/* ENCRYPT DECRYPT */}
      <Card className="w-[26rem] h-fit flex-shrink-0 my-6 md:my-0">
        <CardHeader className='mb-3'>
          <CardTitle>Encrypt/Decrypt</CardTitle>
          <CardDescription>Encrypt or Decrypt your text using <span className='underline text-white'>{cipherMethodTheory.title}</span> Technique.</CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="text">Text</Label>
                <Input
                  onChange={(e) => { setText(e.target.value) }}
                  id="text"
                  placeholder="Enter text to encrypt or decrypt" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="key">Key</Label>
                <Input
                  value={key}
                  onChange={(e) => { setKey(e.target.value) }}
                  id="key"
                  type='text'
                  placeholder="Key" />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button
            onClick={() => { performEncryption() }}
          >Encrypt</Button>

          <Button
            onClick={() => { performDecryption() }}
            variant="secondary">Decrypt</Button>
        </CardFooter>

        <CardContent>
          <div className="flex justify-between space-y-1.5">
            <div className='w-full'>
              <Label htmlFor='result'>Result</Label>
              <Textarea
                disabled
                value={result}
                rows={4}
                id='result'
                placeholder="Result"
                className='!cursor-text !text-white result-textarea border-2 border-neutral-600 p-3 rounded-lg shadow-lg shadow-neutral-700/50 focus:outline-none focus:ring-2 focus:ring-neutral-800 transition duration-300'
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </CryptContainer>
  )
}

export default PlayfairCipher
