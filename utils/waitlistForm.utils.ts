export const validateCompany = (
  value: string,
  setError: (error: string) => void,
  setIsError: (isError: boolean) => void,
) => {
  if (!value || value.length < 3) {
    setError("Your company name is required");
    setIsError(true);
    return false;
  } else {
    setError("");
    setIsError(false);
    return true;
  }
};
export const resetForm = (
  setName: (name: string) => void,
  setEmail: (email: string) => void,
  setCompanyName: (companyName: string) => void,
  setError: (error: string) => void,
  setIsError: (isError: boolean) => void,
) => {
  setName("");
  setEmail("");
  setCompanyName("");
  setError("");
  setIsError(false);
  document.querySelectorAll("input").forEach((input) => {
    input.className = "";
  });
};
export const validateEmail = (
  value: string,
  setError: (error: string) => void,
  setIsError: (isError: boolean) => void,
) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!value || !emailRegex.test(value)) {
    setError("Please enter a valid email address");
    setIsError(true);
    return false;
  } else {
    setError("");
    setIsError(false);
    return true;
  }
};
export const validateName = (
  value: string,
  setError: (error: string) => void,
  setIsError: (isError: boolean) => void,
) => {
  if (!value || value.length < 3) {
    setError("Your full name is required");
    setIsError(true);
    return false;
  } else {
    setError("");
    setIsError(false);
    return true;
  }
};
export const resetError = (
  e: React.FocusEvent<HTMLInputElement>,
  setError: (error: string) => void,
  setIsError: (isError: boolean) => void,
) => {
  e.currentTarget.className = "";
  setError("");
  setIsError(false);
};
export const joinWaitlist = async (
  name: string,
  email: string,
  companyName: string,
) => {
  const response = await fetch("/api/waitlist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      companyName,
    }),
  });

  return response.json();
};
