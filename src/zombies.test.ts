import { deepEqual } from "node:assert"
import { ok } from "node:assert/strict"
import { test } from "node:test"

const createRoom = (capacity: number) => {
  const _capacity = capacity
  const _zombies: string[] = []

  return {
    isFull: () => {
      // test case "room is not full"
      if (_capacity > _zombies.length) {
        return true
      }
      //test case "empty room that fits one zombie is not full "
      if (_capacity === 1 && _zombies.length === 0) {
        return true
      }
      return false
    },
    addZombie: (zombie: string) => {
      if (_capacity === 0) {
        return
      }
      _zombies.push(zombie)
    },
    getZombies: () => _zombies,
  }
}

test("room is not full", () => {
  const room = createRoom(3)

  const roomisNotFull = room.isFull()

  ok(roomisNotFull)
})

test("empty room that fits one zombie is not full", () => {
  const room = createRoom(1)

  const emptyRoomNotFull = room.isFull()

  ok(emptyRoomNotFull)
})

test("empty room cannot fit any zombies", () => {
  const room = createRoom(0)

  room.addZombie("Loke")

  const numberOfZombies = room.getZombies()

  deepEqual(numberOfZombies, [])
})

test.skip("one-roomer becomes full when a zombie is added", () => {})

test.skip("two-roomer is not full when a zombie is added", () => {})

test.skip("second zombie consumes first zombie when added to a one-roomer", () => {})

// You are free to add more tests that you think are relevant!
