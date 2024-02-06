import Chance from "chance";

const chance = Chance();

const character = {
  firstName: chance.first(),
  lastName: chance.last(),
};
export default function (request, response) {
  response.status(200).json(character);
}
