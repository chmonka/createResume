export interface Candidate {
  desiredPosition: string
  lastName: string
  firstName: string
  middleName: string
  dateOfBirth: string
  city: string
  money: number
  currency: string
}

export const defaultValueForm: Candidate = {
  desiredPosition: '',
  lastName: '',
  firstName: '',
  middleName: '',
  dateOfBirth: '',
  city: '',
  money: 0,
  currency: '',
}
