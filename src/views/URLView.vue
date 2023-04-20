<template>
  <div>
    <h1>
      URL Shortener
    </h1>
  </div>
  <table class="table">
      <thead>
        <tr>
          <th scope="col">Path</th>
          <th scope="col">URL</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{path, url} in links">
          <td>{{ path }}</td>
          <td>{{ url }}</td>
          <td>
            <!-- <button class="btn btn-success">Edit</button> -->
            <button class="btn btn-danger" @click="removeLink(path)">Delete</button>
          </td>
        </tr>
        <tr>
          <td><input type="text" class="form-control" placeholder="Path" v-model="path"></td>
          <td><input type="text" class="form-control" placeholder="URL" v-model="url"></td>
          <td>
            <button class="btn btn-primary" @click="addLink">Add New Path</button>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script setup>
import { useLoadLinks, createLink, deleteLink } from '@/firebase'
import {ref} from 'vue'

const links = ref([])
const path = ref('')
const url = ref('')

const addLink = () => {
  const link = {
    path: path.value,
    url: url.value
  }

  createLink(link)
  links.value.push(link)

  path.value = ""
  url.value = ""
}

const removeLink = (path) => {
  deleteLink(path)
  links.value = links.value.filter(function(el) { return el.path != path; });
}

useLoadLinks().then(result => {
  links.value = result; 
  console.log(result)
})

</script>