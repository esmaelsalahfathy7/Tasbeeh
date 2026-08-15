import React, { useEffect, useState } from "react";
import { QuraanMessageContext } from "./QuraanMessageContext";
import type { Surah } from "../utilities/interfaces";
import getQuraanMessage from "../api/getQuraanMessage";
import LoadingComponent from "../components/LoadingComponent";
export default function QuraanMessageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [surah, setSurah] = useState<Surah | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRandomSurah() {
      try {
        const data = await getQuraanMessage();
        setSurah({
          text: data.data.text,
          surah: data.data.surah,
          numberInSurah: data.data.numberInSurah,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getRandomSurah();
  }, []);

  if (loading) {
    return <LoadingComponent />;
  }

  return (
    <QuraanMessageContext.Provider value={{ surah }}>
      {children}
    </QuraanMessageContext.Provider>
  );
}
