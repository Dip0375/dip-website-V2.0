import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: 'cq69q11x',
  dataset: 'production',
  apiVersion: '2024-05-22',
  useCdn: true,
  token: 'skxp7IoocunogEXQBsVa46yC1MzJDUBOWUHTxzbZOoClpyHZLf6xupOg1eMjVSB3vor1fWjAwBFi2kE8P5Oa7K1bcl1DU3iG6I1RVSApjouRw3YTPHTTF4AzcH2MxCyD7vn9D42CMOGRLqv3kSnHVjIpFDmMEkXvpqeoAq2n4wRcoyiAybis'
})


const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}