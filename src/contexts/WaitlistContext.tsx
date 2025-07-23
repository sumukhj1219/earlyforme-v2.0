"use client";
import React, { createContext, useState, useContext } from "react";
import {type Template } from "~/types/template";
import { type WaitlistDetails } from "~/types/waitlist";


export type WaitlistContextType = {
  waitlistDetails?: WaitlistDetails;
  setWaitlistDetails: React.Dispatch<React.SetStateAction<WaitlistDetails | undefined>>; 
  template?:Template;
  setTemplate:React.Dispatch<React.SetStateAction<Template | undefined>>;
};

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined);

type WaitlistProviderProps = {
  children: React.ReactNode;
};

export const WaitlistContextProvider = ({ children }: WaitlistProviderProps) => {
  const [waitlistDetails, setWaitlistDetails] = useState<WaitlistDetails | undefined>(undefined);
  const [template, setTemplate] = useState<Template | undefined>(undefined);

  return (
    <WaitlistContext.Provider value={{ waitlistDetails, setWaitlistDetails, setTemplate, template }}>
      {children}
    </WaitlistContext.Provider>
  );
};

export const useWaitlist = () => {
  const context = useContext(WaitlistContext);
  if (!context) throw new Error("useWaitlist must be used within a WaitlistContextProvider");
  return context;
};
