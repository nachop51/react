export function getRandomColor() {
  return Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')
}

export function getNewColor() {
  const color = getRandomColor()

  return {
    color,
    values: {
      r1: parseInt(color.slice(0, 1), 16),
      r2: parseInt(color.slice(1, 2), 16),
      g1: parseInt(color.slice(2, 3), 16),
      g2: parseInt(color.slice(3, 4), 16),
      b1: parseInt(color.slice(4, 5), 16),
      b2: parseInt(color.slice(5, 6), 16),
    },
  }
}

export function measureDistance(n1: number, n2: number) {
  if (n1 === n2) return 'exact'

  const res = n1 - n2

  if (res < 0) {
    if (res < -3) {
      return 'higher'
    }
    return 'bitHigher'
  }

  if (res > 3) {
    return 'lower'
  }
  return 'bitLower'
}
