async function getQuraanMessage() {
  const response = await fetch(
    `https://api.qurani.ai/gw/qh/v1/ayah/random/quran-uthmani`,
  );
  if (!response) {
    throw new Error("Failed To  Get Random Surah");
  }

  return await response.json();
}

export default getQuraanMessage;
