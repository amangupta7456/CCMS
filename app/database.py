from motor.motor_asyncio import AsyncIOMotorClient


# MongoDB setup
MONGODB_URL = "mongodb+srv://amangupta1708aj:password/client_config_db"  
DATABASE_NAME = "client_config_db"
COLLECTION_NAME = "client_configurations"

client = AsyncIOMotorClient(MONGODB_URL)
db = client[DATABASE_NAME]
collection = db[COLLECTION_NAME]
