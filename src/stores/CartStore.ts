import { defineStore } from 'pinia';
import type { CartState } from '@/models/CartModel'
import type { Book } from '@/models/BookModel'

export const useCartStore = defineStore({
    id: 'cart',
    state: (): CartState => ({
        data: [],
        total: 0,
        totalBooks: 0
    }),
    actions: {
        addBook(book: Book): void{
            this.data.push(book);
            this.totalBooks++,
            this.total += book.price
        },
        removeBook(book: Book): void{
            this.data = this.data.filter((item) => item.id !== book.id)
            this.totalBooks--
            this.total -= book.price
        },
        totalPrice(): number{
            return this.total
        },
        allBooks(): number{
            return this.totalBooks
        }
    },
});
