import { Image, Monitor } from 'lucide-react'
import React from 'react'
import { instrument_serif } from '~/components/common/fonts/fonts'
const ManageAssets = () => {
    return (
        <div className="w-full p-4 space-y-4">
            <div className="bg-secondary/5 p-3 rounded-md">
                <span className="text-md flex items-center gap-2 text-primary">
                    <Image stroke="white" className="p-1 w-6 h-6 bg-gradient-to-br from-primary to-primary/20 rounded" />
                    Images and Logos
                </span>
            </div>

            <div className="space-y-1">
                <h1 className={`${instrument_serif.className} text-2xl md:text-3xl font-semibold`}>
                    Local Logos
                </h1>
                <p className="text-xs md:text-sm text-secondary/50">
                    Manage and upload all your images in here to access easily.
                </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <label
                    htmlFor="logo"
                    className="cursor-pointer aspect-square border border-dashed border-muted-foreground rounded-md bg-secondary/10 flex items-center justify-center hover:bg-secondary/20 transition"
                >
                    <input
                        id="logo"
                        type="file"
                        className="hidden"
                        accept="image/*"
                    />
                    <div className="flex flex-col items-center justify-center text-center">
                        <Monitor className="w-8 h-8 p-1 bg-gradient-to-br from-primary to-primary/50 rounded text-white" />
                        <span className="text-xs mt-1">Upload</span>
                    </div>
                </label>

                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="aspect-square bg-secondary/10 border rounded-md flex items-center justify-center text-xs text-muted-foreground"
                    >
                        Image {i}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ManageAssets
