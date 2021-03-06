const fetchUserData = async (username, fresh) => {
  let res;
  try {
    res = await fetch(process.env.API_BASE + username + (fresh ? '?fresh=true' : ''), {
      method: 'GET',
    });
  } catch (e) {
    return {
      status: 500,
      message: 'Internal Server Error',
    };
  }

  if (res.ok) {
    return res.json();
  }

  return {
    status: 500,
    message: 'Internal Server Error',
  };
};

export default fetchUserData;
