'use client';
import React, { useState } from 'react';

import Description from '@/components/Description';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Heading1 } from '@/components/ui/headings';

import { hillCipherMethodTheory as cipherMethodTheory } from '@/utils/theory';
import { hillCipherEncrypt, hillCipherDecrypt } from '@/utils/functions';
import CryptContainer from '@/components/CryptContainer';

function HillCipher() {
    const [text, setText] = useState<string>('');
    const [result, setResult] = useState<string>('');

    // Hardcoded key matrix (3x3) as per your requirement
    const keyMatrix: number[][] = [
        [1, 24, 5],
        [3, 21, 15],
        [2, 7, 11]
    ]; 

    const performEncryption = () => {
        setResult(hillCipherEncrypt(text)); // Using the hardcoded key
    };

    const performDecryption = () => {
        setResult(hillCipherDecrypt(text)); // Using the hardcoded key
    };

    return (
        <CryptContainer cipherMethodTheory={cipherMethodTheory}>
            <Card className="w-[26rem] h-fit flex-shrink-0 my-6 md:my-0">
                <CardHeader className='mb-3'>
                    <CardTitle>Encrypt/Decrypt</CardTitle>
                    <CardDescription>
                        Encrypt or Decrypt your text using 
                        <span className='underline text-white'>{cipherMethodTheory.title}</span> Technique.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="text">Text</Label>
                                <Input
                                    onChange={(e) => setText(e.target.value)}
                                    id="text"
                                    placeholder="Enter text to encrypt or decrypt"
                                />
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="key">Key Matrix (3x3)</Label>
                                <div className="grid grid-cols-3 gap-2">
                                    <Input
                                        type='number'
                                        value={keyMatrix[0][0]} // Hardcoded value
                                        disabled // Disabled input
                                        className="w-full"
                                    />
                                    <Input
                                        type='number'
                                        value={keyMatrix[0][1]} // Hardcoded value
                                        disabled // Disabled input
                                        className="w-full"
                                    />
                                    <Input
                                        type='number'
                                        value={keyMatrix[0][2]} // Hardcoded value
                                        disabled // Disabled input
                                        className="w-full"
                                    />
                                    <Input
                                        type='number'
                                        value={keyMatrix[1][0]} // Hardcoded value
                                        disabled // Disabled input
                                        className="w-full"
                                    />
                                    <Input
                                        type='number'
                                        value={keyMatrix[1][1]} // Hardcoded value
                                        disabled // Disabled input
                                        className="w-full"
                                    />
                                    <Input
                                        type='number'
                                        value={keyMatrix[1][2]} // Hardcoded value
                                        disabled // Disabled input
                                        className="w-full"
                                    />
                                    <Input
                                        type='number'
                                        value={keyMatrix[2][0]} // Hardcoded value
                                        disabled // Disabled input
                                        className="w-full"
                                    />
                                    <Input
                                        type='number'
                                        value={keyMatrix[2][1]} // Hardcoded value
                                        disabled // Disabled input
                                        className="w-full"
                                    />
                                    <Input
                                        type='number'
                                        value={keyMatrix[2][2]} // Hardcoded value
                                        disabled // Disabled input
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </CardContent>

                <CardFooter className="flex justify-between">
                    <Button onClick={performEncryption}>Encrypt</Button>
                    <Button onClick={performDecryption} variant="secondary">Decrypt</Button>
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
    );
}

export default HillCipher;
