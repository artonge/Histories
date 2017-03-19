import Step from '../../Models/Step'
import Story from '../../Models/Story'

const list: [Story] = [
  require('./arthur.json'),
]

class StoryFactory {

  public all: [Story]

  constructor(list: [Story]) {
    console.info('Create StoryFactory')
    this.all = list
  }

  public get(storyID: String) {
    return (this.all as any).find((story: Story)=> story.ID === storyID)
  }
}


export default new StoryFactory(list)
