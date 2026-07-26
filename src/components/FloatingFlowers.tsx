import { motion } from 'framer-motion';

interface FloatingFlower {
  id: number;
  delay: number;
  duration: number;
  size: string;
  color: string;
  left: string;
  startY: number;
}

const floatingFlowers: FloatingFlower[] = [
  {
    id: 1,
    delay: 0,
    duration: 8,
    size: 'w-8 h-8',
    color: 'bg-rose/40',
    left: '5%',
    startY: 0,
  },
  {
    id: 2,
    delay: 1.2,
    duration: 9,
    size: 'w-6 h-6',
    color: 'bg-lotus/35',
    left: '15%',
    startY: 0,
  },
  {
    id: 3,
    delay: 2.4,
    duration: 10,
    size: 'w-7 h-7',
    color: 'bg-gold/30',
    left: '25%',
    startY: 0,
  },
  {
    id: 4,
    delay: 0.6,
    duration: 8.5,
    size: 'w-5 h-5',
    color: 'bg-pink/35',
    left: '35%',
    startY: 0,
  },
  {
    id: 5,
    delay: 1.8,
    duration: 9.5,
    size: 'w-7 h-7',
    color: 'bg-rose/30',
    left: '55%',
    startY: 0,
  },
  {
    id: 6,
    delay: 0.3,
    duration: 8.2,
    size: 'w-6 h-6',
    color: 'bg-lotus/40',
    left: '65%',
    startY: 0,
  },
  {
    id: 7,
    delay: 2.1,
    duration: 9.8,
    size: 'w-5 h-5',
    color: 'bg-gold/25',
    left: '75%',
    startY: 0,
  },
  {
    id: 8,
    delay: 0.9,
    duration: 10.2,
    size: 'w-6 h-6',
    color: 'bg-pink/30',
    left: '85%',
    startY: 0,
  },
  {
    id: 9,
    delay: 1.5,
    duration: 9.2,
    size: 'w-7 h-7',
    color: 'bg-rose/25',
    left: '45%',
    startY: 0,
  },
];

export default function FloatingFlowers() {
  return (
    <div className='fixed inset-0 pointer-events-none overflow-hidden'>
      {floatingFlowers.map((flower) => (
        <motion.div
          key={flower.id}
          aria-hidden='true'
          className={`absolute ${flower.size} ${flower.color} rounded-full blur-md`}
          style={{ left: flower.left, bottom: '-50px' }}
          animate={{
            y: [-50, -window.innerHeight - 100],
            x: [0, Math.sin(flower.id) * 80 - 40, 0],
            opacity: [0, 0.6, 0],
            rotate: [0, 360, 360],
          }}
          transition={{
            duration: flower.duration,
            repeat: Infinity,
            delay: flower.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
