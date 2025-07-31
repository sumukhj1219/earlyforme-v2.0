import ManageAssets from "~/components/dashboard/waitlists/ManageAssets"
import { generateMetadata as createMetadata } from '~/components/common/meta/meta'

export const generateMetadata = () => {
  return createMetadata('/assets')
}

const Page = () => {
    return (
        <ManageAssets />
    )
}

export default Page
