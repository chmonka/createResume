export interface Candidate {
  desiredPosition?: string
  lastName?: string
  firstName?: string
  middleName?: string
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
  date: string
  socials: {
    name: string
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
    formEducation: string
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
  languages: {
    nameLanguage: string
    levelLanguage: string
  }[]
  photoProfile: string
}

export const defaultValueForm: Partial<Candidate> = {
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
  languages: [],
  date: '',
  photoProfile: '',


}



