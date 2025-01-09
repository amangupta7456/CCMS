from app.database import collection
from app.models import ClientConfig
from bson import ObjectId

# Helper function to convert ObjectId to string for easier handling in FastAPI
def client_config_helper(client_config) -> dict:
    return {
        "client_id": client_config["client_id"],
        "user_preferences": client_config["user_preferences"],
        "product_settings": client_config["product_settings"],
        "access_permissions": client_config["access_permissions"],
        "ui_ux_themes": client_config["ui_ux_themes"],
    }

async def get_all_client_configs():
    configs = []
    async for config in collection.find():
        configs.append(ClientConfig(**config))
    return configs

# Create new configuration
async def create_client_config(client_config: ClientConfig):
    client_config_dict = client_config.dict()
    result = await collection.insert_one(client_config_dict)
    new_client_config = await collection.find_one({"_id": result.inserted_id})
    return client_config_helper(new_client_config)

# Read a client's configuration
async def get_client_config(client_id: str):
    client_config = await collection.find_one({"client_id": client_id})
    if client_config:
        return client_config_helper(client_config)
    return None

# Update a client's configuration
async def update_client_config(client_id: str, client_config: ClientConfig):
    updated_data = {key: value for key, value in client_config.dict().items()}
    result = await collection.update_one(
        {"client_id": client_id},
        {"$set": updated_data},
    )
    if result.modified_count:
        updated_config = await collection.find_one({"client_id": client_id})
        return client_config_helper(updated_config)
    return None

# Delete a client's configuration
async def delete_client_config(client_id: str):
    result = await collection.delete_one({"client_id": client_id})
    if result.deleted_count:
        return {"status": "success", "message": "Configuration deleted"}
    return {"status": "failure", "message": "Configuration not found"}
