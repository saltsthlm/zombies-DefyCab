import { ok } from "node:assert/strict"
import { test } from "node:test"

const createRoom = (capacity: number) => {
  const _capacity = capacity
  const _zombies: string[] = []

  return {
    isFull: () => {
      if (_capacity === 0) {
        return true
      }
      if (_capacity > _zombies.length) {
        return true
      }
      return false
    },
  }
}

test("room is not full", () => {
  const room = createRoom(0)

  const isRoomFull = room.isFull()

  ok(isRoomFull)
})

test("empty room that fits one zombie is not full", () => {
  const room = createRoom(1)

  const emptyRoomNotFull = room.isFull()

  ok(emptyRoomNotFull)
})

test.skip("empty room cannot fit any zombies", () => {})

test.skip("one-roomer becomes full when a zombie is added", () => {})

test.skip("two-roomer is not full when a zombie is added", () => {})

test.skip("second zombie consumes first zombie when added to a one-roomer", () => {})

// You are free to add more tests that you think are relevant!
