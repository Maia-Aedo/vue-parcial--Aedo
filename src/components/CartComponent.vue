<script setup lang="ts">
import { useCartStore } from '@/stores/CartStore';
import { reactive } from 'vue';

const cartStore = useCartStore();

const cart = reactive(cartStore)

</script>

<template>
    <div class="wrapper">
        <div v-for="book in cart.data" :key="book.id" class="book">
            <h3 class="book-info">{{ book.title }}, {{ book.author }}</h3>
            <p class="price">${{ book.price }}</p>
            <button @click="cart.removeBook(book)" class="delete">Eliminar libro</button>
        </div>
        <div class="info">
            <h3 id="total-price">Precio final: ${{ cart.totalPrice() }}</h3>
            <h3 id="total-books">{{ cart.allBooks() }} libros en su carrito</h3>
        </div>
    </div>
</template>

<style scoped>
.book {
    display: row;
    flex-wrap: wrap;
    padding: 13px;
    border: 1px solid white;
    background: rgba(219, 218, 218, 0.534);
    text-align: center;
}

button {
    margin: 3px;
    padding: 6px;
    border: 1px solid black;
    border-radius: 5px;
}

.info {
    text-align: center;
    margin-top: 100px
}
</style>