interface MorningRoutine {
  whatShouldIDoNow(): string
}

export class MorningRoutineImplementation implements MorningRoutine {
  constructor(private readonly currentMoment: Date) {}

  whatShouldIDoNow() {
    if (this.currentMoment.getHours() >= 6 && this.currentMoment.getHours() < 7) return "Do exercise"

    if (this.currentMoment.getHours() >= 7 && this.currentMoment.getHours() < 8) return "Read and study"

    return "Have breakfast"
  }
}
