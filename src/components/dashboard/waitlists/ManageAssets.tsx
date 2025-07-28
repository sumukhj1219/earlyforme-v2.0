"use client"

import { Image, Monitor, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { instrument_serif } from '~/components/common/fonts/fonts'
import { uploadImage } from '~/components/packages/upload-asset/uploadAsset'
import { Button } from '~/components/ui/button'
import { api } from '~/trpc/react'

const ManageAssets = () => {
    const {data, refetch} = api.assets.getAssets.useQuery()
    const { mutate: uploadAsset } = api.assets.uploadAsset.useMutation({
        onSuccess:()=>{
            refetch()
        }
    })
    const {mutate:deleteAsset} = api.assets.deleteAsset.useMutation({
        onSuccess:()=>{
            refetch()
        }
    })

    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        await uploadImage(e, uploadAsset)
    }

    return (
        <div className="w-full space-y-4">
            <div className="bg-secondary/5 p-3 ">
                <span className="text-md flex items-center gap-2 text-primary">
                    <Image stroke="white" className="p-1 w-6 h-6 bg-gradient-to-br from-primary to-primary/20 rounded" />
                    Images and Logos
                </span>
            </div>

            <div className="space-y-1 px-4">
                <h1 className={`${instrument_serif.className} text-2xl md:text-3xl font-semibold`}>
                    Local Logos
                </h1>
                <p className="text-xs md:text-sm text-secondary/50">
                    Manage and upload all your images in here to access easily.
                </p>
            </div>

            <div className="grid px-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
                <label
                    htmlFor="logo"
                    className="cursor-pointer aspect-square border border-dashed border-muted-foreground rounded-md bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 transition"
                >
                    <input
                        id="logo"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleUpload}
                    />
                    <div className="flex flex-col items-center justify-center text-center">
                        <Monitor className="w-8 h-8 p-1 bg-gradient-to-br from-primary to-primary/50 rounded text-white" />
                        <span className="text-xs mt-1">Upload</span>
                    </div>
                </label>

                {data?.map((trx) => (
                    <div
                        key={trx.id}
                        className="aspect-square group relative bg-secondary/10 border rounded-md overflow-hidden"
                    >
                        <img
                            src={trx.url}
                            alt={`Uploaded ${trx.id}`}
                            className="object-cover  w-full h-full"
                        />
                        <Button onClick={()=>deleteAsset({assetId:trx.id})} variant={'ghost'} size={'icon'} className='absolute opacity-0 group-hover:opacity-100 rounded-md right-2 top-2'>
                            <Trash2 stroke='red' />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ManageAssets
