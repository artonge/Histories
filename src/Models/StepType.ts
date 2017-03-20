enum StepType {

  // Nothing is required from the user
  None = 0,

  // The user must choose between multiple similar words in english to fill the blank
  Choice,

  // The user must find the mistake
  Mistake,

  // The user must find an anachronisme in the picture
  Anachro,
}

export default StepType
