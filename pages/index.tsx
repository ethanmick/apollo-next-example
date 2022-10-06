import { gql, useQuery } from '@apollo/client'
import Link from 'next/link'
import Layout from '../components/Layout'
import {
  AnExampleQuery,
  AnExampleQueryVariables
} from '../lib/graphql/generated'

const exampleQuery = gql`
  query AnExample($id: Int!) {
    example(id: $id) {
      name
    }
  }
`

const IndexPage = () => {
  const { data } = useQuery<AnExampleQuery, AnExampleQueryVariables>(
    exampleQuery,
    {
      variables: {
        id: 1
      }
    }
  )
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <div>{data?.example.name}</div>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}

export default IndexPage
