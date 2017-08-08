const redirect = (res, statusCode, url) => {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Location', url);
  return res.end(`Redirecting to ${url}`);
};

module.exports = redirect;
