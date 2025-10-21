"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';

const page = () => {

    const [url, setUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')
    const [generated, setGenerated] = useState('')

    const generate = () => {

        if (url === '' || shortUrl === '') {
            toast.warn('Please fill all the fields!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

        } else {
            fetch('/api/generate', {
                method: 'POST',
                body: JSON.stringify({ url: url, shortUrl: shortUrl }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .then(data => {
                    if (data.success) {
                        setGenerated(`${process.env.NEXT_PUBLIC_HOST_URL}${shortUrl}`)
                        toast.success(data.message, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                        setUrl('')
                        setShortUrl('')
                    } else {
                        toast.error(data.message, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    }
                })
        }
    }




    return (
        <div className='h-screen'>
            <div className='text-black flex flex-col justify-center rounded-xl p-6 gap-2 my-10 mx-auto items-center w-1/2 bg-emerald-100'>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
                <h1 className='text-xl font-bold pb-3'>Generate your short links: </h1>
                <input onChange={(e) => setUrl(e.target.value)} value={url} type="text" className='text-sm p-2 rounded-lg w-full' placeholder='Enter URL' />
                <input onChange={(e) => setShortUrl(e.target.value)} value={shortUrl} type="text" className='text-sm p-2 rounded-lg w-full' placeholder='Enter preferred short URL' />
                <div className="pt-3 w-full">
                    <button onClick={generate} className='bg-emerald-400 rounded-lg text-white p-2 w-full'>Generate</button>
                </div>



                {generated && <>

                    <span className='font-semibold text-left'>Your shortened url is ready :</span>
                    <Link className='text-blue-800 underline' href={generated} target='_blank'>{generated}</Link>
                </>}
            </div>
        </div>
    )
}

export default page
