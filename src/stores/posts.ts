import { ref } from 'vue'
import { defineStore } from 'pinia'
import { API } from '@/shared/services'
import type { APIResponse } from '@/shared/services/types'
import type { Post, PostUpdateDto } from '@/shared/services/posts/types'

export const usePostsStore = defineStore('postsStore', () => {
  const posts = ref<Post[]>([])
  const isLoading = ref(false)

  async function getPosts(): Promise<APIResponse<null>> {
    isLoading.value = true
    try {
      const { status, data } = await API.posts.getPosts()

      if (status === 200) {
        posts.value = data

        return {
          success: true,
          content: null,
        }
      }
    } finally {
      isLoading.value = false
    }

    return {
      success: false,
      content: null,
      status: 400,
    }
  }

  async function getPost(id: string): Promise<APIResponse<Post | null>> {
    isLoading.value = true

    try {
      const { status, data } = await API.posts.getPost(id)

      if (status === 200) {
        return {
          success: true,
          content: data,
        }
      }
    } finally {
      isLoading.value = false
    }

    return {
      success: false,
      content: null,
      status: 400,
    }
  }

  async function createPost(post: PostUpdateDto): Promise<APIResponse<Post | null>> {
    isLoading.value = true

    try {
      const { status, data } = await API.posts.createPost(post)

      if (status === 200) {
        return {
          success: true,
          content: data,
        }
      }
    } finally {
      isLoading.value = false
    }

    return {
      success: false,
      content: null,
      status: 400,
    }
  }

  async function updatePost(post: PostUpdateDto, id: string): Promise<APIResponse<Post | null>> {
    isLoading.value = true

    try {
      const { status, data } = await API.posts.updatePost(post, id)

      if (status === 200) {
        return {
          success: true,
          content: data,
        }
      }
    } finally {
      isLoading.value = false
    }

    return {
      success: false,
      content: null,
      status: 400,
    }
  }

  async function deletePost(id: string | number): Promise<APIResponse<Post | null>> {
    isLoading.value = true

    try {
      const { status, data } = await API.posts.deletePost(id)

      if (status === 200) {
        return {
          success: true,
          content: data,
        }
      }
    } finally {
      isLoading.value = false
    }

    return {
      success: false,
      content: null,
      status: 400,
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
