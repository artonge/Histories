import StepType from './StepType'

interface Step {
  image    : String
  text     : String
  type     : StepType
  help     : string
  choices? : [string]
  answer?  : number
}

export default Step
