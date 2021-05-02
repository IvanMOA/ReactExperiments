import { Login } from "./components";
import React, { useState } from "react";
import * as TE from "fp-ts/TaskEither";
import { auth } from "../../services/supabase";

export const Fp = () => {
  const onLogin = (email: string, password: string) =>
    TE.tryCatch<string, void>(
      async () => {
        await auth.signIn({ email, password });
      },
      () => "Error while trying to sign in"
    );
  return (
    <section className="screen_container w-screen h-screen grid grid-rows-1 grid-cols-2 place-items-center overflow-hidden bg-blue-500">
      <main className="bg-white shadow-md rounded-sm p-4">
        <Login onLogin={onLogin} />
      </main>
      <aside>
        <main className="bg-white shadow-md rounded-sm p-4"></main>
      </aside>
    </section>
  );
};
