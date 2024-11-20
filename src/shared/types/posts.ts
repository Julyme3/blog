export type Post = {
  body: string
  id: number
  title: string
  userId: number
}

export type PostUpdateDto = Pick<Post, 'title' & 'body'>
