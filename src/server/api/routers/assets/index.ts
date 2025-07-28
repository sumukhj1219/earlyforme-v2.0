import { createTRPCRouter } from "../../trpc";
import { deleteAsset } from "./procedures/deleteAsset";
import { getAssets } from "./procedures/getAssets";
import { uploadAsset } from "./procedures/uploadAsset";

export const assetRouter = createTRPCRouter({
    uploadAsset,
    getAssets,
    deleteAsset
})