import http from '../api'
import type { Post, PostUpdateDto } from './types'

async function getPosts() {
  return await http.get<Post[]>('posts')
}

async function getPost(id: string) {
  return await http.get<Post>(`/posts/${id}`)
}

async function deletePost(id: number | string) {
  return await http.delete<Post>(`posts/${id}`)
}

async function createPost(post: PostUpdateDto) {
  return await http.post<Post>('posts', post)
}

async function updatePost(post: PostUpdateDto, id: string) {
  return await http.put<Post>(`/posts/${id}`, post)
}

export default {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
}
