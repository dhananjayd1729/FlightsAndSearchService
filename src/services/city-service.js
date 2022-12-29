const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }

  async createCity(data) {
    try {
      const city = this.cityRepository.createCity(data);
      return city;
    } catch (error) {
      console.log("Something went wrong in service layer.");
      throw { error };
    }
  }
  async deleteCity(cityId) {
    try {
      const response = this.cityRepository.deleteCity(cityId);
      return response;
    } catch (error) {
      console.log("Something went wrong in service layer.");
      throw { error };
    }
  }
  async getCity(cityId) {
    try {
      const city = this.cityRepository.getCity(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in service layer.");
      throw { error };
    }
  }
  async updateCity(cityId, data) {
    try {
      const city = await this.cityRepository.updateCity(cityId, data);
      return city;
    } catch (error) {
      console.log("Something went wrong in service layer.");
      throw { error };
    }
  }

  async getAllCities(data) {
    try {
      const cities = await this.cityRepository.getAllCities(data);
      return cities;
    } catch (error) {
      console.log("Something went wrong in service layer.");
      throw { error };
    }
  }
}

module.exports = CityService;
