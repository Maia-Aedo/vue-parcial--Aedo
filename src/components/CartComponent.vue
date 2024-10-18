<script setup lang="ts">
import { useCartStore } from '@/stores/CartStore';
import { computed } from 'vue'

const cartStore = computed(useCartStore());

</script>

<template>
    <book>
        <div v-for="book in Book" :key="book.id">
            {{ cartStore }}
        </div>
    </book>
</template>

<style lang="css">

</style>