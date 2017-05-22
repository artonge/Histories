import StepType from './StepType'

interface Step {
  image    : String
  text     : String
  type     : StepType
  help     : string
  options? : [string]
  answer?  : number
}

export default Step
