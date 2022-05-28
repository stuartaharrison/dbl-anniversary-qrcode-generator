import { dblApi } from "../redux/api";

const friendsService = dblApi.enhanceEndpoints({
    addTagTypes: ["friends"]
}).injectEndpoints({
    endpoints: (build) => ({
        fetchFriends: build.query({
            query: () => `friends`,
            providesTags: (result, err, arg) =>
                result ? [result.map(({ id }) => ({ type: 'friends', id }))] : ['friends']
        })
    })
});

export const {
    useFetchFriendsQuery
} = friendsService;