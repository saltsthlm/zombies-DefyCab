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
      if(_capacity === 0 && _zombies.length > 0) {
        return true
      }
      return false
    },
  }
}

test("room is not full", () => {
  const notFullRoom = createRoom(0)

  const isRoomFull = notFullRoom.isFull()

  ok(isRoomFull)
})

test("empty room that fits one zombie is not full", () => {
  const room = createRoom(1)

  const emptyRoomNotFull = room.isFull()

  ok(emptyRoomNotFull)
})

test.skip("empty room cannot fit any zombies", () => {
  // a room with zero capacity can't fit any zombies?
  const emptyRoom = createRoom(0)

  const emptyRoomFull = emptyRoom.isFull()
})

test.skip("one-roomer becomes full when a zombie is added", () => {})

test.skip("two-roomer is not full when a zombie is added", () => {})

test.skip("second zombie consumes first zombie when added to a one-roomer", () => {})

// You are free to add more tests that you think are relevant!
