import {
  customerPayload,
  createCustomer,
  createCustomerBad,
} from "./createCustom.service";

/// base code
const handleOnCreateCustomerBad = async (
  customNumber,
  email,
  firstName,
  lastName,
  publicKey,
  customerId,
  address,
  city,
  country,
  phone,
  zipCode,
  createdAt,
  updatedAt
) => {
  try {
    const response = await createCustomerBad(
      customNumber,
      email,
      firstName,
      lastName,
      publicKey,
      customerId,
      address,
      city,
      country,
      phone,
      zipCode,
      createdAt,
      updatedAt
    );
  } catch (error) {
    console.log(error);
  }
};

//Refactor to use data clumps

const handleOnCreateCustomer = async (data: customerPayload) => {
  try {
    const response = await createCustomer(data);
  } catch (error) {
    console.log(error);
  }
};
