export const uploadImage = async (
  e: React.ChangeEvent<HTMLInputElement>,
  uploadAsset: (data: { url: string }) => void
): Promise<string | null> => {
  const file = e.target.files?.[0];
  if (!file) return null;

  const getUrlRes = await fetch("/api/upload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fileName: file.name }),
  });

  const { url } = await getUrlRes.json();

  const uploadRes = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
    },
    body: file,
  });

  if (uploadRes.ok) {
    const publicUrl = `https://pub-2115bce7adca49dba7376460f5f52e47.r2.dev/${file.name}`;
    uploadAsset({ url: publicUrl });
    return publicUrl;
  } else {
    console.error("❌ Upload failed");
    return null;
  }
};
