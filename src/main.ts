interface MorningRoutine {
  whatShouldIDoNow(): string
}

export class MorningRoutineImplementation implements MorningRoutine {
  constructor(private readonly currentMoment: Date) {}

  whatShouldIDoNow() {
    const activities: string[] = []

    if (this.currentMoment.getHours() >= 6 && this.currentMoment.getHours() < 7) activities.push("Do exercise")

    if (this.currentMoment.getHours() >= 7 && this.currentMoment.getHours() < 8) activities.push("Read and study")

    if (this.currentMoment.getHours() >= 8 && this.currentMoment.getHours() < 9) activities.push("Have breakfast")

    if (!activities.length) activities.push("No activity")

    return activities.join(",")
  }
}
