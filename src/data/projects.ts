export type ProjectItem = {
  id: string
  title: string
  period: string
  type: string
  tech: string[]
  brief?: string
  imageUrl?: string
}

export const projects: ProjectItem[] = [
  {
    id: 'swarm',
    title: 'Digital-Twin Enabled Swarm Robotics for Payload Integrity and Adaptive Task Coordination',
    period: '2025 – Present',
    type: 'Academic Project',
    tech: ['ESP32', 'ESP32-CAM', 'Ultrasonic Sensor', 'Gyro Sensor', 'Hydraulic Pump', 'Custom Website', 'MobileNetV3'],
    brief: 'Swarm robotics with digital-twin validation and adaptive task coordination.',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 'cleantide',
    title: 'CleanTide: Autonomous Waste Collector for Rivers and Shores',
    period: '2025 – Present',
    type: 'TNSCST Grant Project',
    tech: ['Raspberry Pi 4B', 'Raspberry Cam', 'ESP32', 'Custom Website', 'MobileNetV3'],
    brief: 'Autonomous waste collection for rivers and shores using vision-based classification.',
    imageUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 'wheel-dynamo',
    title: 'Wheel-Dynamo Regenerative Charging System for EV Battery',
    period: '2024',
    type: 'Professional POC Project',
    tech: ['BLDC Hub Dynamo', 'Full-Wave Schottky Rectifier', 'MPPT Buck-Boost Converter', 'ESP32 Charge Controller', 'INA226 Current Sensor', 'BMS Protection'],
    brief: 'Regenerative charging from wheel motion for EV batteries.',
    imageUrl: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=800&h=600&fit=crop&q=80',
  },
  {
    id: 'coal-mine',
    title: 'Coal Mine Monitoring and Safety Alert System',
    period: '2024 – 2025',
    type: 'Academic Project',
    tech: ['Zigbee', 'ESP32', 'C', 'DHT11', 'MQ3', 'MQ7'],
    brief: 'Safety monitoring and alerts for mining environments.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop&q=80',
  },
]

export const githubUrl = 'https://github.com/HEMATHCHANDRAN'
