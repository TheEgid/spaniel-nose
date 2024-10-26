import { combine, createApi, createEffect, createStore, restore } from "effector";
import { apiRoot } from "src/services/api";

export interface TRegisteredFieldsForCard {
    id: string,
    userId: string,
    createdAt: string,
    updatedAt: string,
    imageA1Name: string,
    imageB1Name: string,
    imageB2Name: string,
    imageC1Name: string,
    imageC2Name: string,
    imageC3Name: string,
    noteHead: string,
    noteMain: string,
    noteBottom: string
}

export interface TBlogItemPage {
    items: TRegisteredFieldsForCard[],
    totalPages: number
}

interface TInitialState {
    isShown: boolean,
    blogId?: string,
    blogItems?: TBlogItemPage
}

const initialState: TInitialState = {
    isShown: false,
};

export const fetchBlogItemsWithPaginationFx = createEffect(
    async (params: { page: number, limit: number }): Promise<TBlogItemPage> =>
        apiRoot.get(`blog-item/paginated?page=${params.page}&limit=${params.limit}`).json(),
);

export const $blogItemStorage = createStore<TInitialState>(initialState);

export const $blogItemStorageApi = createApi($blogItemStorage, {
    blogItemUpdateFx: (state, params: { isShown: boolean, blogId?: string }) => ({
        ...state,
        isShown: params.isShown,
        blogId: params.blogId,
    }),
});

export const $blogItemsWithPaginationStore = $blogItemStorage.on(fetchBlogItemsWithPaginationFx.doneData, (state, data: TBlogItemPage) => ({
    ...state,
    blogItems: data,
}));

const $error = restore<Error>(fetchBlogItemsWithPaginationFx.failData, null);

export const $blogItemsWithPaginationStatus = combine({
    loading: fetchBlogItemsWithPaginationFx.pending,
    error: $error,
    data: $blogItemsWithPaginationStore,
});

// persist({ store: $blogItemsWithPaginationStore, key: "blogItemsWithPaginationStore" });
