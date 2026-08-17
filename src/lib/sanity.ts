import { createClient, type SanityClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'cq69q11x'
const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

let _client: SanityClient | null = null
let _clientWithToken: SanityClient | null = null
let _builder: ReturnType<typeof imageUrlBuilder> | null = null

function getClient(): SanityClient {
  if (!_client) {
    _client = createClient({
      projectId: PROJECT_ID,
      dataset: DATASET,
      apiVersion: '2024-05-22',
      useCdn: true,
    })
  }
  return _client
}

function getClientWithToken(): SanityClient {
  if (!_clientWithToken) {
    _clientWithToken = createClient({
      projectId: PROJECT_ID,
      dataset: DATASET,
      apiVersion: '2024-05-22',
      useCdn: false,
      token: process.env.SANITY_API_TOKEN,
    })
  }
  return _clientWithToken
}

export function getSanityClient() {
  return getClient()
}

export function getSanityClientWithToken() {
  return getClientWithToken()
}

export function urlFor(source: any) {
  if (!_builder) {
    _builder = imageUrlBuilder(getClient())
  }
  return _builder.image(source)
}
