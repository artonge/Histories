import Step from '../../Models/Step'
import Story from '../../Models/Story'

import AppLogger from '../../Services/AppLogger'

const list: [Story] = [
  require('./arthur.json'),
  require('./karen.json'),
]

class StoryFactory {

  public all: [Story]

  constructor(list: [Story]) {
    AppLogger.info('Create StoryFactory')
    this.all = list
  }

  public get(storyID: String) {
    return (this.all as any).find((story: Story)=> story.ID === storyID)
  }
}


export default new StoryFactory(list)
