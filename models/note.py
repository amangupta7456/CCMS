from pydantic import BaseModel

class Note(BaseModel):
    Name: str
    Address: str
    paid: bool | None =  None