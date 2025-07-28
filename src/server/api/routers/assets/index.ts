import { createTRPCRouter } from "../../trpc";
import { uploadAsset } from "./procedures/uploadAsset";

export const assetRouter = createTRPCRouter({
    uploadAsset
})