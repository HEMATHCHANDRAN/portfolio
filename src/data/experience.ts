export type ExperienceEntry = {
  role: string
  company: string
  location: string
  start: string
  end: string
  bullets: string[]
  imageUrl?: string
}

export const experience: ExperienceEntry[] = [
  {
    role: 'Embedded Systems Engineer (Intern)',
    company: 'Innovate Engineering Products',
    location: 'Hosur, Tamil Nadu',
    start: 'January 2025',
    end: 'Present',
    bullets: [
      'Developed IoT monitoring solutions using ESP32, ESP32-CAM, Raspberry Pi, and STM32 with data communication to personalized dashboards, Blynk, and ThingSpeak.',
      'Prototyped AI-based predictive analytics for system optimization on Raspberry Pi.',
      'Instructed 1,000+ students in Embedded IoT development: hardware (ESP32, STM32), embedded programming (C/Python), Raspberry Pi OS, and project guidance.',
      'Served as Primary Technical Reviewer for final-year projects (computer vision implementations).',
      'Built automated alert systems using WhatsApp/Email APIs on Raspberry Pi for real-time safety and fault notifications.',
    ],
    imageUrl: '', // add later
  },
  {
    role: 'IoT In-Planting Hands-on Training',
    company: 'Enthu Technology Solution India Pvt. Ltd',
    location: 'Coimbatore, Tamil Nadu',
    start: 'April 2023',
    end: '',
    bullets: [
      'Development of sensor connectivity projects with ESP32.',
      'Focused on wireless communication & real-time data.',
    ],
    imageUrl: '', // add later
  },
  {
    role: 'Arduino Training Program',
    company: 'Internshala',
    location: '',
    start: '2023',
    end: '',
    bullets: [
      'Experienced in Arduino programming and hardware interfacing.',
      'Developed projects using sensors, actuators, and real-time logic.',
    ],
  },
]
