export interface Project {
  _id: string
  title: string
  image: {
    asset: {
      _ref: string
      _type: string
    }
  }
  description: string
  link?: string
  tags?: string[]
}