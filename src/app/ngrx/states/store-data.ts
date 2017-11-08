export interface StoreData {
    user: {
        id: number;
        name: string;
    }
}

export const INIT_STORE_DATA: StoreData = {
    user: {
        id: 1,
        name: 'Vladimir'
    }
}