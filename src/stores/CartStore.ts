import { defineStore } from 'pinia';
import type { Book } from '@/models/BookModel';
import  type { BookState } from '@/models/BookState';


export const useCartStore = defineStore('CartStore', {
    state: (): BookState  => ({
        loading: false,
        data: []
    }),
    actions: {
        addBook(book: Book) {
            this.loading = true;
            this.data.push(book);
        }
    },
});
