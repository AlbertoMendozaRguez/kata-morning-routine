import { describe, expect, it } from "vitest"
import { MorningRoutine } from "./main.js"

describe("Default test", () => {
  it("display Do exercise between 06:00 and 06:59", () => {
    const morningRoutine = new MorningRoutine()
    const result = morningRoutine.whatShouldIDoNow()

    expect(result).toEqual("Do exercise")
  })

  it("display Read and study between 07:00 and 07:59", () => {
    const morningRoutine = new MorningRoutine()
    const result = morningRoutine.whatShouldIDoNow()

    expect(result).toEqual("Read and study")
  })
})
