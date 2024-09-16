const validateAccessToken = async (token: string) => {
  const validToken = process.env.ACCESS_TOKEN; 

  if (!validToken) {
    throw new Error("ACCESS_TOKEN environment variable is not set");
  }

  return token === validToken;
};

export default validateAccessToken;
