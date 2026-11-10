const queryServers = (serverName, q) => {
  return Promise.race([
    getJSON(`/${serverName}?q=${q}`),
    getJSON(`/${serverName}_backup?q=${q}`),
  ]);
};

const gougleSearch = async (q) => {
  const servers = ['web', 'image', 'video'];

  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('timeout')), 80)
  );

  const search = Promise.all(servers.map((name) => queryServers(name, q)));

  const results = await Promise.race([search, timeout]);

  return servers.reduce((acc, name, i) => {
    acc[name] = results[i];
    return acc;
  }, {});
};
