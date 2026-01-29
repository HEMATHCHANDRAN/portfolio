export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Microcontrollers & Hardware',
    items: ['Raspberry Pi', 'ESP32 & ESP32-CAM', 'Arduino', 'STM32'],
  },
  {
    title: 'Communication Protocols',
    items: ['WiFi', 'BLE', 'MQTT', 'I2C', 'SPI', 'UART', 'CAN'],
  },
  {
    title: 'Programming & Languages',
    items: ['Embedded C', 'Python', 'FreeRTOS', 'HTML/CSS/JS (Basic)'],
  },
  {
    title: 'Software & Development Tools',
    items: ['Arduino IDE', 'Thonny IDE', 'STM32CubeIDE', 'MATLAB & Simulink', 'Proteus', 'Altium Designer', 'VS Code'],
  },
  {
    title: 'Cloud, IoT & Deployment',
    items: ['ThingSpeak', 'Blynk', 'Firebase', 'Vercel', 'GitHub', 'HiveCloud', 'Google Lab for AI Models'],
  },
]
