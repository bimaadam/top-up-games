import { NextResponse } from "next/server";
import md5 from "crypto-js/md5";

// Konfigurasi Merchant ID dan Secret Key
const MERCHANT_ID = process.env.NEXT_PUBLIC_MERCHANT_ID;
const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const gameCode = searchParams.get("game_code");
    const userId = searchParams.get("user_id");

    // Validasi parameter
    if (!gameCode || !userId) {
      return NextResponse.json(
        { error: "Parameter 'game_code' dan 'user_id' wajib diisi." },
        { status: 400 }
      );
    }

    // Generate Signature
    const signature = md5(MERCHANT_ID + SECRET_KEY).toString();

    // Buat URL API
    const apiUrl = `https://v1.apigames.id/merchant/${MERCHANT_ID}/cek-username/${gameCode}?user_id=${userId}&signature=${signature}`;
    
    // Logging untuk debug
    console.log("API URL:", apiUrl);
    console.log("Generated Signature:", signature);

    // Fetch API eksternal
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    
    const data = await response.json();

    // Handle jika respons tidak OK
    if (!response.ok) {
      return NextResponse.json(
        { error: data.error_msg || "Gagal mengecek username." },
        { status: response.status }
      );
    }

    // Respons sukses
    return NextResponse.json({
      message: "Username valid.",
      data,
    });
  } catch (error) {
    // Respons error internal
    return NextResponse.json(
      { error: "Internal Server Error", details: error.message },
      { status: 500 }
    );
  }
}
