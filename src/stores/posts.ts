import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import { type Post } from '@/shared/types/posts';

const API_URL = 'https://jsonplaceholder.typicode.com';//import.meta.env.VUE_APP_API_URL

export const usePostsStore = defineStore('postsStore', () => {
  const posts = ref<Array<Post>>([]);
  const isLoading = ref(false);

  async function getPosts(): Promise<Array<Post> | void> {
    isLoading.value = true;

    try {
      posts.value = await axios.get(`${API_URL}/posts?_page=0&_limit=10`).then(res => res.data);
    } catch(e) {
      console.log(e);
    } finally {
      isLoading.value = false;
    }
  }

  return {
    getPosts,
    posts,
  };
});
