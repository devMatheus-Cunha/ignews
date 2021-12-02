type Post = {
  slug: string
  title: string
  excerpt: string
  updatedAt:string
}

export interface IPostsProps {
  posts: Post[]
}
