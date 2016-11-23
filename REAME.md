+ To do

+ Client (React & Redux)

  - MessageContainer [ x ]
  - Message [ x ] (Each message in message container)
  - MessageEnter [ x ] (Button to enter a message)
  - MessageBox [ x ] (Where to enter the message)

+ Server - Frontier (NodeJs)

  // post a message to this chat room
  - /api/[chatroomid]/post
    required:
      username,
      content

    response:
      {
        status: OK/FAIL,
        message: ""/[Why it fail]
      }
