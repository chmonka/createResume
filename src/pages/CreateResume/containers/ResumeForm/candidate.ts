export interface Candidate {
  desiredPosition: string
  lastName: string
  firstName: string
  middleName: string
  day: string
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
  socialIcon: string[]
  link:string[]
  monthStartWorking:string
  yearStartWorking:string
  monthEndWorking:string
  yearEndWorking:string
  postJob: string
  nameCompany: string
  yearEndEducation:string
  faculty: string
  speciality:string
  institution:string
  levelEducation: string
}

export const defaultValueForm: Candidate = {
  desiredPosition: '',
  lastName: '',
  firstName: '',
  middleName: '',
  day: '',
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
  socialIcon:[],
  link:[],
  yearStartWorking:'',
  yearEndWorking:'',
  monthStartWorking:'',
  monthEndWorking:'',
  nameCompany:'',
  postJob:'',
  yearEndEducation:'',
  faculty:'',
  speciality:'',
  institution:'',
  levelEducation:''
}
