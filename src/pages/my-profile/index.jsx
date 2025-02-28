// pages/profile/MyProfilePage.js
import React from "react";
import ProfileForm from "../../components/auth/profileForm";
import { Layout } from "../../components/layout";
import { Typography } from "@mui/material";

export function MyProfilePage() {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>
      </Typography>
      <ProfileForm />
    </Layout>
  );
}
