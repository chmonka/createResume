export interface Candidate {
  desiredPosition: string
  lastName: string
  firstName: string
  middleName: string
  date: string
  month: string
  year: string
  city: string
  money: number
  currency: string
  citizenship: string
  scheduleArray: string
  phoneNumber: string
  email: string
  interesting: string
  schedule:string
  socialIcon: string
  link:string
}

export const defaultValueForm: Candidate = {
  desiredPosition: '',
  lastName: '',
  firstName: '',
  middleName: '',
  date: '',
  month: '',
  year: '',
  city: '',
  money: 0,
  currency: '',
  citizenship: '',
  scheduleArray:'',
  email:'',
  phoneNumber:'',
  interesting:'',
  schedule:'',
  socialIcon:'',
  link:''
}
