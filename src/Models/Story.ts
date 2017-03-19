import Step from './Step'

interface Story {
  ID: String
  name: String
  path: String
  steps: [Step]
}

export default Story
