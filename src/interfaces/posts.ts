type Post = {
  slug: string
  title: string
  excerpt: string
  updatedAt:string
}

export interface IPostProps {
  posts: Post[]
}
