import { dblApi } from "../redux/api";

const qrcodeService = dblApi.enhanceEndpoints({
    addTagTypes: ["qrcodes"]
}).injectEndpoints({
    endpoints: (build) => ({
        generatePlayerCodes: build.mutation({
            query: ({ friendCodes }) => {
                return {
                    url: 'qrcodes',
                    method: 'POST',
                    body: {
                        friendCodes
                    }
                }
            },
            invalidatesTags: ["qrcodes"]
        }),
        getQrCode: build.query({
            query: (friendCode) => `qrcodes?friendCode=${friendCode}`
        })
    })
});

export const {
    useGeneratePlayerCodesMutation,
    useGetQrCodeQuery
} = qrcodeService;