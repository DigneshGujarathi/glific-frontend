import { SOCKET } from '.';
const AbsintheSocket = require('@absinthe/socket');
const SocketApolloLink = require('@absinthe/socket-apollo-link');
const Socket = require('phoenix');

export default SocketApolloLink.createAbsintheSocketLink(
  AbsintheSocket.create(new Socket.Socket(SOCKET))
);
