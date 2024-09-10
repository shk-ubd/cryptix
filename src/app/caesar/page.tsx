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

import { caesarCipherEncrypt, caesarCipherDecrypt } from '@/utils/functions'
import { caesarCipherMethodTheory } from '@/utils/theory'

function CaesarCipher() {
  const [shift, setShift] = useState(3)
  const [text, setText] = useState('')
  const [result, setResult] = useState('')

  const performEncryption = () => {
    setResult(caesarCipherEncrypt(text))
  }

  const performDecryption = () => {
    setResult(caesarCipherDecrypt(text))
  }


  return (
    <main className='py-24  px-7 md:px-18 lg:px-20 min-h-screen'>
      <section className='flex flex-col-reverse md:flex-row justify-between items-center  '>

        {/* CONTENT */}
        <Description cipherMethod={caesarCipherMethodTheory} />

        {/* ENCRYPT DECRYPt*/}
        <Card className="w-[26rem] h-fit flex-shrink-0 my-6 md:my-0">
          <CardHeader className='mb-3'>
            <CardTitle>Encrypt/Decrypt</CardTitle>
            <CardDescription>Encrypt or Decrypt your text using Caesar Cipher Technique.</CardDescription>
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
                  <Label htmlFor="shift">Shift</Label>
                  <Input
                  disabled 
                  value={shift}
                  onChange={(e) => { setShift(parseInt(e.target.value)) }}
                  id="shift" 
                  type='number' 
                  min={0} 
                  placeholder="Shift value" />
                </div>
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button 
            onClick={()=>{performEncryption()}}
            >Encrypt</Button>
            
            <Button 
            onClick={()=>{performDecryption()}}
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
                  className='!text-white result-textarea border-2 border-neutral-600 p-3 rounded-lg shadow-lg shadow-neutral-700/50 focus:outline-none focus:ring-2 focus:ring-neutral-800 transition duration-300'
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Heading1 text={caesarCipherMethodTheory.title} className='md:hidden' />





      </section>
    </main>
  )
}

export default CaesarCipher