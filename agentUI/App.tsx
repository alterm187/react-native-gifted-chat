import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat, IMessage } from './src';

const user = {
  _id: 1,
  name: 'Developer',
};

const App = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: require('./src/assets/avatar.png'),
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={user}
    />
  );
};

export default App;
