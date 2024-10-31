import type { Book } from '@/models/BookModel'

export interface CartState{
    data: Book[],
    total: number,
    totalBooks: number
}
