import { NextResponse } from 'next/server'
import { PutObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

import { r2 } from '~/lib/r2'

export async function POST(request: Request) {
    try {
        console.log((`Generating an upload URL!`))
        
        const  body = await request.json();
        const { fileName } = body;

        const signedUrl = await getSignedUrl(
            r2,
            new PutObjectCommand({
                Bucket: "earlyforme",
                Key: fileName,
            }),
            { expiresIn: 60 }
        )

        console.log(`Success generating upload URL!`, signedUrl)

        return NextResponse.json({ url: signedUrl })
    } catch (err) {
        console.log('error')
        return NextResponse.json({ message:"Internal server error" })
    }
}