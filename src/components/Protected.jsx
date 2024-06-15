import { useState, useRef, useEffect } from "react";

const Protected = ({ password, children }) => {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const correctSoundRef = useRef(null);
  const incorrectSoundRef = useRef(null);
  const errorTimeoutRef = useRef(null);

  const handlePasswordChange = (e) => {
    setEnteredPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredPassword === password) {
      correctSoundRef.current.play();
      setIsAuthorized(true);
    } else {
      incorrectSoundRef.current.play();
      setErrorMessage("incorrecto");
      clearTimeout(errorTimeoutRef.current);
      errorTimeoutRef.current = setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(errorTimeoutRef.current);
    };
  }, []);

  return (
    <div>
      {isAuthorized ? (
        children
      ) : (
        <>
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
          {errorMessage && <p className="text-xs text-[red]">{errorMessage}</p>}
        </>
      )}
      <audio ref={correctSoundRef} src="/si.mp3" />
      <audio ref={incorrectSoundRef} src="/no.mp3" />
    </div>
  );
};

export default Protected;
