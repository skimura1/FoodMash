import {ObjectId} from 'bson';

class Food {
  /**
   *
   * @param {string} name The name of the food
   * @param {string} image The image file location
   */
  constructor({name, image}) {
    this.name = name;
    this.image = image;
  }

  static FoodSchema = {
    name: 'Food',
    properties: {
      name: 'string',
      image: 'string',
    },
  };
}

export {Food};
