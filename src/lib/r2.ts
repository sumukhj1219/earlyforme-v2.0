import { S3Client } from '@aws-sdk/client-s3'
import { env } from '~/env'

export const r2 = new S3Client({
	region: 'auto',
	endpoint: `https://${env.R2_ACCOUNTID}.r2.cloudflarestorage.com`,
	credentials: {
		accessKeyId: env.R2_ACCESS_KEY || '',
		secretAccessKey:env.R2_SECRET || '',
	},
})