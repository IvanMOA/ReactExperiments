import React, { useState } from "react";
import * as O from "fp-ts/Option";
import { Input } from "./Input";
import { TaskEither } from "fp-ts/lib/TaskEither";
import { pipe } from "fp-ts/lib/function";
import { Button } from "@material-ui/core";

interface LoginProps {
  onLogin: (email: string, password: string) => TaskEither<String, void>;
}
export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [emailOpt, setEmailOpt] = useState<O.Option<string>>(O.none);

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    pipe(onLogin);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col space-y-3">
      <button
        className="px-4 py-2 bg-black text-white rounded-sm focus:ring-1 focus:"
        onClick={onSubmit}
      >
        Submit
      </button>
      <Button>Hola bro</Button>
    </form>
  );
};
