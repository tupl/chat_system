+ To do

+ Client (React & Redux)

  - socket.io wrapper [ ]
  - messageManager [ ]

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
