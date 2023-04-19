<template>
  {{ pathUrlString }} - Redirecting...
</template>

<script setup>
import { useLoadLinks } from '@/firebase'
import {ref} from 'vue'
import router from '../router'

const props = defineProps(['pathMatch'])
const pathUrlString = '/' + props.pathMatch.join('/')

useLoadLinks().then(result => {
  const redirectUrl = result.find(({ path }) => path === pathUrlString)

  console.log(redirectUrl)
  if (redirectUrl) window.location.href = redirectUrl.url;
  else router.push("/404");
})
</script>