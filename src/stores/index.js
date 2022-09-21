import {defineStore} from 'pinia'

export const $USE_INDEX_STORE = defineStore('index', {
    state: () => ({user_token: 'SOME_UNIQUE_TOKEN'}),
    actions: {},
})