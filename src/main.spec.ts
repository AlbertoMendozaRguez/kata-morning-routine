import { describe, expect, it } from "vitest"
import { MorningRoutineImplementation } from "./main.js"

describe("Default test", () => {
  it("display Do exercise between 06:00 and 06:59", () => {
    const fakeDate = new Date().setHours(6)
    const morningRoutine = new MorningRoutineImplementation(new Date(fakeDate))
    const result = morningRoutine.whatShouldIDoNow()

    expect(result).toEqual("Do exercise")
  })

  it("display Read and study between 07:00 and 07:59", () => {
    const fakeDate = new Date().setHours(7)
    const morningRoutine = new MorningRoutineImplementation(new Date(fakeDate))
    const result = morningRoutine.whatShouldIDoNow()

    expect(result).toEqual("Read and study")
  })

  it("display Have breakfast between 08:00 and 08:59", () => {
    const fakeDate = new Date().setHours(8)
    const morningRoutine = new MorningRoutineImplementation(new Date(fakeDate))
    const result = morningRoutine.whatShouldIDoNow()

    expect(result).toEqual("Have breakfast")
  })

  it("display No activity outside the defined time range", () => {
    const morningRoutine = new MorningRoutineImplementation(new Date())
    const result = morningRoutine.whatShouldIDoNow()

    expect(result).toEqual("No activity")
  })

  it("display Do exercise and Take a shower between 06:45 to 06:59", () => {
    const morningRoutine = new MorningRoutineImplementation(new Date())
    const result = morningRoutine.whatShouldIDoNow()

    expect(result).toEqual("Do exercise,Take a shower")
  })
})
