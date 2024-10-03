"use client";

import React, { createContext, useContext, useState } from "react";

const StoreData = createContext<any>(null);

export const StoreDataProvider = ({
  children
}: {
  children: React.ReactElement;
}) => {
  const [user, setUser] = useState({
    name: "mohamed",
    email: "mohamed@gmail.com",
    img: "https://github.com/shadcn.png",
    id: 1
  });
  const [employeeInputs, setEmployeeInputs] = useState({
    feildRequired: [
      {
        fieldName: "full name",
        fieldType: "text",
        required: true,
        name: "full_name"
      }
    ],
    insurance_tax: {
      insurance: "no",
      tax: "no"
    },
    employee_links: [
      {
        title: "Resume",
        date: 22 / 12 / 2022,
        required: false,
        show_data: true
      },
      {
        title: "Resume",
        date: 22 / 12 / 2022,
        show_data: false,
        required: false
      },
      {
        title: "LinkedIn",
        required: false
      },
      {
        title: "FaceBook",
        required: false
      },
      {
        title: "Twitter",
        required: false
      }
    ],
    Contract_End_Rule: {
      contract_end: "no"
    },
    Default_Setting: {
      holidays: ["Friday", "Saturday"],
      working_hours_Start: "",
      working_hours_End: "",
      Default_Time_Zone: ""
    },
    Notifications: {
      channels: ["Email",],
      alerts: ["Files"]
    }
  });
  return (
    <StoreData.Provider
      value={{
        user,
        setUser,
        employeeInputs,
        setEmployeeInputs
      }}
    >
      {children}
    </StoreData.Provider>
  );
};
export const Store = () => {
  return useContext(StoreData);
};
