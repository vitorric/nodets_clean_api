import server from './app';

server.listen(process.env.PORT, () => {
  console.log('Server running on port %d', process.env.PORT);
});
