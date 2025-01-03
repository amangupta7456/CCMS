def noteEntity(item) -> dict:
    return {
        "_id": str(item["_id"]),
        "Name": item["Name"],
        "Address": item["Address"],
        "paid": item["paid"],
    }

def notesEntityList(items) -> list:
    return [noteEntity(item) for item in items]