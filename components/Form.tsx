import React, { FormEvent, useState } from "react";

const Form = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<any | null>(null); // Menyimpan data respons API.

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setResponse(null);

    // Ambil data dari form
    const formData = new FormData(event.currentTarget);
    const idGame = formData.get("idGame") as string;
    const server = formData.get("server") as string;

    // Gabungkan ID dan server dalam format id(server)
    const userId = `${idGame}(${server})`;

    try {
      // Kirim data ke API handler
      const res = await fetch(
        `/pilih-item/api/check-account?game_code=mobilelegend&user_id=${encodeURIComponent(userId)}`,
        {
          method: "GET",
        }
      );

      if (!res.ok) {
        throw new Error("Gagal menghubungi server");
      }

      const data = await res.json();

      // Validasi data
      if (data.data && data.data.status === 1) {
        setResponse(data.data);
      } else {
        throw new Error(data.data.error_msg || "Data tidak valid.");
      }
    } catch (err: any) {
      setError(err.message || "Terjadi kesalahan.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card bg-base-300 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Masukkan Detail Top-Up</h2>
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
        </div>
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Server</span>
          </label>
          <input
            name="server"
            type="text"
            placeholder="Masukkan Server"
            className="input input-bordered w-full"
            required
          />
        </div>
        <button className="btn btn-primary w-full" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {response && (
        <div className="bg-secondary p-4 rounded-lg mt-4">
          <h3 className="text-lg font-bold mb-2">Detail Akun</h3>
          <p>
            <strong>Username:</strong> {response.data.username}
          </p>
          <p>
            <strong>Valid:</strong> {response.data.is_valid ? "Ya" : "Tidak"}
          </p>
          <p>
            <strong>Region:</strong> {response.data.is_indonesia ? "Indonesia" : "Luar Indonesia"}
          </p>
        </div>
      )}
    </div>
  );
};

export default Form;
