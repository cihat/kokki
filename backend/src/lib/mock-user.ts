import { faker } from '@faker-js/faker';
import { IUser, UserEnum } from '../interfaces/Models';

function randomUser() {
  return {
    username: faker.internet.userName(),
    age: faker.number.int({ min: 18, max: 75 }),
    // favoriteFoods: foods[faker.number.int({min: 0, max: foods.length})],
    // previousFoods: foods[faker.number.int({min: 0, max: foods.length})],
    type: UserType[faker.number.int({ min: 0, max: UserType.length })],
    // ingredients: [faker.food.ingredient(), faker.food.ingredient(), faker.food.ingredient()]
  }
}

export function createUser(count = 10) {
  const mockUsers: any = []

  Array(count).fill(null).map((item, index) => {
    mockUsers.push(randomUser())
  })

  return mockUsers
}

const UserType = [
  'VEGETARIAN',
  'VEGAN',
  'MEAT_EATER',
  'FLEXITARIAN',
  'PESCETARIAN',
  'FRUITARIAN',
  'RAW_FOODIST',
  'BREATHARIAN',
  'PALEO_DIET',
  'KETO_DIET',
  'ATKINS_DIET',
  'ZONE_DIET',
  'DUKAN_DIET',
  'SOUTH_BEACH_DIET',
  'VOLUMETRICS',
  'WEIGHT_WATCHERS',
  'JENNY_CRAIG',
  'NUTRISYSTEM',
  'RAW_FOOD',
  'MEDITERRANEAN'
]

