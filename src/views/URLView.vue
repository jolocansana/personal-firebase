<template>
  <div v-for="{id, path, url} in links" :key="id">
    <span>PATH: {{path}}</span> <br>
    <span>URL: {{ url }}</span> <br>
    <br>
  </div>
</template>

<script setup>
import { useLoadLinks } from '@/firebase'
import {ref} from 'vue'

const links = ref([])
useLoadLinks().then(result => links.value = result)
</script>