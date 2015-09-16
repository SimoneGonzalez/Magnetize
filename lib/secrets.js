var secrets = {
  MONGODB_URL: 'mongodb://localhost:27017/magnetize'
};

Object.keys(secrets).forEach(function(key) {
  process.env[key] = process.env[key] || secrets[key];
});