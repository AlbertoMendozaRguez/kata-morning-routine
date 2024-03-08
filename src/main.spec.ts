import { describe, expect, it } from "vitest"

describe("Default test", () => {
  it("display Do exercise between 06:00 and 06:59", () => {
    const morningRoutine = new MorningRoutine()
    const result = morningRoutine.whatShouldIDoNow()

    expect(result).toEqual("Do exercise")
  })
})
