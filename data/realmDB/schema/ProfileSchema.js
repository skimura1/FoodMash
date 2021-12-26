import {ObjectId} from 'bson';

class Profile {
  /**
   *
   * @param {ObjectId} id The id of the user
   * @param {string} name The name of the user
   * @param {string} profilepicture the picture of the user
   * @param {string} food1 The first food choice
   * @param {string} food2 The second food choice
   * @param {string} food3 The third food choice
   */
  constructor({
    id = new ObjectId(),
    name,
    profilepicture,
    food1,
    food2,
    food3,
  }) {
    this._id = id;
    this.name = name;
    this.profilepicture = profilepicture;
    this.food1 = food1;
    this.food2 = food2;
    this.food3 = food3;
  }

  static ProfileSchema = {
    name: 'Profile',
    properties: {
      _id: 'objectId',
      name: 'string',
      profilepicture: 'string',
      food1: 'string',
      food2: 'string',
      food3: 'string',
    },
  };
}

export {Profile};
