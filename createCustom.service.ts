import api from "~api";
import { ServerError } from "~types";

/// base code

export const createCustomerBad = async (
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
  const payload = {
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
    updatedAt,
  };
  const response = await api.post<CustomerResponse>(`/customer`, payload);
  if (!response.ok)
    throw new Error(((response.originalError as unknown) as ServerError).type);
  return response.data;
};

//Refactor to use data clumps

export interface customerPayload {
  customerNumber: string;
  email: string;
  firstName: string;
  lastName: string;
  publicKey: string;
}

export interface CustomerResponse {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  customerId: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  zipCode: string;
  createdAt: string;
  updatedAt: string;
}

export const createCustomer = async (customer: customerPayload) => {
  const response = await api.post<CustomerResponse>(`/customer`, customer);
  if (!response.ok)
    throw new Error(((response.originalError as unknown) as ServerError).type);
  return response.data;
};
