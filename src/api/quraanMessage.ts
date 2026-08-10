import type { Surah } from "../utilities/interfaces";

async function quraanMessage(
  setSurah: React.Dispatch<React.SetStateAction<Surah | null>>,
) {
  const response = await fetch(
    `https://api.qurani.ai/gw/qh/v1/ayah/random/quran-uthmani`,
  );
  const data = await response.json();
  setSurah({
    text: data.data.text,
    surah: data.data.surah,
    numberInSurah: data.data.numberInSurah,
  });
}

export default quraanMessage;
