import StepType from './StepType'

interface Step {
  image: String
  text : String
  type : StepType
  help : String
  choices? : [String]
}

export default Step
