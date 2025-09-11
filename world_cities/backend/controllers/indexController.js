import { fetchCountries } from "../models/db.js";

const homeController = async (req, res) => {
  const countries = await fetchCountries();
  res.json(countries);
};

export { homeController };
