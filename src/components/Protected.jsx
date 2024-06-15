import { useState } from "react";

const Protected = ({ password, children }) => {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handlePasswordChange = (e) => {
    setEnteredPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredPassword === password) {
      setIsAuthorized(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (isAuthorized) {
    return <>{children}</>;
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="items-centerpy-2 flex py-2 text-xs"
      >
        <div className="flex items-center gap-1">
          <input
            type="password"
            value={enteredPassword}
            onChange={handlePasswordChange}
            className="w-full"
          />
          <button type="submit">→</button>
        </div>
      </form>
    </div>
  );
};

export default Protected;
