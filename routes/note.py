from fastapi import APIRouter
from fastapi import Request
from fastapi.responses import HTMLResponse, RedirectResponse
from fastapi.templating import Jinja2Templates
from models.note import Note
from config.db import conn
from schemas.note import noteEntity, notesEntityList

note = APIRouter()
templates = Jinja2Templates(directory="templates")



@note.get("/", response_class=HTMLResponse)
async def read_item(request: Request):
    docs= conn.notes.notes.find({})
    newDocs = []
    for doc in docs:
        newDocs.append({
            "_id": str(doc["_id"]),
            "Name": doc["Name"],
            "Address": doc["Address"],
            "paid": doc["paid"]
        })
    return templates.TemplateResponse("index.html",{"request" : request, "newDocs": newDocs})

@note.post("/")
async def create_item(request: Request):
    form= await request.form()
    formDict= dict(form)
    formDict["paid"] = "true" if formDict.get('paid') == 'on' else "false"
    note= conn.notes.notes.insert_one(formDict)
    return RedirectResponse(url="/", status_code=303)