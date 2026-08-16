export interface Certification {
  _id: string
  name: string
  issuer: string
  date: string
  certificateImage: {
    asset: {
      _ref: string
      _type: string
    }
  }
  certificateLink?: string
  highlighted?: boolean
}