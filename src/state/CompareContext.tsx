/* eslint-disable react-refresh/only-export-components */
// her gemmer vi hvilke dyner brugeren har valgt til sammenligning

import React, { createContext, useContext, useMemo, useState } from "react";

type CompareContextValue = {
  selectedIds: number[];
  isSelected: (id: number) => boolean;
  toggle: (id: number) => void;
  clear: () => void;
  canCompare: boolean;
  atCapacity: boolean;
};

const CompareContext = createContext<CompareContextValue | null>(null);

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const value = useMemo<CompareContextValue>(() => {
    // tjekker om en dyne allerede er valgt
    const isSelected = (id: number) => selectedIds.includes(id);

    // max 2 dyner
    const atCapacity = selectedIds.length >= 2;
    // præcis 2 dyner = klar til at sammenligne
    const canCompare = selectedIds.length === 2;

    const toggle = (id: number) => {
      setSelectedIds(prev => {
        // hvis den allerede er valgt, fjerner vi den
        if (prev.includes(id)) return prev.filter(x => x !== id);
        // hvis der allerede er 2, gør vi ingenting
        if (prev.length === 2) return prev;
        // ellers lægger vi den nye id oveni
        return [...prev, id];
      });
    };

    const clear = () => setSelectedIds([]);

    return { selectedIds, isSelected, toggle, clear, canCompare, atCapacity };
  }, [selectedIds]);

  // provider gør konteksten tilgængelig for resten af appen
  return <CompareContext.Provider value={value}>{children}</CompareContext.Provider>;
}

export function useCompare() {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error("useCompare must be used inside <CompareProvider>");
  return ctx;
}
