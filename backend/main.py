from fastapi import FastAPI, WebSocket
from credentials import TOKEN
from gpt import ChatGptService

app = FastAPI()
gpt = ChatGptService(TOKEN)

@app.websocket('/ws')
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        answer = await gpt.add_message(data)
        await websocket.send_text(answer)

