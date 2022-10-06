import { QueryExampleArgs } from './generated'

const example = (parent: never, { id }: QueryExampleArgs, ctx: any) => {
  if (id === 1) {
    return {
      name: 'It worked!'
    }
  }
  return {
    name: 'No name'
  }
}

export const resolvers = {
  Query: {
    example
  }
}
