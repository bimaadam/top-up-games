import React from 'react';

const Form1 = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Kritik atau Saran!</h1>
          <p className="py-6">
            Jika ada yang ingin dikritik atau disarankan, silakan berargumen. Nanti akan saya kembangkan kembali. Terima kasih sudah mengunjungi website kami. Salam RB Games.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form
            className="card-body"
            action="mailto:rinbim.dev@gmail.com"
            method="POST"
            encType="text/plain"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="Email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pesan</span>
              </label>
              <textarea
                name="Message"
                placeholder="Tulis kritik atau saran Anda..."
                className="textarea textarea-bordered"
                required
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form1;
