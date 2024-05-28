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
  schedule: string
  date:string
  socials: {
    icon: string
    link: string
  }[]
  jobs: {
    postJob: string
    nameCompany: string
    monthStart: string,
    yearStart: string
    monthEnd: string,
    yearEnd: string
  }[]
  education: {
    institution: string
    levelEducation: string
    faculty: string
    speciality: string
    yearEndEducation: string
  }[]
  trainingCourses: {
    yearEnd: string
    nameCompany: string
    nameCourse: string
  }[]

  languages:{
    nameLanguage:string
    levelLanguage:string
  }[]
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
  scheduleArray: '',
  email: '',
  phoneNumber: '',
  interesting: '',
  schedule: '',
  socials: [],
  jobs: [],
  education: [],
  trainingCourses: [],
  languages:[],
  date:''
}
