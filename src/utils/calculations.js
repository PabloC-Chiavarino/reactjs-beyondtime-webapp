export const calculateHeartBeats = (birthDate) => {
  const now = new Date()
  const birth = new Date(birthDate)

  const beatsPerDay = 70 * 60 * 24
  const diffDays = Math.floor((now - birth) / (1000 * 60 * 60 * 24))

  return diffDays * beatsPerDay
}

export const calculateEarthTurns = (totalBeats) => {
  const earthCircumference = 40075
  const distancePerStep = 0.8

  const distanceCovered = totalBeats * distancePerStep

  return Math.floor(distanceCovered / earthCircumference)
}

export const calculateEnergy = (totalBeats) => {
  const totalEnergyJoules = totalBeats
  const totalEnergyKwh = totalEnergyJoules / 3600 * 1000

  return Math.round(totalEnergyKwh)
}

export const calculateDaysOfPower = (totalEnergy) => {
  const energyPerDay = 7.5
  return Math.round(totalEnergy / energyPerDay)
}

export const calculateCarDistance = (totalEnergy) => {
  const energyPerKm = 18 / 100
  return Math.round(totalEnergy / energyPerKm)
}

export const calculateTotalMinutes = (birthDate) => {
  const now = new Date()
  const birth = new Date(birthDate)

  const diffMinutes = Math.floor((now - birth) / (1000 * 60))

  return diffMinutes
}

export const formatNumber = (num) => {
  return new Intl.NumberFormat('es', { notation: 'compact', compactDisplay: 'long' }).format(num)
}

export const calculateUniverseExpansion = (totalMinutes) => {
  const expansionRate = 4700

  const totalExpansion = totalMinutes * expansionRate

  return totalExpansion
}

export const calculateCollapsedStars = (totalMinutes) => {
  const totalSeconds = totalMinutes * 60
  const collapsedStars = Math.floor(totalSeconds / 30)

  return collapsedStars
}
