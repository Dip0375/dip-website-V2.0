export interface Education {
  _id: string
  degree: string
  fieldOfStudy?: string
  institution: string
  institutionLink?: string
  institutionLogo?: {
    asset: {
      _ref: string
      _type: string
    }
  }
  duration?: string
}
