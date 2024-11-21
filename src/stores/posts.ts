import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import { type Post, type PostUpdateDto } from '@/shared/types/posts'

const API_URL = 'https://jsonplaceholder.typicode.com' //import.meta.env.VUE_APP_API_URL

export const usePostsStore = defineStore('postsStore', () => {
  const posts = ref<Array<Post>>([])
  const isLoading = ref(false)

  async function getPosts(): Promise<Array<Post> | void> {
    isLoading.value = true

    try {
      posts.value = await axios.get(`${API_URL}/posts`).then((res) => res.data)
    } catch (e) {
      console.log(e)
    } finally {
      isLoading.value = false
    }
  }

  async function getPost(id: string): Promise<Post | void> {
    isLoading.value = true

    try {
      return axios.get(`${API_URL}/posts/${id}`).then((res) => res.data)
    } catch (e) {
      console.log(e)
    } finally {
      isLoading.value = false
    }
  }

  async function createPost(post: PostUpdateDto): Promise<Post | void> {
    isLoading.value = true

    try {
      return axios.post(`${API_URL}/posts`, post)
    } catch (e) {
      console.log(e)
    } finally {
      isLoading.value = false
    }
  }

  async function updatePost(post: PostUpdateDto, id: string): Promise<Post | void> {
    isLoading.value = true

    try {
      return axios.put(`${API_URL}/posts/${id}`, post)
    } catch (e) {
      console.log(e)
    } finally {
      isLoading.value = false
    }
  }

  async function deletePost(id: string | number): Promise<Post | void> {
    isLoading.value = true

    try {
      return axios.delete(`${API_URL}/posts/${id}`)
    } catch (e) {
      console.log(e)
    } finally {
      isLoading.value = false
    }
  }

  function filteredPostsById(id: Post['id']) {
    posts.value = posts.value.filter((post) => post.id !== id)
  }

  return {
    getPosts,
    createPost,
    getPost,
    updatePost,
    deletePost,
    filteredPostsById,
    posts,
  }
})
