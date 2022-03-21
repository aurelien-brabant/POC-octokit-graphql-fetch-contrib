import { Router } from 'express'
import { graphql } from '@octokit/graphql'

const router = Router()

const authenticatedGraphql = graphql.defaults({
  headers: {
    authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
  },
})

router.use((req, res, next) => {
  const { owner, repo } = req.query

  if (!owner || !repo) {
    return res.status(400).json({
      message: 'This endpoint requires a owner and repo query params.',
    })
  }
  next()
})

/**
 * Fetch generic information about the specified repository
 */

router.get('/', async (req, res) => {
  const { owner, repo } = req.query
  const { repository } = await authenticatedGraphql(
    `
      query repoName($owner: String!, $repo: String!) {
          repository(owner:$owner, name:$repo) {
            name,
            stargazerCount
          }
       }
    `,
    {
      owner,
      repo,
    }
  )
  return res.status(200).json(repository)
})

router.get('/issues', async (req, res) => {
  return res.status(200).json({
    message: 'Hi there, welcome to this amazing POC!',
  })
})

export default router
