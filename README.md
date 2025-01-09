<h1>CCMS all modules installation guide</h1>
Set Up MongoDB<br>
Install MongoDB: If you haven't already, you need to set up MongoDB.Use a cloud-managed MongoDB  MongoDB Atlas.
<br>
Create a virtual environment:<br>
python -m venv venv <br>
.\venv\Scripts\activate<br>

And then install fatapi,uvicorn,pydantic<br>
pip install fastapi<br>
pip install uvicorn "[standard]"<br>
pip install motor<br>
check if pydantic not installed :<br>
pip install pydantic<br>

and now copy url of mongodb atlas nd paste it in mongo_url with password<br>
DATABASE_NAME = "client_config_db"<br>
COLLECTION_NAME = "client_configurations"<br>

To start the FastAPI server, run:<br>
uvicorn app.main:app --reload<br>

Now in another terminal<br>
Create a New React App:<br>
npx create-react-app ccms-frontend<br>
cd ccms-frontend<br>

npm install axios react-router-dom react-bootstrap<br>

Finally, to run the React app:<br>
npm start<br>
