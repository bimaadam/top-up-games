import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

const Form = () => {
  const searchParams = useSearchParams();
  const gameCode = searchParams.get("game_code"); // Ambil query param
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<any | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);
  
    const formData = new FormData(event.currentTarget);
    const idGame = formData.get("idGame") as string;
    const server = formData.get("server") as string;
  
    if (!idGame) {
      setError("ID game harus diisi!! jika game menggunakan server gunakan tanda (server) ");
      setLoading(false);
      return;
    }
  
    try {
      const res = await fetch(
        `pilih-item/api/check-account?game_code=${gameCode}&user_id=${encodeURIComponent(idGame)}&server=${server}`
      );
  
      if (!res.ok) {
        throw new Error("Gagal menghubungi server.");
      }
  
      const data = await res.json();
  
      // Debugging untuk melihat respons API
      // console.log("API Response:", data);
  
      if (data?.data?.status === 1 && data?.data?.data) {
        const usernameRaw = data.data.data.username || "Tidak ditemukan";
  
        // Hapus karakter backslash dari username
        // const username = usernameRaw.replace(/\\/g, "");
  
        setResponse({
          // username: username, // Username yang sudah bersih
          is_valid: data.data.data.is_valid,
          region: data.data.data.is_indonesia ? "Indonesia" : "Luar Indonesia", // Tambahkan region jika ada
        });
      } else {
        throw new Error(data?.data?.message || "Data tidak valid atau Server sedang sibuk.");
      }
    } catch (err: any) {
      console.error("Error:", err.message || err);
      setError(err.message || "Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="card bg-base-300 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Masukkan Detail Top-Up Game {gameCode}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">ID Game</span>
          </label>
          <input
            name="idGame"
            type="text"
            placeholder="Masukkan ID Game"
            className="input input-bordered w-full"
            required
          />
          <label className="label">
            <span className="label-text">Server Game Jika Ada (Opsional)</span>
          </label>
          <input
          name="server" 
          placeholder="Masukkan Server Game"
          className="input input-bordered w-full"
          type="text" />
        </div>
        <button className="btn btn-primary w-full" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {response && (
        <div className="bg-secondary p-4 rounded-lg mt-4">
          <h3 className="text-lg font-bold mb-2">Detail Akun {gameCode}</h3>
          <p>
            <strong>Username:</strong> {response.username}
          </p>
          <p>
            <strong>Valid:</strong> {response.is_valid ? "Ya" : "Tidak"}
          </p>
          <p>
            <strong>Region:</strong> {response.is_indonesia ? "Indonesia" : "Luar Indonesia"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Form;
