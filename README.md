<h1>Guide howto run the project</h1>
Set Up MongoDB
Install MongoDB: If you haven't already, you need to set up MongoDB.Use a cloud-managed MongoDB  MongoDB Atlas.

Create a virtual environment:
python -m venv venv 
.\venv\Scripts\activate

And then install fatapi,uvicorn,pydantic
pip install fastapi
pip install uvicorn "[standard]"
pip install motor
check if pydantic not installed :
pip install pydantic

and now copy url of mongodb atlas nd paste it in mongo_url with password
DATABASE_NAME = "client_config_db"
COLLECTION_NAME = "client_configurations"

To start the FastAPI server, run:
uvicorn app.main:app --reload

Now in another terminal
Create a New React App:
npx create-react-app ccms-frontend
cd ccms-frontend

npm install axios react-router-dom react-bootstrap

Finally, to run the React app:
npm start
