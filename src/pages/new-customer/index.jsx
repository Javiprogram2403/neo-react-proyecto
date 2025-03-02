import React from "react";
import CustomerForm from "../../components/customer/customerForm";
import { Layout } from "../../components/layout";

export function NewCustomerPage() {
  return (
    <Layout>
      <h1>Crear Nuevo Cliente</h1>
      <CustomerForm /> 
    </Layout>
  );
}
