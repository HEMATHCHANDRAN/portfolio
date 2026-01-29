export type EducationEntry = {
  degree: string
  institution: string
  location?: string
  details?: string
}

export const education: EducationEntry[] = [
  {
    degree: 'B.E. ECE',
    institution: 'Dr. N.G.P Institute of Technology',
    location: 'Coimbatore',
    details: '8.06 CGPA (till 6th Sem)',
  },
  {
    degree: 'HSE — 79% · SSLC — 71%',
    institution: 'M.R.S. Matric Hr. Sec School',
    location: 'Gobichettipalayam, Erode',
  },
]
