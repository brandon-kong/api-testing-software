'use client';

import React, { useState, useEffect } from "react";
import { Typography } from "..";
import { text } from "stream/consumers";

type Message = {
    message: React.ReactNode;
    type: 'error' | 'success' | 'info';
}

export default function TerminalMockup ()
{
    const [messages, setMessages] = useState<Message[]>([]);

    const addMessage = (message: Message) => {
        setMessages(prev => [...prev, message]);
    }

    const reserved = (text: string) => (
        <span className={'text-keyword-reserved'}>{text}</span>
    );

    const number = (text: string) => (
        <span className={'text-keyword-number'}>{text}</span>
    );

    const param = (text: string) => (
        <span className={'text-keyword-param'}>{text}</span>
    );


    useEffect(() => {
        if (messages.length > 0) return;
        addMessage({
            message: (
                <Typography key={0}  variant={'p-small'} className={'text-primary-300 text-sm text-wrap'}>
                    server:~ user$ : {'  '}
                    <Typography variant={'span'} className={'text-secondary-300 text-sm'}>
                        {reserved('Running')} {number('10,000')} tests 
                        {reserved(' on ')} {param('http://localhost:3000')}
                       
                    </Typography>
                </Typography> 
            ),
            type: 'info'
        });

        setTimeout(() => {
            addMessage({
                message: (
                    <Typography key={1}  variant={'p-small'} className={'text-primary-300 text-sm text-wrap'}>
                        server:~ user$ : {'  '}
                        <Typography variant={'span'} className={'text-secondary-300 text-sm'}>
                            Test {number('1')} {reserved('of')} {number('10,000')} completed ({number('>0.01')}%)
                        </Typography>
                    </Typography> 
                ),
                type: 'success'
            });
        }, 2000);

        setTimeout(() => {
            addMessage({
                message: (
                    <Typography key={2}  variant={'p-small'} className={'text-primary-300 text-sm text-wrap'}>
                        server:~ user$ : {'  '}
                        <Typography variant={'span'} className={'text-secondary-300 text-sm'}>
                            Test {number('100')} {reserved('of')} {number('10,000')} completed ({number('1')}%)
                        </Typography>
                    </Typography> 
                ),
                type: 'success'
            });
        }, 4000);

        setTimeout(() => {
            addMessage({
                message: (
                    <Typography key={3} variant={'p-small'} className={'text-primary-300 text-sm text-wrap'}>
                        server:~ user$ : {'  '}
                        <Typography variant={'span'} className={'text-secondary-300 text-sm'}>
                            Test {number('1,000')} {reserved('of')} {number('10,000')} completed ({number('10')}%)
                        </Typography>
                    </Typography> 
                ),
                type: 'success'
            });
        }, 6000);

        setTimeout(() => {
            addMessage({
                message: (
                    <Typography key={4}  variant={'p-small'} className={'text-primary-300 text-sm text-wrap'}>
                        server:~ user$ : {'  '}
                        <Typography variant={'span'} className={'text-secondary-300 text-sm'}>
                            Test {number('5,000')} {reserved('of')} {number('10,000')} completed ({number('50')}%)
                        </Typography>
                    </Typography> 
                ),
                type: 'success'
            });
        }, 8000);

        setTimeout(() => {
            addMessage({
                message: (
                    <Typography key={5}  variant={'p-small'} className={'text-primary-300 text-sm text-wrap'}>
                        server:~ user$ : {'  '}
                        <Typography variant={'span'} className={'text-secondary-300 text-sm'}>
                            {reserved('All')} tests completed successfully for {param('http://localhost:3000')}
                        </Typography>
                    </Typography> 
                ),
                type: 'success'
            });
        }, 10000);

        setTimeout(() => {
            addMessage({
                message: (
                    <Typography key={6}  variant={'p-small'} className={'text-primary-300 text-sm text-wrap'}>
                        server:~ user$ : {'  '}
                        <Typography variant={'span'} className={'text-secondary-300 text-sm'}>
                            {number('10,000')} tests completed in {number('11.734')} seconds
                        </Typography>
                    </Typography> 
                ),
                type: 'success'
            });
        }, 11000);

        setTimeout(() => {
            addMessage({
                message: (
                    <Typography key={7}  variant={'p-small'} className={'text-primary-300 text-sm text-wrap'}>
                        server:~ user$ : {'  '}
                        <Typography variant={'span'} className={'text-secondary-300 text-sm'}>
                            API Endpoint {param('http://localhost:3000')} is performing optimally
                        </Typography>
                    </Typography> 
                ),
                type: 'success'
            });
        }, 11500);

        setTimeout(() => {
            addMessage({
                message: (
                    <>
                    <Typography  key={8} variant={'p-small'} className={'text-primary-300 text-sm text-wrap'}>
                        server:~ user$ : {'  '}
                        <Typography variant={'span'} className={'text-secondary-300 text-sm'}>
                            Total tests executed: {number('10,000')}
                        </Typography>
                    </Typography> 
                    <Typography   key={9} variant={'p-small'} className={'text-primary-300 text-sm text-wrap'}>
                        server:~ user$ : {'  '}
                        <Typography  key={1} variant={'span'} className={'text-secondary-300 text-sm'}>
                            Total time elapsed: {number('11.734')} seconds
                        </Typography>
                    </Typography> 
                    <Typography  key={10} variant={'p-small'} className={'text-primary-300 text-sm text-wrap'}>
                        server:~ user$ : {'  '}
                        <Typography variant={'span'} className={'text-secondary-300 text-sm'}>
                            Average response time: {number('0.011734')} seconds
                        </Typography>
                    </Typography> 
                </>
                ),
                type: 'success'
            });
        }, 11600);
    }, [messages]);

    return (
        <div className={'w-full h-[500px] max-h-[500px] overflow-auto bg-black rounded-lg p-4'}>
            <div className={'flex items-center justify-between'}>
                <div className={'flex items-center space-x-2'}>
                    <div className={'h-3 w-3 bg-red-500 rounded-full'} />
                    <div className={'h-3 w-3 bg-yellow-500 rounded-full'} />
                    <div className={'h-3 w-3 bg-green-500 rounded-full'} />
                </div>
                <div className={'flex items-center space-x-2'}>
                    <div className={'h-3 w-3 bg-gray-500 rounded-full'} />
                    <div className={'h-3 w-3 bg-gray-500 rounded-full'} />
                    <div className={'h-3 w-3 bg-gray-500 rounded-full'} />
                </div>
            </div>
            <div className={'flex items-center space-x-2 mt-6'}>
                <div>
                    <div
                    className={'flex flex-col w-full items-start space-y-1'}
                    >

                        {
                            messages.map((message, index) => (
                                <div key={index} className={'flex flex-col items-start space-y-1'}>
                                    { message.message }
                                </div>
                            )
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}