import React, { FormEvent } from "react";

const Form = () => {
    function handleSubmit(event: FormEvent<HTMLFormElement>): void {
        throw new Error("Function not implemented.");
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
                type="text"
                placeholder="Masukkan Server"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Masukkan Email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <button className="btn btn-primary w-full" type="submit">
              Submit
            </button>
          </form>
          </div>
    )
}

export default Form;