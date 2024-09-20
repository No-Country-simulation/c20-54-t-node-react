import endpoints from "./endpoints";
import axios from "axios";

export const getPackageByPrice = async (price) => {
  try {
    const { data } = await axios.get(endpoints.getPackages, {
      params: {
        price: price,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getPackageByCategoryAndPrice = async (category, price) => {
  try {
    const { data } = await axios.get(endpoints.getPackages, {
      params: {
        category: category,
        price: price,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getPackageSort = async (category, price, sort) => {
  const params = {
    price: price,
    sort: sort,
  };

  if (category != null && category != 0) {
    params.category = category;
  }
  try {
    const { data } = await axios.get(endpoints.getPackages, { params: params });
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const getPackageByCategoryPriceAndSort = async (category, price, sort) => {
  const params = {
    price: price,
  };

  if (category != null && category != 0) {
    params.category = category;
  }
  if (sort != null && category != 0) {
    params.category = category;
  }
  try {
    const { data } = await axios.get(endpoints.getPackages, { params: params });
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};


