const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({
        name,
      });
      return city;
    } catch (error) {
      console.log("Something went wrong in repository layer.");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in repository layer.");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in repository layer.");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      //below approach also works but wont return updated data
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      //   returning: true,
      // });
      //by below approach we get updated data in below approach
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("Something went wrong in repository layer.");
      throw { error };
    }
  }
  async getAllCities(data) {
    try {
      const cities = await City.findAll(data);
      return cities;
    } catch (error) {
      console.log("Something went wrong in repository layer.");
      throw { error };
    }
  }
}

module.exports = CityRepository;
