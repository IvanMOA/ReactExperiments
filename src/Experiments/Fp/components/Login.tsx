import React, { useState } from "react";
import * as O from "fp-ts/Option";
import { Input } from "./Input";
import { TaskEither } from "fp-ts/lib/TaskEither";
import { pipe } from "fp-ts/lib/function";

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
      <Input
        onChange={({ target: { value } }) =>
          value === "" ? setEmailOpt(O.none) : setEmailOpt(O.some(value))
        }
        label="Email"
        id="email"
        data-testid="email_input"
      />
      <Input
        onChange={({ target: { value } }) =>
          value === "" ? setEmailOpt(O.none) : setEmailOpt(O.some(value))
        }
        label="Email"
        id="email"
        data-testid="password_input"
      />
      <button
        className="px-4 py-2 bg-black text-white rounded-sm focus:ring-1 focus:"
        onClick={onSubmit}
      >
        Submit
      </button>
    </form>
  );
};
